import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/portfolio/Header";
import Hero from "./components/portfolio/Hero";
import About from "./components/portfolio/About";
import Education from "./components/portfolio/Education";
import Skills from "./components/portfolio/Skills";
import Projects from "./components/portfolio/Projects";
import Certificates from "./components/portfolio/Certificates";
import Experience from "./components/portfolio/Experience";
import Contact from "./components/portfolio/Contact";
import Footer from "./components/portfolio/Footer";

import { initScrollAnimations } from "./utils/animations";

function App() {
    useEffect(() => {
        const cleanup = initScrollAnimations();
        return () => cleanup();
    }, []);

    return (
        <div className="App flex flex-col min-h-[100dvh] overflow-x-hidden relative">
            <Header />

            <main className="w-full relative z-20 flex-grow">
                <Hero />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Certificates />
                <Experience />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;