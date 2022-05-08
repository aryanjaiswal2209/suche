import { useState, useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import DisplayInformation from "./components/Edata/DisplayInformation";
import Form from "./Uploadform/Form";
import {auth} from './Firebase/Firebase'

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
       </Routes> 
     </Router>
     
    </div>
    
  
   
     
  
    
  );
};

export default App;
