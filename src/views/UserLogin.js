import React, { useState } from "react";
import { withRouter } from '../common/with-router';
import { Container, Row, Col, Form, Input } from "reactstrap";
import AuthService from "../services/auth.service";

function UserLogin(props) {
  const [state, setState] = useState({
    username: "",
    password: "",
    loading: false,
    usernameError: "",
    passwordError: "",
    serverError: ""
  });

  const required = value => {
    if (!value || value.trim() === "") {
      return "This field is required!";
    }
    return null;
  };

  const onChangeUsername = (e) => {
    setState({
      ...state,
      username: e.target.value,
      usernameError: "",
      serverError: ""
    });
  };

  const onChangePassword = (e) => {
    setState({
      ...state,
      password: e.target.value,
      passwordError: "",
      serverError: ""
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setState({
      ...state,
      loading: true,
      serverError: ""
    });

    if (!state.password || state.password.trim() === "") {
      setState({
        ...state,
        loading: false,
        passwordError: "Password must not be empty"
      });
      return;
    }

    AuthService.login(state.username, state.password)
      .then((user) => {
        // Store user information in local storage for further use
        localStorage.setItem('user', JSON.stringify(user));

        // Redirect based on user role or any other criteria
        switch (user.roles[0]) {
          case "ROLE_ADMIN":
            props.router.navigate("/admin");
            break;
          case "ROLE_MODERATOR":
            props.router.navigate("/manager");
            break;
          case "ROLE_USER":
            props.router.navigate("/client");
            break;
          default:
            props.router.navigate("/login");
        }
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        if (resMessage.toLowerCase().includes("username")) {
          setState({
            ...state,
            loading: false,
            usernameError: resMessage
          });
        } else if (resMessage.toLowerCase().includes("password")) {
          setState({
            ...state,
            loading: false,
            passwordError: resMessage
          });
        } else {
          setState({
            ...state,
            loading: false,
            serverError: resMessage
          });
        }
      });
  };

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} xl={12}>
          <div className="m-5 p-5">
            <div className="card card-user p-5">
              <div className="text-center">
                <img
                  alt="..."
                  className="avatar border-gray"
                  src={require("assets/img/default-avatar.png")}
                />
              </div>
              <Form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={state.username}
                    onChange={onChangeUsername}
                    validations={[required]}
                  />
                  {state.usernameError && (
                    <div className="alert alert-danger" role="alert">
                      {state.usernameError}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={state.password}
                    onChange={onChangePassword}
                    validations={[required]}
                  />
                  {state.passwordError && (
                    <div className="alert alert-danger" role="alert">
                      {state.passwordError}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-primary btn-block"
                    disabled={state.loading}
                  >
                    {state.loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Login</span>
                  </button>
                </div>
              </Form>
              <div className="text-center">
                <a href="/register" className="text-primary">Don't have an account ?</a>
              </div>
              {state.serverError && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {state.serverError}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(UserLogin);
