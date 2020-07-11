import React from 'react';
 
import {NavLink} from 'react-router-dom';

const Menus =()=>{
    return(<>
     <div className="list-group ">
  <NavLink exact to="/" className="list-group-item list-group-item-action">Home</NavLink>
  <NavLink exact to="/addcources"  className="list-group-item list-group-item-action">Add Course</NavLink>
  <NavLink exact to="/allcource"  className="list-group-item list-group-item-action">View Courses</NavLink>
  <NavLink exact to="/about" className="list-group-item list-group-item-action">About</NavLink>
  <NavLink exact to="/contact" className="list-group-item list-group-item-action">Contact Us</NavLink>

</div>
    </>);
}

export default Menus;