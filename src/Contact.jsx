import React, { useState, useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us || Learncodewith-Rahul Bisht";
  }, []);

  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });
  const [newData, setNewdata] = useState([]);
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    setNewdata((olditem) => {
      return [...olditem, data];
    });

    console.log(newData);

    alert(`My Name is ${data.fullname}. My mobile no is ${data.mobile} and Email is
   ${data.email}, here is what i want to say ${data.message}`);
  };

  return (
    <>
      <div className="my-4">
        <h1 className="text-center"> Contact us</h1>
        <hr className="w-25 mx-auto"></hr>
      </div>

      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  required
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your Full Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Mobile No
                </label>
                <input
                  type="number"
                  class="form-control"
                  required
                  id="exampleFormControlInput1"
                  name="mobile"
                  value={data.mobile}
                  onChange={InputEvent}
                  placeholder="Mobile-No"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  required
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  required
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              <div class="col-12 mb-3 text-center">
                <button class="btn btn-outline-success" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
