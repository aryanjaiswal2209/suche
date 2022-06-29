import React from 'react'
import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation/navigation";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import './App.css';
import ImageSlider from './components/Slider/Slider';
import { SliderData } from './components/Slider/SliderData';


const Home = ({isSignedin,setIsSignedin}) => {
    const [landingPageData, setLandingPageData] = useState({});
    const [adminsignedin,setAdminsignedin] = useState(false);
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navigation setAdminsignedin={setAdminsignedin}  isSignedin={isSignedin} setIsSignedin={setIsSignedin} />
      <ImageSlider slides={SliderData} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default Home