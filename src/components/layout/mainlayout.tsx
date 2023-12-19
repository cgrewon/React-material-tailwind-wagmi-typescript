import React from 'react';
import Header from '../header';


const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return <div className='w-full bg-blue-gray-900 min-h-[100vh] relative overflow-y-auto'>
        <Header />
        {children}
    </div>
}

export default MainLayout;