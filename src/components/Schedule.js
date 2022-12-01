import React, {useEffect, useState} from 'react';
import Multiselect from 'multiselect-react-dropdown';
import './Steps/schedule.scss'
import './Form/form.scss'


function Schedule({formik}) {
  const dateOptions = ["Today", "Tomorrow", `Pick a date ${formik.values.date}`];
  const timeOptions = ["Morning", "Afternoon", "First Available", "Flexible"];
  const propertyType = ["House", "Townhouse", "Duplew", "Condo"];
  const isOwnerOpt = ["Owner", "Renter"];
    
  const checkDate = () => {
    if(formik.values.datePicker.includes("Pick a date")){
        console.log("You chose Pick a date")
        return (
          <div className='scheduler-date-calendar'> 
          <input 
            type="date" 
            id="date" 
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange('date')}
            min="2022-01-01" max="2024-12-31"
            />

            </div>
        )
      }
  }

useEffect(() => {
    // declare the data fetching function
    // call the function
    checkDate()
      // make sure to catch any error
     }, [formik.values.datePicker])

const checkPropertyType = () => {
    if(formik.values.address) {
        return(
            <>
                <label className='form-labels-issue' htmlFor="">Property Type:</label>
                <select id='select' onChange={formik.handleChange('propertyType')} value={formik.values.propertyType}>
                    <option value="">Select an option</option>
                    {propertyType.map((propertyType)=> {
                    return <option className='select-options' id='propertyType' name="propertyType" value={propertyType}>{propertyType}</option>
                    })} 
                </select>
            </>
            
        )
    }
    
}

useEffect(() => {
    // declare the data fetching function
    // call the function
    checkPropertyType()
      // make sure to catch any error
     }, [formik.values.address])

const checkIsOwner = () => {
        if(formik.values.propertyType) {
            return(
                <>
                    <label className='form-labels-issue' htmlFor="">Do you own or rent the property?</label>
                    <select id='select' onChange={formik.handleChange('isOwner')} value={formik.values.isOwner}>
                        <option value="">Select an option</option>
                        {isOwnerOpt.map((isOwner)=> {
                        return <option className='select-options' id='isOwner' name="isOwner" value={isOwner}>{isOwner}</option>
                        })} 
                    </select>
                </>
                
            )
        }
        
    }

useEffect(() => {
        // declare the data fetching function
        // call the function
    checkIsOwner()
          // make sure to catch any error
}, [formik.values.propertyType])

  return (
    <div className='schedule-container'>

        <h4>Let's Schedule your appointment</h4>

        <div className='select-container'>
            <label className='form-labels-issue' htmlFor="">Select a date</label>
            <select 
                id='select' 
                onChange={formik.handleChange('datePicker')} 
                value={formik.values.datePicker}
            >
                <option value="">Select an option</option>
                {dateOptions.map((datePicker)=> {
                return <option className='select-options' id='datePicker' name="datePicker" value={datePicker}>{datePicker}</option>
                })} 
            </select>
            {checkDate()}

            <label className='form-labels-issue' htmlFor="">Select a time</label>
            <select id='select' onChange={formik.handleChange('time')} value={formik.values.time}>
                <option value="">Select an option</option>
                {timeOptions.map((time)=> {
                return <option className='select-options' id='time' name="time" value={time}>{time}</option>
                })} 
            </select>

            <label className='form-labels-issue' htmlFor="address">Property address</label>
            <input 
            type="text"
            id='address' 
            name='address'
            className='text-input'
            placeholder='Type your address'
            value={formik.values.address}
            onChange={formik.handleChange('address')}
            />
            
            {checkPropertyType()}
            {checkIsOwner()}
        </div>
        
    </div>
  )
}

export default Schedule