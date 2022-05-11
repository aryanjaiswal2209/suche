import React from 'react'
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStore} from "../../State/States";
import {auth} from '../../Firebase/Firebase'

const Signin = () => {

    const setAdminsignedin = useStore((state) => state.setAdminsignedin);
    const provider = new GoogleAuthProvider()
    const signInWithGoogle = () => {

        signInWithPopup(auth,provider).then((result) =>{      
  
  
            console.log(result.user.email);
            
            if(result.user.email === "vedant.kangde@gmail.com" ){
  
                setAdminsignedin(true)
               
            }
  
        }).catch((error) => {
          
           console.log(error);
  
        })
  }
  return (
    <div>
        <button className='btn btn-custom btn-lg page-scroll' onClick={signInWithGoogle}>Signin</button>
    </div>
  )
}

export default Signin