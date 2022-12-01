import React from 'react';
import './Steps/confirm.scss';
import './Form/form.scss';
import Issue from '../images/confirm-issue.svg';
import dataIcon from '../images/confirm-personal.svg';
import calendarIcon from '../images/confirm-calendar.svg';
import addressIcon from '../images/confirm-address.svg';

function Confirm({formik}) {
    /* pass info as props and send the form */
  return (
    <section className='confirm-container'>
        <h4>Review and confirm details</h4>
        <div className='confirm-summary'>
          <div className='confirm-steps'>
          <span className='icon'>
            <img  id='icon-img' src={Issue} alt="confirm issue icon" />
          </span>
          <ul className='confirm-keys'>
                <li>Issue</li>
                <li>Sub Type</li>
                <li>Issue</li>
                <li>Age</li>
              </ul>
              <ul className='confirm-values'>
                <li>
                  {formik.values.typeOfIssue}
                </li>
                <li>
                  {formik.values.subType}
                </li>
                <li>
                  {formik.values.issue}
                </li>
                <li>
                  {formik.values.waterHearAge}
                </li>
              </ul>        
              
          </div>
          <div className='confirm-steps'>
            <span className='icon'>
              <img  id='icon-img' src={dataIcon} alt="" />
            </span>

              <ul className='confirm-keys'>
                <li>Name</li>
                <li>Email</li>
                <li>Phone</li>
              </ul>
              <ul className='confirm-values'>
                <li>
                  {formik.values.firstName} {formik.values.lastName}
                </li>
                <li>
                  {formik.values.email}
                </li>
                <li>
                  {formik.values.phoneNumber}
                </li>
              </ul>
          </div>
        
          <div className='confirm-steps'>
          <span className='icon'>
            <img id='icon-img' src={calendarIcon} alt="calendar-icon" />
          </span>
              
              <ul className='confirm-keys'>
                <li>Date</li>
                <li>Time</li>
              </ul>
              <ul className='confirm-values'>
                <li>{formik.values.datePicker}</li>
                <li>{formik.values.time}</li>
              </ul>
          </div>
          <div className='confirm-steps'>
          <span className='icon'>
            <img id='icon-img' src={addressIcon} alt="address-icon" />
          </span>
              
              <ul className='confirm-keys'>
                <li>Address</li>
              </ul>
              <ul className='confirm-values'>
                <li>{formik.values.address}</li>
              </ul>
          </div>
        </div>
    </section>
  )
}

export default Confirm