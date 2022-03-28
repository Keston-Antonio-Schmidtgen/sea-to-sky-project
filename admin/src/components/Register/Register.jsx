import React from "react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import "./register.scss";
import { MDBInput, MDBCol, MDBRow, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
export default function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    pass: "",
  });
  const history = useHistory();
  const handleClick = async (e) => {
    console.log("data is", data);

    if (!data.pass || !data.email) return;

    const response = await axios.post("/users/register", data);
    console.log("response from register is", response);
    if (response.data.success) history.push("/login");
    /*   setData({
      username: "",
      email: "",
      password: "",
    }) */
  };
  return (
    <div className="text-center bg-images">
      <div className="register">
        <div className="container">
          <div className="row align-items-center my-5">
            <div className="col-lg-7"></div>
            <div className="col-lg-5">
              <h2 className="font-weight-light">Register</h2>
              <form>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput
                      id="form3Example2"
                      label="Username"
                      value={data.username}
                      onChange={(e) =>
                        setData({ ...data, username: e.target.value })
                      }
                    />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  className="mb-4"
                  type="email"
                  id="form3Example3"
                  label="Email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <MDBInput
                  className="mb-4"
                  type="password"
                  id="form3Example5"
                  label="Password"
                  value={data.pass}
                  onChange={(e) => setData({ ...data, pass: e.target.value })}
                />
                <MDBBtn
                  type="submit"
                  className="mb-4"
                  block
                  variant="outline-secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick();
                  }}
                  color="info"
                >
                  {/* <NavLink to="/login">Submit</NavLink> */}
                  Submit
                </MDBBtn>{" "}
                <div className="text-center">
                  <p>
                    Already a member? <Link to="login">Sign In</Link>
                  </p>
                  <p>or Register with:</p>
                  <MDBBtn floating className="mx-1" color="primary">
                    <MDBIcon fab icon="facebook-f" />
                  </MDBBtn>
                  <MDBBtn floating className="mx-1" color="danger">
                    <MDBIcon fab icon="google" />
                  </MDBBtn>
                  <MDBBtn floating className="mx-1" color="info">
                    <MDBIcon fab icon="twitter" />
                  </MDBBtn>
                  <MDBBtn floating className="mx-1" color="dark">
                    <MDBIcon fab icon="github" />
                  </MDBBtn>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
