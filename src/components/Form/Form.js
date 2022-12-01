import React, {useState} from 'react';
import Confirm from '../Confirm';
import Details from '../Details';
import Issue from '../Issue';
import Customer from '../Customer';
import Schedule from '../Schedule';
import ProgressBar from './utils/ProgressBar';
import formikSchema from './utils/Formik';

import './form.scss'

function Form() {
const [page, setPage] = useState(0);
const formik = formikSchema();
console.log(formik.values)
/* Step views */
const formTitles = ["Issue", "Details", "Customer", "Schedule", "Confirm"];
const formDisplay = () => {
    if(page === 0){
        return <Issue formik={formik}/>
    } else if(page === 1){
        return <Details formik={formik}/>
    } else if(page === 2){
        return <Customer formik={formik}/>
    } else if(page===3){
        return <Schedule formik={formik}/>
    } else if(page === 4){
        return <Confirm formik={formik}/>
    }
}



  return (
    <div className='form-card' id='form-card'>
        <div className='progress-bar'>
            <div className='form-container'>
                <div className='form-header'>
                    
                    <ProgressBar 
                    formTitles={formTitles} 
                    page={page}
                    />
                    
                </div>
                <div className='form-body'>
                    <form onSubmit={formik.handleSubmit}>
                    {formDisplay()}
                    <button 
                        style={{display : page === 4 ? "initial" : "none"}} 
                        type='submit'
                    >
                        submit
                    </button>
                    
                    </form>
                    
                    
                </div>
                <div className='form-footer'>
                    <button 
                        disabled={page === 0}
                        onClick={()=> {
                        setPage((currPage) => currPage - 1);}}>
                            Back
                    </button>
                    <button 
                        disabled={page === formTitles.length - 1}
                        onClick={()=> {
                        setPage((currPage) => currPage + 1);}}>
                            Continue 
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form