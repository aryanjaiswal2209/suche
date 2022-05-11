import { useStore } from "../State/States";


export const Header = (props) => {

  const adminsignedin = useStore((state) => state.adminsignedin);
  console.log(adminsignedin)
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
                   <a  href="/Form">
              <button className='btn btn-custom btn-lg page-scroll'>
                Apply now
              </button>
              </a>
                  </>
                ):(

                  <>
              <a  href="/Applications">
              <button className='btn btn-custom btn-lg page-scroll'>
                View
              </button>
              </a>
           
          

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
