import React from 'react'
import {Link} from 'react-router-dom'
const Dnavbar = () => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <Link className='navbar-brand ' to='/'>
            BACK
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Dnavbar