import { React, useState } from "react";
import { Modal } from "react-bootstrap";
import Logo from "../Assests/3.png";
import { Link } from "react-router-dom";
import "./signUp.css";

const SignUp = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    birthDate: "",
  });
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="signup-modal-body-padding">
          <div className="signup-form-style">
            <div className="col-md-12 row login-divs">
              <div className="col-md-6 signup-image-side">
                {/* <h4>SignUp</h4> */}

                <img className="signup-image-inner" src={Logo} alt="logologin" height="250px" width="250px" />
              </div>
              <div className="col-md-6 display-signup-style">
                <div className="signup-fields-heading-outer">
                  <h4 className="signup-fields-heading">
                    SignUp to your Account
                  </h4>
                </div>

                <form>
                  <label className="signup-birthDate-label" for="birthday">
                    Name:
                  </label>
                  <br />

                  <input
                    type="text"
                    className="signup-name-login"
                    placeholder="Name"
                    value={user.name}
                    onChange={(e) => {
                      setUser({ ...user, name: e.target.value });
                    }}
                  />

                  <label className="signup-birthDate-label" for="birthday">
                    Email:
                  </label>
                  <br />

                  <input
                    type="email"
                    className="signup-email-login"
                    placeholder="Email"
                    value={user.email}
                    onChange={(e) => {
                      setUser({ ...user, email: e.target.value });
                    }}
                  />

                  <label className="signup-birthDate-label" for="birthday">
                    Password:
                  </label>
                  <br />

                  <input
                    type="password"
                    placeholder="Password"
                    className="signup-password-login"
                    value={user.password}
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value });
                    }}
                  />

                  <label className="signup-birthDate-label" for="birthday">
                    Birth Date :
                  </label>
                  <br />
                  <input
                    className="signup-birthDate-login"
                    type="date"
                    id="birthday"
                    name="birthday"
                    placeholder="Birth Date"
                    min="1950-01-01"
                    max="2040-12-31"
                    value={user.birthDate}
                    onChange={(e) => {
                      setUser({ ...user, birthDate: e.target.value });
                    }}
                  />
                  <label className="signup-birthDate-label" for="birthday">
                    Gender:
                  </label>
                  <br />

                  <div className="signup-Gender-login">
                    <input
                      className="signup-gender-inputs"
                      type="radio"
                      name="gender"
                      value="male"
                    />{" "}
                    Male
                    <input
                      className="signup-gender-inputs"
                      type="radio"
                      name="gender"
                      value="female"
                    />{" "}
                    Female
                    <input
                      className="signup-gender-inputs"
                      type="radio"
                      name="gender"
                      value="unknown"
                    />{" "}
                    Custom
                  </div>

                  <button className="signup-button-style">
                    {" "}
                    <Link to="/homepage"> Sign Up</Link>{" "}
                  </button>
                </form>

                {/* <p className="signup-have-account">Don’t you have an account?</p> */}
                <p className="signup-register-now">
                  {/* <Link to="/homepage" > Login </Link> */}
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button> */}

        {/* <SignUp/> */}
        {/* <Button><NavBar/></Button> */}
        {/* </Modal.Footer> */}
      </Modal>
    </>
  );
};
export default SignUp;
