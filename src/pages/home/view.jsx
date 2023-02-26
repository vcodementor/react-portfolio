import { React } from 'react';
import About from "../../components/About";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Testimonials from "../../components/Testimonials";
import Contact from "../../components/Contact";

export default function Home() {
  
    return (
     <>
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
     </>
    );
};
