import React from 'react'
import {auth} from '../../Firebase/Firebase'
import { useStore} from "../../State/States";
const Signout = () => {

    const setAdminsignedin = useStore((state) => state.setAdminsignedin);
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
    <div>
         <button className='btn btn-custom btn-lg page-scroll' onClick={signout}>Signout</button>
    </div>
  )
}

export default Signout