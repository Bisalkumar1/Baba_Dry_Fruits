import React from 'react';
import { NavLink } from 'react-router-dom';
const Cards = (props) => {
  return (
    <>
        <div className="col-md-4 col-10 mx-auto">
            <div className="card">
           <figure className='figure'>
  <img src={props.imgsrc} className="card-img-top" alt={props.title}/>
  </figure>
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
    <NavLink to="/contact" className="btn btn-outline-info">Know Details</NavLink>
  </div>
  </div>
</div>
    </>
  )
}

export default Cards;