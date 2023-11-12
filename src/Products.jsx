import React from 'react';
import Sdata from './Sdata';
import Cards from './Cards';
import { useState } from 'react';
import Footer from './Footer';
const Products = () => {

  
const [filteredItem,setfilteredItem]=useState(Sdata);

const handlechange=(e)=>{
  const search=e.target.value;
  setfilteredItem(Sdata.filter((val)=>(val.title.indexOf(search)>-1)))
}

  return (
    <>
<div className="my-5">
    <h1 className="text-center">Our Products</h1>
    <div style={{textAlign:"center"}}> <input type="text" style={{textAlign:"center"}} placeholder="Search (Enter Capital letter)" onChange={handlechange}/></div>

</div>


<div className="container-fluid mb-5">
    <div className="row">
        <div className="col-10 mx-auto">
            <div className="row gy-3">
           {
            filteredItem.map((val,ind)=>{
                return <Cards 
                key={ind}  
                    imgsrc={val.imgsrc} 
                    title={val.title}
                    desc={val.desc}
                /> 
            })   
           }

            </div>
        </div>
    </div>
</div>
<Footer/>
    </>
  )
}

export default Products;