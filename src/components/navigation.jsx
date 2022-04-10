import {signInWithGoogle} from '../Firebase/Firebase'
import {signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import{getAuth} from 'firebase/auth'
import { useState } from 'react';
export const auth = getAuth();
const provider = new GoogleAuthProvider()
export const Navigation = (props) => {

  const [isSignedin,setisSignedin] = useState(false);
  const [userdata,setUserdata] = useState("");

    const signInWithGoogle = () => {

      signInWithPopup(auth,provider).then((result) =>{
      
          
          setUserdata(result.user.email);
          setisSignedin(true);
          console.log(result.user.email);
          console.log(userdata);
          if(userdata == "vedant.kangde@gmail.com" ){

              // setAdminsignedin(true)
              // console.log("setadminsignedin")
              setUserdata("")
          }

      }).catch((error) => {
        
         console.log(error);

      })
}

const signout = () => {

 auth.signOut().then(() => {
  setisSignedin(false);
  // setAdminsignedin(false)
     console.log('logged out');
 })
 .catch((error) => {
     console.log(error);
 });
}
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            SUCHE
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            {/* <li>
              <a href='#features' className='page-scroll'>
                Features
              </a>
            </li> */}
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
            <div className='col-md-8 col-md-offset-2 intro-text'>
                <button
                  className='btn btn-custom btn-lg page-scroll'
                >
               {!isSignedin ? (

<>
   <button onClick={signInWithGoogle}>Signin</button>
</>

):( 
  
  <>
   <button onClick={signout}>Signout</button>
  </>

)

}
                </button>
                </div>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
