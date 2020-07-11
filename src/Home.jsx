import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from 'react';
const Home=()=>{
  useEffect(()=>{
    document.title="Home || Learncodewith-Rahul Bisht"
    },[]);
    return(<>

        
        <div className="container-fluid">
  <div className="jumbotron text-center">
    <h1>Learn code with -- RAHUL BISHT</h1>      
    <p>This is developed by <strong>RAHUL BISHT </strong>for learning purpose.<br /> It is frontend on React JS</p>

    <button type="button" className="btn btn-outline-primary">Start Using</button>
  </div>
   
</div>
    </>);
};
export default Home;