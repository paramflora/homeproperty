import React, { useState } from 'react'
import Heading from './Heading';

const ContactUs = () => {

  const [formData, setFormData] = useState({
    firstname : '',
    lastname : '',
    emailid: '',
    mobileno : '',
    querymsg: ''
  })

  const handleChange = (e) =>{
    const {name , value} = e.target;
    setFormData( prevState => ({
      ...prevState , 
      [name] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.emailid ||
      !formData.mobileno ||
      !formData.querymsg
    ) {
      alert('Please fill in all fields.');
      return;
    }
    
    console.log(formData);
    setFormData({
      firstname: '',
      lastname: '',
      emailid: '',
      mobileno: '',
      querymsg: ''
    });
  };


  return (
    <>
      <section className="contactUs sec_padding">
        <div className='container'>
        <Heading title='Contact Us' subtitle='We would love to answer your query.' />
          <form onSubmit={handleSubmit}>
            <div className='row'> 
              <div className='col-md-6'>
                <div className='form-group'>
                  <label>Enter your First Name</label>
                  <input type='text' name='firstname' id='firstname' value={formData.firstname} onChange={handleChange} className='form-control'/>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label>Enter your Last Name</label>
                  <input type='text' name='lastname' id='lastname' value={formData.lastname} onChange={handleChange} className='form-control'/>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label>Enter your Email ID</label>
                  <input type='email' name='emailid' id='emailid' value={formData.emailid} onChange={handleChange} className='form-control'/>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label>Enter your Mobile Number</label>
                  <input type='tel' name='mobileno' id='mobileno' value={formData.mobileno} onChange={handleChange} className='form-control'/>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <label>Your Query for us</label>
                  <textarea className='form-control' name='querymsg' id='querymsg' value={formData.querymsg} onChange={handleChange} ></textarea>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <button className='btn btn-secondary' id="submitform">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    
    
    </>
  )
}

export default ContactUs