import { useStore } from "../State/States";
import {Link} from 'react-router-dom'

export const Header = (props) => {

  const adminsignedin = useStore((state) => state.adminsignedin);
  
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>

                <h1>
                  {props.data ? props.data.title : 'Loading'}
                
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
              
              {!adminsignedin ? (
                  <>
                   <Link  to="/Form">
              <button className='btn btn-custom btn-lg page-scroll'>
                Apply now
              </button>
              </Link>
                  </>
                ):(

                  <>
              <Link  to="/Applications">
              <button className='btn btn-custom btn-lg page-scroll'>
                View
              </button>
              </Link>
           
          

              </>

                )
              } 
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
