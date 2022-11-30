import React, {useState} from 'react';
import './App.scss';


import Modal from './components/Modal/Modal';
import Form from './components/Form/Form';

function App({ moduleData }) {
  // eslint-disable-next-line no-console
  console.log(
    'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
    moduleData,
  );

  const [openModal, setOpenModal] = useState(false)
  return (
    <div>
    <Modal open={openModal} onClose={()=> setOpenModal(false)}/>
   

      <button className='modalBtn' onClick={()=> setOpenModal(true)} >Book online</button>
      
    <div className="cms-react-boilerplate__container">
      {/* <div className="spinning-logo__container"> */}
        {/* <SpinningLogo src={reactLogo} alt="react logo" />
        <SpinningLogo
          src={sprocketLogo}
          alt="sprocket logo"
          isSprocket={true}
          
        /> */}
       {/*   </div> */}
        
     
      
      {/* <Card initialClickCount={moduleData.initial_count} /> */}
    </div>
    
    </div>
    
  );
}

export default App;
