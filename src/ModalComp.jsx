import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { NavLink } from 'react-router-dom';


const Modelcomp = () => {
  const [modelon, setmodel] = useState(false);


  const handleclick=()=>{
    setmodel(true);
}


useEffect(()=>{
handleclick();
},[]);

  return (
    <>
      <Modal size='lg' isOpen={modelon} toggle={() => setmodel(!modelon)} style={{border: '8px solid rgb(183, 222, 238)'}}>
      <div className="btnclose" onClick={() => setmodel(!modelon)}>
            <span aria-hidden="true" className='closeicon'>&times;</span>
            </div>
        <ModalHeader className='modelhead'>
        <div className="pophead">
            <span className='coly'> Welcome To BABA DRY FRUITS </span>
            </div>
        </ModalHeader>
        <ModalBody>
<div className="col-12">
    <div className="row">
        <div className="col-10">
            <p className='welcome'>Welcome सु स्वागतम्</p>
            <p className='modalp'>From Our store you can purchase <span className="bold">any types of Dry fruits</span> and not only dry fruits, also you can  buy <span className="bold"> any varities of fruits and products for all types of puja</span></p>
        </div>
    </div>
 <NavLink to="/contact"  className="btn btn-outline-info">Contact Me !</NavLink>
</div>
          
        </ModalBody>
      
      </Modal>

    </>
  );
}

export default Modelcomp;

