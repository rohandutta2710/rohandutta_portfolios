import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Icons from "./Icons";
function MainPage() {
    return (
        <>
           <Icons/>
           <Navbar/>
           <About/>
           <Skills/>
           <Projects/>
           <Contact/>
           <Footer/>
        </>
    )
}
export default MainPage;