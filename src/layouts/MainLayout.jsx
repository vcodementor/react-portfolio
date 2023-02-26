import {React} from "react";
import { Outlet } from "react-router-dom";
import Header from  "./Header";
import Footer from  "./Footer";

// import ScrollToTop from "../components/ScrollToTop";
// import UseScrollToTop from "../hooks/UseScrollTop";

export default function MainLayout() {
    return (
        <>
            <Header />
            <main className="">
                <Outlet />  
            </main>
           <Footer/>
            {/* <UseScrollToTop /> */}
        </>
    );
}