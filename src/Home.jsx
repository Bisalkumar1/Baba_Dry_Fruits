import React from 'react';
import { NavLink } from 'react-router-dom';
import owner from "../src/Images/ownerkabeta.jpg";
import ModalComp from './ModalComp';
const Home = () => {
  return (
    <>
<section id="header" className="d-flex align-items-center my-2">
<div className="container-fluid">
<div className="row">
    <div className="col-10 mx-auto"> 
       <div className="row">
        <div className="col-md-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column headerbtnbody">
        <h1> Welcome to <strong className="brand-name">Baba Dry Fruits</strong></h1>
        <p className='modalp my-3'>From Our store you can purchase <span className="bold">any types of Dry fruits</span> and not only dry fuits, also you can  buy <span className="bold"> any varities of fruits and products for all types of puja</span></p>
        <div className="mt-3">
            <NavLink to="/products" className="btn btn-outline-success my-3">Go to Product Section</NavLink>
        </div>
        <ModalComp/>
    </div>
    <div className="col-lg-3 order-1 order-lg-2 header-img">
       <img src={owner} alt="ownerimage" className="img-fluid animated headerimgow" style={{height:'80%'}}/>
    </div>
    </div>
    </div>
</div>
</div>

</section>


    </>
  )
}

export default Home;