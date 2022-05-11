
import SmoothScroll from "smooth-scroll";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import DisplayInformation from "./components/Edata/DisplayInformation";
import Form from "./Uploadform/Form";
import {auth} from './Firebase/Firebase'
import { useStore} from "./State/States";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  
  //const [isSignedin,setIsSignedin] = useState(false);
  const setIsSignedin = useStore((state) => state.setIsSignedin);
  const setAdminsignedin = useStore((state) => state.setAdminsignedin);
  
  auth.onAuthStateChanged((user) =>{

    if(user){
      return setIsSignedin(true)
    }
    setIsSignedin(false)
    setAdminsignedin(false)
  })


  return (
    <div>
     <Router>
       <Routes>
         <Route path="/" exact element={<Home />}/>
         <Route path="/Form" exact element={<Form />} />
         <Route path="/Applications" exact element={<DisplayInformation/>} />
       </Routes> 
     </Router>
     
    </div>
    
  
   
     
  
    
  );
};

export default App;
