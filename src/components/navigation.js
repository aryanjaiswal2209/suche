
import { useStore} from "../State/States";
import Signin from './Signin/Signin';
import Signout from './Signout/Signout';


export const Navigation = () => {

  const isSignedin = useStore((state) => state.isSignedin);
  

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
                
               {!isSignedin? (

<>
  <Signin/>
</>

):( 
  
  <>
   <Signout/>
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
