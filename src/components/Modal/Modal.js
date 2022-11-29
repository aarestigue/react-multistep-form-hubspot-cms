import React from 'react';
import './modal.scss'
import monkey from '../../images/monkey-wrench-logo.svg'
import Form from '../Form/Form';
import {useState} from 'react';


function Modal({open,onClose}) {

  if(!open) return null;

  return (
    <section className='overlay'>
      
      <div className="modalContainer">
          <div className="modal-header" id='modal-header'>
          <h1 className='modal-title'> Book now</h1>
          <p onClick={onClose} className='closeBtn'>X</p>
          </div>
          <div className="modal-body">
            <Form/>
          </div>      

          
        
        
      </div>
    </section>
  )
}

export default Modal