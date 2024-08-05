import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
    <div className="min-h-[100vh] flex flex-col relative bg-[#FFF7ED]">
    <Header />
      <main>
        <Outlet />
      </main>

      <Footer />  
    </div>
      
    </>
  );
};

export default Layout;
