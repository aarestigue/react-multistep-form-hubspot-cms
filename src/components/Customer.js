import React, {useState} from 'react';


function Customer() {
  const [isCustomer, setIsCustomer] = useState("");

  if(isCustomer === "yes") {
    console.log("yes")
    return (
        <div>
            <label htmlFor="">Please enter your email</label>
            <input type="email" />
            <button>Lookup my details</button>
        </div>
    )
  }
  else if (isCustomer === "no"){
    console.log("no")
    return (
        <div>
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">First Name</label>
            <input type="text" />
            <label htmlFor="">Last Name</label>
            <input type="text" />
            <label htmlFor="">Phone Number</label>
            <input type="number" />

        </div>
    )
  }
  return (
    
    <div>
        <h6>Customer details</h6>
        <p>Have we served you in the past?</p>
        <div id='btn-customer'>
            <button onClick={()=>setIsCustomer("yes")}>Yes</button>
            <button onClick={()=>setIsCustomer("no")}>No</button>
        </div>
    </div>
  )
}

export default Customer