import { useContext, useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { WordContext } from "../context";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Login() {
  const [data, setData] = useState({
    username: "",
    email: "",
    pass: "",
  });

  const { currentAdmin, setCurrentAdmin } = useContext(WordContext);

  const history = useHistory();

  const handleLogin = async () => {
    console.log("data is", data);
    if (!data.pass) return;

    const response = await axios.post("/users/login", data);

    console.log("response is ", response);

    if (response.data.success) {
      setCurrentAdmin(response.data.user);
      console.log("response.data.user", response.data.user);
      console.log("currentAdmin is", currentAdmin);
      history.push("/admin");
    }
  };
  return (
    <div className="text-center">
      <div className="register">
        <div className="container">
          <div className="row align-items-center my-5">
          <div class="col-lg-7">
          {/* <img src={require('/image-1.png')} class="img-fluid" alt="..." /> */}
          </div>
            <div className="col-lg-5">
              <h2 className="font-weight-light">Login</h2>
<form>
    <MDBInput 
    className='mb-4' 
    type='email' 
    id='form2Example0' 
    label='Email'
    value={data.email}
    onChange={(e) => setData({ ...data, email: e.target.value })}
           />
           <MDBInput 
    className='mb-4' 
    type='username' 
    id='form2Example1' 
    label='Username'
    value={data.username}
    onChange={(e) => setData({ ...data, username: e.target.value })}
           />
    <MDBInput 
    className='mb-4' 
    type='password' 
    id='form2Example2' 
    label='Password' 
    value={data.pass}
    onChange={(e) => setData({ ...data, pass: e.target.value })}
     />

                <MDBRow className="mb-4">
                  <MDBCol className="d-flex justify-content-center">
                    <MDBCheckbox
                      id="form2Example3"
                      label="Remember me"
                      defaultChecked
                    />
                  </MDBCol>
                  <MDBCol>
                    <Link to="/forgotpass">Forgot Pass?</Link>
                  </MDBCol>
                </MDBRow>

                <MDBBtn
                  type="submit"
                  className="mb-4"
                  block
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogin();
                  }}
                  color="info"
                >
                  Login
                </MDBBtn>

                <div className="text-center">
                  <p>
                    Not a member? <Link to="/register">Register</Link>
                  </p>
                  <p>or login with:</p>

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
