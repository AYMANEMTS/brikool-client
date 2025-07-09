import React, {useEffect, useState} from "react";
import {Outlet, useLocation, useSearchParams} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../utils/ScrollToTop";
import ClientSpeedDial from "../components/ClientSpeedDial";
import ClientApi from "../api/ClientApi";
import {useLoading} from "../context/LoadingProvider";
import RequiredCity from "../components/auth/RequiredCity";
import {useQuery} from "react-query";
import {useClientContext} from "../context/ClientProvider";
import Spinner from "../utils/Spinner";
import ServerNotRespond from "../utils/ServerNotRespond";
import AuthApi from "../api/AuthApi";
import VerifyEmail from "../components/auth/VerifyEmail";
import {enqueueSnackbar} from "notistack";


function ClientLayout() {
    const {pathname} = useLocation()
    const [requiredCity, setRequiredCity] = useState(false)
    const [verifyEmailModal, setVerifyEmailModal] = useState(false)
    const {setUser, setIsAuthenticated,isAuthenticated,user} = useLoading()
    const [searchParams,setSearchParams] = useSearchParams()
    const jwt = searchParams.get("jwt")

    const [params] = useSearchParams();

    useEffect(() => {
        const error = params.get('error');
        if (error === 'email_exists') {
            enqueueSnackbar("This email is already registered. Please log in using your password.",{variant:"error"})
        } else if (error === 'auth_failed') {
            enqueueSnackbar("Google authentication failed. Please try again.",{variant:"error"})
        }
    }, [params]);

    useEffect(() => {
        if (jwt){
            localStorage.setItem('jwt', jwt)
            setSearchParams({})
        }
        const checkAuth = async () => {
            try {
                const res = await AuthApi.checkAuth();
                setIsAuthenticated(true)
                setUser(res.data.user)
            } catch (error) {
                localStorage.clear()
                setIsAuthenticated(false)
                setUser(null)
                console.error("Authentication check failed:", error);
            }
        };
        checkAuth().catch(e => console.log(e))
    }, [setIsAuthenticated, setUser, jwt, setSearchParams]);

    useEffect(() => {
        if (user) {
            if (!user?.city) {
                setRequiredCity(true);
            } else {
                setRequiredCity(false);
            }
        } else {
            setVerifyEmailModal(false);
            setRequiredCity(false);
        }

    }, [user, pathname]);


    const {setWorkers,setCategories,setUserJobs} = useClientContext()

    const { isFetching: isFetchingCategory, isError: isErrorCategory } = useQuery('categories', ClientApi.getCategories, {
        onSuccess: (data) => {
            setCategories(data.data.category);
        },
        onError: err => console.error(err),
        retry: false,
        refetchOnWindowFocus: false,
    });
    const { isFetching: isFetchingWorkers, isError: isErrorWorkers } = useQuery("jobs", ClientApi.getJobs, {
        onSuccess: (data) => {
            setWorkers(data.data);
        },
        onError: err => console.error(err),
        retry: false,
        refetchOnWindowFocus: false,
    });
    const { isFetching: isFetchingUserJobs, isError: isErrorUserJobs } = useQuery("userJobs", ClientApi.getUserJobs, {
        onSuccess: (data) => {
            setUserJobs(data.data);
        },
        onError: err => console.error(err),
        refetchOnWindowFocus: false,
        retry: false,
        enabled: !!user

    });

    const isLoading = isFetchingCategory || isFetchingWorkers || isFetchingUserJobs;
    const isError = isErrorCategory || isErrorWorkers || isErrorUserJobs;

    if (isError){
        return <ServerNotRespond />
    }
    if (isLoading){
        return <Spinner open={isLoading} />
    }

    return (
        <>
            <div className={`flex flex-col min-h-screen bg-white dark:bg-[#111111] text-gray-900 dark:text-gray-100 transition-colors duration-300 `}>
                <ScrollToTop />

                {/* Navbar */}
                <Navbar />

                {/* Main Content Area */}
                <main className={`flex-grow w-full h-full py-0 ${pathname !== '/chat' && 'md:mt-32'}`}>
                    <div className="container mt-3 mx-auto px-2 sm:px-4 md:px-6 lg:px-8 max-w-6xl h-full">
                        <Outlet />
                    </div>
                </main>

                {/* Footer */}
                {pathname === "/chat" ? null : (
                    <div className={"    mt-14"}>
                        <Footer />
                    </div>
                )}

                {requiredCity && (
                    <RequiredCity handleOpen={() => setRequiredCity(!requiredCity)} open={requiredCity}/>
                )}

                {verifyEmailModal && (
                    <VerifyEmail handleOpen={() => setVerifyEmailModal(!verifyEmailModal)} open={verifyEmailModal} />
                )}
            </div>
            <ClientSpeedDial />
        </>
    );
}


export default ClientLayout;
