import { SideBar } from '@/components/sidebar/Sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:flex-row mx-auto min-h-screen">
      {/* Sidebar */}
      <div className="w-16 md:w-60 fixed h-full ">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-16 md:ml-60 p-4 ">{children}</div>
    </div>
  );
}
