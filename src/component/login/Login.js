import React from "react";
import "./Login.css";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Container,
} from "react-bootstrap";
import "./Login.css";
export default function Login() {
  return (
    <main>
      <div className="login">
        <Container className="container">
          <h2>Login Form</h2>
          <div
            class="login-form-grids animated wow slideInUp"
            data-wow-delay=".5s" >
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email Address" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="forgot">
                <a href="#">Forgot Password?</a>
              </div>
              <input type="submit" value="Login" />
            </Form>
          </div>
          <h4>For New People</h4>
          <p>
            <a href="/Register">Register Here</a> (Or) go back to{" "}
            <a href="/home">
              Home
              <span
                class="glyphicon glyphicon-menu-right"
                aria-hidden="true"
              ></span>
            </a>
          </p>
        </Container>
      </div>
    </main>
  );
}