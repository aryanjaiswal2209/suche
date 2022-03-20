import React, { useState } from 'react';
import './Form.css';
import FormSuccess from './FormSuccess';
import ResumeForm from './ResumeForm';


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/spaceship.jpg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <ResumeForm submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;