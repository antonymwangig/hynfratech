import React, { useState, ReactNode } from 'react';
import{ ConsoleHeader} from '../../components/header';
import {Sidebar} from '../../components/sidebar';

import { Outlet, useNavigate } from 'react-router-dom';

const DefaultLayout: React.FC<any> = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <ConsoleHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <Outlet />

            </div>
          </main>
        </div>
        </div>
      </div>
  );
};

export default DefaultLayout;
