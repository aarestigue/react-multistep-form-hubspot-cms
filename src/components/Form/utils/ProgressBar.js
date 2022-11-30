import React from 'react';

import complete from '../../../images/complete-step.svg'

/* Progressbar */

export default function ProgressBar ({ formTitles, page }){
   
    return (
    <>
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
         <div className='form-progressbar-container'>
            <div  className='progressbar-color' style={{width: page === 0 ? "20%" : page === 1 ? "40%" : page === 2 ? "60%"  : page === 3 ? "80%": "100%"}}></div>
            <ul className='progressbar-separators'>
                <li className='separator'></li>
                <li className='separator'></li>
                <li className='separator'></li>
                <li className='separator'></li>
            </ul>
        </div>
    </>
    )
    

}