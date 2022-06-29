import React from 'react'
import  data  from '../../data/data.json'
import './styles.css'

const Job = ({id}) => {
  const job = data.Testimonials.find((job)=> job.id == id);

  return (
    <div className='job'>
      <h1>{job.heading}</h1>
      <h2>Knowledge</h2>
      <p>{job.knowledge}</p>
      {/* <p>{job.jobRole}</p> */}
      <h2>Experience</h2>
      <p>{job.experience}</p>
      
      <h2>Key Responsibilities</h2>
      <ul>
        <li>{job.keyResponsibilities1}</li>
        <li>{job.keyResponsibilities2}</li>
        <li>{job.keyResponsibilities3}</li>
        <li>{job.keyResponsibilities4}</li>
        <li>{job.keyResponsibilities5}</li>
        <li>{job.keyResponsibilities6}</li>
      </ul>
    
    </div>
    
  )
}

export default Job