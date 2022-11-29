import React, {useState} from 'react';
import Confirm from '../Confirm';
import Details from '../Details';
import Issue from '../Issue';
import Customer from '../Customer';
import Schedule from '../Schedule';
import complete from '../../images/complete-step.svg'
import './form.scss'

function Form() {
const [page, setPage] = useState(0);
const formTitles = ["Issue", "Details", "Customer", "Schedule", "Confirm"];
const formDisplay = () => {
    if(page === 0){
        return <Issue/>
    } else if(page === 1){
        return <Details/>
    } else if(page === 2){
        return <Customer/>
    } else if(page===3){
        return <Schedule/>
    } else if(page === 4){
        return <Confirm/>
    }
}

/* Progressbar */

const checkProgress = () => {
    /* if(page === 0){
        return (
            <div className='form-progressbar'>

                <div className={`form-step current`} id="0" >
                        <span id={`current-circle`}></span>
                        <p className='form-step current-title'>{formTitles[0]}</p>
                </div>
                {formTitles.map((title, index)=> {
                if(index > 0){
                    return (
                        <div className={`form-step ${index}`} id={index} >
                            <span id={`circle`}></span>
                            <p className='form-step title'>{title}</p>
                        </div>
                            )
                }
                
                })}
            </div>

        )
    } else { */
        return (
            <div className='form-progressbar'>

                {formTitles.map((title, index)=> {
                if(index < page){
                    return(
                        <div className={`form-step completed`} id={index} >
                            <span id={`completed`}>
                                <img src={complete} alt="step-completed-icon" className='completed-icon' />
                            </span>
                            <p className='form-step completed-title'>{title}</p>
                        </div>
                    )
                }
                else if(index === page){
                    return(
                        <div className={`form-step current`} id={index} >
                            <span id={`current-circle`}></span>
                            <p className='form-step current-title'>{title}</p>
                        </div>
                    )
                }
                else if(index > page){
                    return (
                        <div className={`form-step ${index}`} id={index} >
                            <span id={`circle`}></span>
                            <p className='form-step title'>{title}</p>
                        </div>
                            )
                }
                
                })}
            </div>

        )
        
    
}/* } */

  return (
    <div className='form-card' id='form-card'>
        <div className='progress-bar'>
            <div className='form-container'>
                <div className='form-header'>
                    {/* {width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%"} */}
                    {checkProgress()}
                </div>
                <div className='form-body'>
                    
                    {formDisplay()} 
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