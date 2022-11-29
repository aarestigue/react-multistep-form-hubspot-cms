import React from 'react';
import Multiselect from 'multiselect-react-dropdown';
import './Form/form.scss'

function Issue() {
  const waterTypeOpt = ["Water Heater", "Water Treatment", "Plumbing"];
  const subTypeOpt = ["Tankless Water Heater", "Standard Water Heater"];
  const issueOpt = ["Water is not hot enough", "Water takes a long time to heat up"];
  const hearAge = ["Less than a year old", "0-5 years old", "6-10 years old"];

  const displayFields = () => {
    return <p>you selected an option</p>
  }
  return (
    <div className='form-issue'>
        <h4>Issue</h4>
        <label className='form-labels' htmlFor="">Type of issue</label>
        <Multiselect
            options={waterTypeOpt} // Options to display in the dropdown
            disablePreSelectedValues={true}
            onSelect={displayFields()}
            singleSelect={true}
            placeholder="Type of issue:"
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

         <label className='form-labels' htmlFor="">Subtype</label>
         <Multiselect
            options={subTypeOpt} // Options to display in the dropdown
            disablePreSelectedValues={true}
            onSelect={displayFields()}
            singleSelect={true}
            placeholder="Subtype"
            isObject={false}
            style={{
                chips: {
                background: 'grey',
                color: 'white'
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

        <label className='form-labels' htmlFor="">What's the issue?</label>
         <Multiselect
            options={subTypeOpt} // Options to display in the dropdown
            disablePreSelectedValues={true}
            onSelect={displayFields()}
            singleSelect={true}
            placeholder="What's the issue?"
            isObject={false}
            style={{
                chips: {
                background: 'grey',
                color: 'white'
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

<label className='form-labels' htmlFor="">How old is your tankless water hear?</label>
         <Multiselect
            options={subTypeOpt} // Options to display in the dropdown
            disablePreSelectedValues={true}
            onSelect={displayFields()}
            singleSelect={true}
            placeholder="How old is your tankless water hear?"
            isObject={false}
            style={{
                chips: {
                background: 'grey',
                color: 'white'
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
    </div>
  )
}

export default Issue