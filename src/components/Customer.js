import React, {useState, useEffect} from 'react';
import './Steps/customer.scss';
import './Form/form.scss';


function Customer({formik}) {
  const [isCustomer, setIsCustomer] = useState("");

  const checkCustomer = () => {
    if(isCustomer === "yes") {
      console.log("yes")
      return (
          <div className='form-inputs-container'>
              <h6 className='form-labels'>Let's lookup your details</h6>
              <label className='form-labels-customer' htmlFor="email">Enter your email</label>
              <input 
              className='form-input'
              type="email" 
              name='email'
              id='email'
              placeholder='Email'
              value={formik.values.email}
              onChange={formik.handleChange('email')}
              />
              {/* <button>Lookup my details</button> */}
          </div>
      )
    }
    else if (isCustomer === "no"){
      console.log("no")
      return (
          <div className='form-inputs-container'>

              <div className='form-name-info'>
                <div>
                  <label className='form-labels-customer' htmlFor="">First Name</label>
                  <input 
                  className='form-input'
                  type="text"
                  name='firstName'
                  id='firstName'
                  placeholder='First Name'
                  value={formik.values.firstName}
                  onChange={formik.handleChange('firstName')}
                  />
                </div>
                <div>
                  <label className='form-labels-customer' htmlFor="">Last Name</label>
                  <input 
                  className='form-input'
                  type="text"
                  name='lastName'
                  id='lastName'
                  placeholder='Last Name'
                  value={formik.values.lastName}
                  onChange={formik.handleChange('lastName')} 
                  />
                </div>
              </div>
              <label className='form-labels-customer' htmlFor="email">Email</label>
              <input 
              className='form-input'
              type="email" 
              name='email'
              id='email'
              placeholder='Email'
              value={formik.values.email}
              onChange={formik.handleChange('email')}
              />

              <label className='form-labels-customer' htmlFor="">Phone Number</label>
              <input 
              className='form-input'
              type="number" 
              name='phoneNumber'
              id='phoneNumber'
              placeholder='Phone number'
              value={formik.values.phoneNumber}
              onChange={formik.handleChange('phoneNumber')}
              />
  
          </div>
      )
    }
  }

  useEffect(() => {
    // declare the data fetching function
    // call the function
    checkCustomer()
      // make sure to catch any error
     }, [isCustomer])
  
  return (
    
    <div className='customer-container'>
        <h6 className='form-labels'>Have we served you in the past?</h6>
        <div id='btn-customer'>
            <button className='form-customer-btn' onClick={()=>setIsCustomer("yes")}>Yes</button>
            <button className='form-customer-btn' onClick={()=>setIsCustomer("no")}>No</button>
        </div>
        {checkCustomer()}
    </div>
  )
}

export default Customer