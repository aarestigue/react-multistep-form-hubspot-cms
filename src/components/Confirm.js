import React from 'react'

function Confirm() {
    /* pass info as props and send the form */
  return (
    <section>
        <h4>Review and confirm details</h4>
        <div className='form-summary issue'>
            <label htmlFor="">Issue</label>
            <input type="text" />
            <label htmlFor="">Subtype</label>
            <input type="text" />
            <label htmlFor="">What's the issue</label>
            <input type="text" />
            <label htmlFor="">Age</label>
            <input type="text" />
        </div>
    </section>
  )
}

export default Confirm