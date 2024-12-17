import './App.css';
import {router} from "./routes";
import {RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import { SnackbarProvider,closeSnackbar  } from 'notistack';
import {LoadingProvider} from "./context/LoadingProvider";
import Spinner from "./utils/Spinner";
import {AdminProvider} from "./context/AdminProvider";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import {axiosClient} from "./api/axios";
import {ClientProvider} from "./context/ClientProvider";
import {ThemeProvider} from "@material-tailwind/react";
import defaultStyle from "./utils/defaultStyles";

const queryClient = new QueryClient()

function App() {
    const { i18n } = useTranslation();
    useEffect(() => {
        if (i18n.language) {
            axiosClient.defaults.headers['Accept-Language'] = i18n.language;
        }
    }, [i18n.language]);

    return (
        <AdminProvider>
            <ClientProvider>
                <LoadingProvider>
                    <QueryClientProvider client={queryClient}>
                        <SnackbarProvider
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            action={(snackbarId) => (
                                <button onClick={() => closeSnackbar(snackbarId)}>X</button>
                            )}
                        >
                            <ThemeProvider value={defaultStyle}>
                                <RouterProvider router={router} />
                                <Spinner />
                            </ThemeProvider>
                        </SnackbarProvider>
                    </QueryClientProvider>
                </LoadingProvider>
            </ClientProvider>
        </AdminProvider>
  );
}

export default App;
