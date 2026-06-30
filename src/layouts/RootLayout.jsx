// import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const RootLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            {/* Navbar */}
            <Navbar/>
            <main className='flex-1'>
                <Outlet/>
            </main>
            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default RootLayout;