import React from "react";
import Navbar from "./src/navbar";
import Maincontent from "./src/maincontent";
import Sidebar from "./src/Sidebar";
import Footer from "./src/footer";

export default function Start(){
    return (
    <div>
        <Navbar />
        <Sidebar />
        <Maincontent />
        <Footer />
    </div>
    )
}