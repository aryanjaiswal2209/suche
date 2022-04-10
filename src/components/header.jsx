import {Link} from 'react-router-dom'

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>

                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a  href="/Form">
              <button className='btn btn-custom btn-lg page-scroll'>
                Apply now
              </button>
              </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
