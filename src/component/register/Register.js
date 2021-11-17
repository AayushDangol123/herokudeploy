import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Container,
} from "react-bootstrap";
import "./Register.css";
const Register = () => {
  return (
    <div className="register">
      <Container className="container">
        <h2>Register Here</h2>
        <div class="login-form-grids">
          <h5>profile information</h5>
          <Form action="#" method="post">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="First Name..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Last Name..." />
            </Form.Group>
          </Form>
          <div class="register-check-box">
            <div class="check">
              <label class="checkbox">
                <input type="checkbox" name="checkbox" />
                <i> </i>Subscribe to Newsletter
              </label>
            </div>
          </div>
          <h6>Login information</h6>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password Confirmation"
              />
            </Form.Group>
            <div class="register-check-box">
              <div class="check">
                <label class="checkbox">
                  <input type="checkbox" name="checkbox" />
                  <i> </i>I accept the terms and conditions
                </label>
              </div>
            </div>
            <input type="submit" value="Register" />
          </Form>
        </div>
        <div class="register-home">
          <a href="/">Home</a>
        </div>
      </Container>
    </div>
  );
};

export default Register;