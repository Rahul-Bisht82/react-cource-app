import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Cources =({props})=>{
    return(<>
<div className="container">

  <div className="card">
    <div className="card-body text-center">
    <div className="card-title font-weight-bold">{props.userid} {props.title}</div>
   <div className="card-text">{props.description} </div>
   <div  className="btn my-3">
   <button type="button" className="btn btn-outline-danger">Delete</button>
   <button type="button" className="btn btn-outline-warning ml-3">Update</button>
   </div>
   
  </div>
</div>
</div>

    </>);
};

export default Cources;