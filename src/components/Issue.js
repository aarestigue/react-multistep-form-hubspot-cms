import React, {useEffect, useState} from 'react';
import Multiselect from 'multiselect-react-dropdown';
import Select from 'react-select';
import './Form/form.scss';
import './Steps/issue.scss';

function Issue({formik}) {
  const issueTypeOpt = ["Water Heater", "Water Treatment", "Plumbing"];
  const subTypeOpt = ["Tankless Water Heater", "Standard Water Heater"];
  const issueOpt = ["Water is not hot enough", "Water takes a long time to heat up"];
  const hearAge = ["Less than a year old", "0-5 years old", "6-10 years old"];

  const checkIssueType = () => {
    if(formik.values.typeOfIssue === "Water Heater"){
      console.log("You chose Water heater")
      return (
        <>
          <label className='form-labels-issue' htmlFor="">Subtype</label>
          <select id='select2' onChange={formik.handleChange('subType')} value={formik.values.subType}>
              <option value="">Select an option</option>
              {subTypeOpt.map((issue)=> {
              return <option className='select-options' id='subType' name="subType" value={issue}>{issue}</option>
              })} 
          </select>
          </>
      )
    }
  }
  
  useEffect(() => {
    // declare the data fetching function
    // call the function
    checkIssueType()
      // make sure to catch any error
     }, [formik.values.typeOfIssue])

     const checkSubType = () => {
        
        if (formik.values.subType === "Tankless Water Heater"){
            console.log("You chose Tankless Water Heater")
            return(
                <>
                <label className='form-labels-issue' htmlFor="">What's the issue?</label>
                <select id='select3' onChange={formik.handleChange('issue')} value={formik.values.issue}>
                    <option value="">Select an option</option>
                    {issueOpt.map((issue)=> {
                    return <option className='select-options' id='issue' name="issue" value={issue}>{issue}</option>
                    })} 
                </select>
                </>
            )
        }
      }

    useEffect(() => {
        // declare the data fetching function
        // call the function
        checkSubType()
          // make sure to catch any error
         }, [formik.values.subType])

         const checkIssue = () => {
        
            if (formik.values.issue === "Water is not hot enough"){
                console.log("You chose Water is not hot enough")
                return(
                    <>
                    <label className='form-labels-issue' htmlFor="">How old is your tankless water hear?</label>
                    <select id='select4' onChange={formik.handleChange('waterHearAge')} value={formik.values.waterHearAge}>
                        <option value="">Select an option</option>
                        {hearAge.map((issue)=> {
                        return <option className='select-options' id='waterHearAge' name="waterHearAge" value={issue}>{issue}</option>
                        })} 
                    </select>
                    </>
                )
            }
          }
    
        useEffect(() => {
            // declare the data fetching function
            // call the function
            checkIssue()
              // make sure to catch any error
             }, [formik.values.issue])
     
 
  return (
    <div className='form-issue'> 
        
        
        <div className='select-container'>
            <label className='form-labels-issue' htmlFor="">Type of issue</label>
            <select id='select' onChange={formik.handleChange('typeOfIssue')} value={formik.values.typeOfIssue}>
                <option value="">Select an option</option>
                {issueTypeOpt.map((issue)=> {
                return <option className='select-options' id='typeOfIssue' name="typeOfIssue" value={issue}>{issue}</option>
                })} 
            </select>
            
            
            {checkIssueType()}
            {checkSubType()}
            {checkIssue()}


            
        </div>

    </div>
  )
}

export default Issue