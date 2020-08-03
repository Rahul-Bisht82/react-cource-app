import React, { useState, useEffect } from "react";
import Cources from "./Cources";
import { useLocation, useHistory } from "react-router-dom";
const Addcources = (props) => {
  useEffect(() => {
    document.title = "AddCourses || To learn code";
  }, []);

  const [name, setName] = useState({
    userid: "",
    title: "",
    description: "",
  });

  const eventInput = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);

    const { name, value } = event.target;
    setName((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const SubmitButton = () => {
    // event.preventDefault();
    props.Submitbtn(name);
    // console.log(newName);
    // alert(`Your Cource Id is ${name.userid}. Your cource name is ${name.title}.Description is ${name.description} `);
  };
  return (
    <>
      <div className="container addcources">
        <h1 className=" text-center"> Fill Course Details </h1>
        {/*    
    {
        newName.map((val,index)=> <Cources props={val} key={index} />)
    } */}
        <div className="row">
          <div className="col-md-8 col-10 mx-auto">
            <form>
              <div className="form-group ">
                <label for="userid">Course Id</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Cource Id"
                  required
                  name="userid"
                  onChange={eventInput}
                  value={name.userid}
                />
              </div>
              <div className="form-group">
                <label for="title">Course title</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Enter Cource Title"
                  name="title"
                  onChange={eventInput}
                  value={name.title}
                />
              </div>
              <div class="form-group">
                <label for="description">Enter Course Description</label>
                <textarea
                  class="form-control"
                  rows="3"
                  placeholder="Enter Cource Description"
                  required
                  id="description"
                  onChange={eventInput}
                  name="description"
                  value={name.description}
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  class="btn btn-outline-success"
                  onClick={SubmitButton}
                >
                  Add Course
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addcources;
