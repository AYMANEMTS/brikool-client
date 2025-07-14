import React from 'react';
import { useQuery } from 'react-query';
import { axiosClient } from '../../api/axios';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    LineChart, Line, Legend
} from 'recharts';

function HomePage() {
    const { data, isLoading, error } = useQuery(
        'dashboardCards',
        () => axiosClient.get('/admin/dashboard-cards').then(res => res.data),
        { staleTime: 60 * 1000 }
    );

    if (isLoading) return <div className="p-4 text-center">Loading...</div>;
    if (error) return <div className="p-4 text-center text-red-600">Error loading dashboard data</div>;

    const { totalUser, totalJobs, jobsSuspended, jobsActivated } = data;

    // Sample data for charts — replace with your real data if you have it!
    const jobsStatusData = [
        { name: 'Suspended', value: jobsSuspended },
        { name: 'Activated', value: jobsActivated },
    ];

    // Example: Users growth over last 6 months (dummy data)
    const usersGrowthData = [
        { month: 'Jan', users: 120 },
        { month: 'Feb', users: 210 },
        { month: 'Mar', users: 350 },
        { month: 'Apr', users: 400 },
        { month: 'May', users: 450 },
        { month: 'Jun', users: totalUser }, // Use actual totalUser for current month
    ];

    return (
        <div className="mt-12 mx-5">
            {/* Cards grid */}
            <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
                <Card title="Users" value={totalUser} bgGradient="from-blue-600 to-blue-400" shadow="shadow-blue-500/40" icon={userIcon} />
                <Card title="Jobs" value={totalJobs} bgGradient="from-pink-600 to-pink-400" shadow="shadow-pink-500/40" icon={jobsIcon} />
                <Card title="Suspended Jobs" value={jobsSuspended} bgGradient="from-yellow-600 to-yellow-400" shadow="shadow-yellow-500/40" icon={suspendedIcon} />
                <Card title="Activated Jobs" value={jobsActivated} bgGradient="from-green-600 to-green-400" shadow="shadow-green-500/40" icon={activatedIcon} />
            </div>

            {/* Charts container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Bar chart for jobs status */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-4">Jobs Status</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={jobsStatusData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#f59e0b" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Line chart for users growth */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-4">Users Growth (Last 6 Months)</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={usersGrowthData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="users" stroke="#2563eb" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

const Card = ({ title, value, icon, bgGradient, shadow }) => (
    <div className="relative flex flex-col bg-white rounded-xl shadow-md h-fit pb-8 text-gray-700">
        <div className={`bg-gradient-to-tr ${bgGradient} text-white shadow-lg ${shadow} absolute -mt-4 grid h-16 w-16 place-items-center mx-4 rounded-xl overflow-hidden`}>
            {icon}
        </div>
        <div className="p-4 text-right">
            <p className="text-sm font-semibold text-blue-gray-600 pb-5">{title}</p>
            <h4 className="text-2xl font-semibold text-blue-gray-900">{value}</h4>
        </div>
    </div>
);

// SVG icons (reused from previous code for simplicity)
const userIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
        <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
        <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd"></path>
        <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
    </svg>
);

const jobsIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd"></path>
    </svg>
);

const suspendedIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 4h.01M4.5 12a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
    </svg>
);

const activatedIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

export default HomePage;
