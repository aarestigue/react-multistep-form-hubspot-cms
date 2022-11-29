import React, {useRef, useState} from 'react';
import Multiselect from 'multiselect-react-dropdown';
import './Steps/schedule.scss'
import './Form/form.scss'


function Schedule() {
  const dateOptions = ["Today", "Tomorrow", "Pick a date"];
  const timeOptions = ["Morning", "Afternoon", "First Available", "Flexible"];
  const propertyType = ["House", "Townhouse", "Duplew", "Condo"];
  /* const displayFields = () => {
    useRef()
  } */
  return (
    <div>
        <h4>Let's Schedule it</h4>
        <label className='form-labels' htmlFor="">Select a date</label>
        <Multiselect
            options={dateOptions} // Options to display in the dropdown
            disablePreSelectedValues={true}
            /* onSelect={displayFields()} */
            singleSelect={true}
            placeholder="Select a date:"
            isObject={false}
            style={{
                chips: {
                background: 'grey',
                color: 'white'
                },
                inputField: { // To change input field position or margin
                    margin: '2px 1px',
                },
                multiselectContainer: {
                background: 'white',
                color: 'black'
                },
                searchBox: {
                border: 'none',
                'border-bottom': '1px solid black',
                'border-radius': '0px'
                }
            }}
        />
        <label className='form-labels' htmlFor="">Select a time:</label>
        <Multiselect
            options={timeOptions} // Options to display in the dropdown
            disablePreSelectedValues={true}
            /* onSelect={displayFields()} */
            singleSelect={true}
            placeholder="Select a time:"
            isObject={false}
            style={{
                chips: {
                background: 'grey',
                color: 'white'
                },
                inputField: { // To change input field position or margin
                    margin: '2px 1px',
                },
                multiselectContainer: {
                background: 'white',
                color: 'black'
                },
                searchBox: {
                border: 'none',
                'border-bottom': '1px solid black',
                'border-radius': '0px'
                }
            }}
        />
        <label className='form-labels' htmlFor="">Property type:</label>
        <Multiselect
            options={propertyType} // Options to display in the dropdown
            disablePreSelectedValues={true}
            /* onSelect={displayFields()} */
            singleSelect={true}
            placeholder="Select a time:"
            isObject={false}
            style={{
                chips: {
                background: 'grey',
                color: 'white'
                },
                inputField: { // To change input field position or margin
                    margin: '2px 1px',
                },
                multiselectContainer: {
                background: 'white',
                color: 'black'
                },
                searchBox: {
                border: 'none',
                'border-bottom': '1px solid black',
                'border-radius': '0px'
                }
            }}
        />
        <label className='form-labels' htmlFor="address">Property address</label>
        <input type="text"id='address' name='address' />
    </div>
  )
}

export default Schedule