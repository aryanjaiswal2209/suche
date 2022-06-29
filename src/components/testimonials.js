import { Link } from "react-router-dom"

export const Testimonials = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2 color="#da9100">JOB OPENINGS</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='testimonial'>
                    
                    <div className='testimonial-content'>
                      <h1><Link  to={d.link}>{d.heading}</Link></h1>
                       <p>{d.designation}</p>
                      {/*<li>{d.payscale}</li>
                      <li>{d.experience}</li>
                      <li>{d.location}</li> */}
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
