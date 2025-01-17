import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signin = ({ setloginEmail, loginEmail }) => {
  const [formData, setformData] = useState({});
  const [getDataArray, setgetDataArray] = useState([]);

  const navigate = useNavigate();

  const changeHandle = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    let findData = getDataArray.find(
      (e) => formData.email === e.email && formData.password === e.password
    );
    if (findData) {
      localStorage.setItem("LoggedInUser", JSON.stringify(formData));
      navigate("/Home");
      Swal.fire({
        title: "Welcome!",
        text: `Welcome back ${findData.name} !`,
        icon: "success",
        confirmButtonText: "continue",
      });
      setloginEmail(loginEmail + 1);
    } else {
      Swal.fire({
        title: "Email is not valid!",
        text: "Use Valid email!",
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  };

  useEffect(() => {
    const getItem = JSON.parse(localStorage.getItem("user")) || [];
    setgetDataArray(Array.isArray(getItem) ? getItem : []);
  }, []);
  
  return (
    <div>
      <center style={{ marginTop: "200px" }}>
        <form className="w-50 p-5 mt-5 roundesd-4 shadow text-start">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={changeHandle}
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={changeHandle}
              className="form-control"
              id="password"
              aria-describedby="passwordHelp"
            />
          </div>
          <button
            type="submit"
            className="w-100 btn btn-success"
            onClick={submitHandle}
            style={{ backgroundColor: "#23629F" }}
          >
            Submit
          </button>
          <br />
          <br />
          <Link to="/Signup" className="mt-3" style={{ color: "#23629F" }}>
            Create an Account
          </Link>
        </form>
      </center>
    </div>
  );
};

export default Signin;
