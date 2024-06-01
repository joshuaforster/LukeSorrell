import Header from "./Header";
import { Outlet } from "react-router-dom";
import React from 'react';
import Footer from "./Footer";

export default function Layout() {
  return (
    <div >
      <Header />
        <main>
            <Outlet />
        </main>
      <Footer />
    </div>
  );
}