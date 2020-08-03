import React, { useState, useEffect } from "react";
import Cources from "./Cources";
import Addcources from "./Addcources";

const Allcource = () => {
  useEffect(() => {
    document.title = "AllCourses || Learncodewith-Rahul Bisht";
  }, []);
  const [arcources, setarCources] = useState([]);
  const [cources, setCources] = useState([
    {
      title: "Web-Developer-Course",
      description: "It is a Web Developer course for beginers.",
    },
    {
      title: "Front-end-courses",
      description: "It is a Frontend course for beginers.",
    },
    {
      title: "Back-end-courses",
      description: "It is a Backend course for beginers.",
    },
  ]);

  // const Submitbutton=(name)=>{
  //     setarCources((preval)=>{
  //         return[...preval,name];
  //     });

  // };

  return (
    <>
      <div className="text-center view-cources">
        <h1> View Cources</h1>
        <p className="font-weight-bold">List Of all Courses</p>

        {/* {
        arcources.map((val,index)=> <Cources userid={val.userid} title={val.title} description={val.description} key={index} id={index} Submitbtn={Submitbutton} />)
    } */}

        {cources.length > 0
          ? cources.map((val, index) => (
              <Cources props={val} key={index} id={index} />
            ))
          : "No Cources Available"}
      </div>
    </>
  );
};

export default Allcource;
