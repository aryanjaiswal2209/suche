import { useState, useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import DisplayInformation from "./components/Edata/DisplayInformation";
import Form from "./Uploadform/Form";
import {auth} from './Firebase/Firebase'
import Job from "./components/Job/Job"
import { SliderData } from "./components/Slider/SliderData";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  
  const [isSignedin,setIsSignedin] = useState(false);
  
  auth.onAuthStateChanged((user) =>{

    if(user){
      return setIsSignedin(true)
    }
    setIsSignedin(false)
  })


  return (
    <div>
     <Router>
       <Routes>
         <Route path="/" exact element={<Home isSignedin={isSignedin} setIsSignedin={setIsSignedin}/>}/>
         <Route path="/Form" exact element={<Form isSignedin={isSignedin} setIsSignedin={setIsSignedin} />} />
         <Route path="/Applications" exact element={<DisplayInformation/>} />
         <Route path="/Job1" exact element={<Job id={1}/>} />
         <Route path="/Job2" exact element={<Job id={2}/>} />
         <Route path="/Job3" exact element={<Job id={3}/>} />
         <Route path="/Job4" exact element={<Job id={4}/>} />
         <Route path="/Job5" exact element={<Job id={5}/>} />
         <Route path="/Job6" exact element={<Job id={6}/>} />
         <Route path="/Job7" exact element={<Job id={7}/>} />
         <Route path="/Job8" exact element={<Job id={8}/>} />
         <Route path="/Job9" exact element={<Job id={9}/>} />
       </Routes> 
     </Router>
     
    </div>
    
  
   
     
  
    
  );
};

export default App;
