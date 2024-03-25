import { SideBar } from '@/components/sidebar/Sidebar';
import Widgets from '@/components/widget/Widget';
import React from 'react';

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <div className="flex flex-col md:flex-row mx-auto min-h-screen">
      <div className="w-16 md:w-60 fixed h-full ">
        <SideBar />
      </div>
      <div className="flex-1 ml-16 md:ml-60 p-4 ">{children}</div>

      <div className="hidden lg:inline-flex max-w-96">
        <Widgets />
      </div>
    </div>
  );
}
