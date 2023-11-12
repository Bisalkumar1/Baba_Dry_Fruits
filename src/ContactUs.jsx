import React, { useState } from 'react';
import Footer from './Footer';
const ContactUs = () => {
const [data,setdata]=useState({
  FullName:"",
  MobileNumber:'',
    Email:'',
    Query:'',
});

const InputEvent=(e)=>{
  const {name,value}=e.target;
  setdata((preval)=>{
    return {
      ...preval,
      [name]:value,
    };
  });
};

  return (
   <>
    <div className="my-5">
    <h2 className="text-center font">Contact Us</h2>
</div>
<div className="map my-5">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467838.6768903264!2d86.70569119459681!3d23.640541222456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e7ddb57e141d%3A0x9f1d53ee388ba76e!2sBABA%20DRY%20FRUIT!5e0!3m2!1sen!2sin!4v1699786847269!5m2!1sen!2sin" 
style={{width:"60%", 
height:"350",
 style:"border:0", 
 allowfullscreen:"",
  loading:"lazy",
   referrerpolicy:"no-referrer-when-downgrade"}}>

</iframe>
</div>
<div className="container contact_div">
    <div className="row">
        <div className="col-md-6 col-10 mx-auto">
            <form  action="" method="POST">
            <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Enter Your Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name="FullName" value={data.FullName} onChange={InputEvent} placeholder="Your Full Name" required/>
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Mobile Number</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" name="MobileNumber" value={data.MobileNumber} onChange={InputEvent} placeholder="1234567890" required/>
</div>
 <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email Address</label> 
  <input type="email" className="form-control" id="exampleFormControlInput1" name="Email" value={data.Email} onChange={InputEvent} placeholder="name@example.com"/>
</div>
<div className="mb-2">
  <label for="exampleFormControlTextarea1" className="form-label">Your Queries</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="Query" value={data.Query} onChange={InputEvent} placeholder="Describe your Queries"></textarea>
</div>
 <div className="col-12">
    <button className="btn btn-outline-primary" type="submit" value="send">Submit this we will contact u soon</button>
  </div>
            </form>
        </div>
    </div>
</div>

<Footer/>
   </>
  )
}

export default ContactUs;