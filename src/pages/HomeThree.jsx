import React, { Component } from "react";

//Import Component
import NavBar from "../components/NavBar";
import BannerThree from "../components/banner/BannerThree";
import Feature from "../components/Feature";
import Services from "../components/Services";
import WelcomeServices from "../components/WelcomeServices";
import Works from "../components/Works";
import About from "../components/About";
import Founder from "../components/Founder";
import Team from "../components/Team";
import Blog from "../components/Blog";
import VideoArea from "../components/VideoArea";
import Pricing from "../components/Pricing";
import FunFacts from "../components/FunFacts";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Partner from "../components/Partner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

class HomeThree extends Component {
  render() {
    return (
      <React.Fragment>
        {/* NavBar: src/components/NavBar.jsx */}
        <NavBar pageName="home" />
        {/* BannerThree: src/components/banner/BannerThree.jsx */}
        <BannerThree />
         {/* About: src/components/About.jsx */}
         <About />
        {/* Founder: src/components/Founder.jsx */}
        <Founder />
         {/* Team: src/components/Team.jsx */}
         <Team />
        {/* Feature: src/components/Feature.jsx */}
        <Feature />
         
        {/* Testimonials: src/components/Testimonials.jsx */}
        <Testimonials />
        {/* Services: src/components/Services.jsx */}
        <Services />
      
        {/* Contact: src/components/Contact.jsx */}
        <Contact />
        {/* Footer: src/components/Footer.jsx */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default HomeThree;
