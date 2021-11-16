import React from "react";
import "./Login.css";
import { Button, Form, FormGroup, Input, Label } from "react-bootstrap";
export default function Login() {
  return (
    <main>
      <h1 className="contac">LOGIN FORM</h1>
      <div className="box">
      <Form className="loginform">
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <a href ="/">Forgot Password</a>
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>
      </div>
    </main>
  );
}
