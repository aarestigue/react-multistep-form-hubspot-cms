import React, {useState} from 'react';
import Confirm from '../Confirm';
import Details from '../Details';
import Issue from '../Issue';
import Customer from '../Customer';
import Schedule from '../Schedule';
import ProgressBar from './utils/ProgressBar';
import formikSchema from './utils/Formik';

import './form.scss'
import ThankYou from '../ThankYou';

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
    } else if(page === 5){
        return <ThankYou formik={formik}/>
    }

}

const goToPage = (indexPage) => {
    console.log(`Page Index is ${indexPage.index}`)
    setPage(indexPage.index);
}


  return (
    <div className='form-card' id='form-card'>
        <div className='progress-bar'>
            <div className='form-container'>
                <div className='form-header'>
                    
                    <ProgressBar 
                    formTitles={formTitles} 
                    page={page}
                    goToPage={goToPage}
                    />
                    
                </div>
                <div className='form-body'>
                    <form 
                        className='form-main'
                        onSubmit={formik.handleSubmit}>

                        {formDisplay()}

                        <div className='form-btn-container'>
                            <button 
                            className='form-btn-submit'
                            id='submit-btn'
                            style={{display : page === 4 ? "initial" : "none"}} 
                            type='submit'
                            onClick={()=> {
                                setPage((currPage) => currPage + 1);}}
                            >
                                Confirm Booking!
                            </button>
                        </div>
                    </form>
                    
                    
                </div>
                <div className='form-footer'>
                    <button 
                        style={{display : page === 4 ? "none" : page === 5 ? "none" : "initial"}} 
                        disabled={page === 0}
                        onClick={()=> {
                        setPage((currPage) => currPage - 1);}}>
                            Back
                    </button>
                    <button 
                        style={{display : page === 4 ? "none" : page === 5 ? "none" :"initial"}} 
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