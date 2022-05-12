import {signInWithGoogle} from '../Firebase/Firebase'
import {signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import{getAuth} from 'firebase/auth'
import { useState } from 'react';
import {auth} from '../Firebase/Firebase'
const provider = new GoogleAuthProvider()
export const Navigation = ({isSignedin,setAdminsignedin}) => {


  const [userdata,setUserdata] = useState("");

    const signInWithGoogle = () => {

      signInWithPopup(auth,provider).then((result) =>{      


          console.log(result.user.email);
          console.log(userdata);
          if(result.user.email == "aryanj2209@gmail.com"  ){

              setAdminsignedin(true)
             
          }

      }).catch((error) => {
        
         console.log(error);

      })
}

const signout = () => {

 auth.signOut().then(() => {
  setAdminsignedin(false)
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
          {/* <img src={img}></img> */}
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
            {/* <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li> */}
            <li>
            <div className='col-md-8 col-md-offset-2 intro-text'>
                
               {!isSignedin? (

<>
   <button className='btn btn-custom btn-lg page-scroll' onClick={signInWithGoogle}>Signin</button>
</>

):( 
  
  <>
   <button className='btn btn-custom btn-lg page-scroll' onClick={signout}>Signout</button>
  </>

)

}
               
                </div>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
