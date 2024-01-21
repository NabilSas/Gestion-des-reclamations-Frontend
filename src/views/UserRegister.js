import React, { useState } from "react";
import { Container, Row, Col, Form, Input } from "reactstrap";
import AuthService from '../services/auth.service';
import { useNavigate } from 'react-router-dom';

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return "The username must be between 3 and 20 characters.";
  }
  return null;
};

const email = (value) => {
  if (!/^\S+@\S+\.\S+$/.test(value)) {
    return "This is not a valid email.";
  }
  return null;
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return "The password must be between 6 and 40 characters.";
  }
  return null;
};

const vnom = (value) => {
  if (value.length < 3 || value.length > 20) {
    return "The nom must be between 3 and 20 characters.";
  }
  return null;
};

const vprenom = (value) => {
  if (value.length < 3 || value.length > 20) {
    return "The prenom must be between 3 and 20 characters.";
  }
  return null;
};

const vcin = (value) => {
  // Customize the validation logic for CIN as needed
  // For example, you might want to check length, format, etc.
  if (value.length !== 8) {
    return "CIN must be 8 characters long.";
  }
  return null;
};

function UserRegister() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    nom: "",
    prenom: "",
    cin: "",
    errors: {
      username: "",
      email: "",
      password: "",
      nom: "",
      prenom: "",
      cin: "",
    },
    message: "",
    successful: false,
  });

  const onChangeUsername = (e) => {
    setState({
      ...state,
      username: e.target.value,
      errors: {
        ...state.errors,
        username: "",
      },
    });
  };

  const onChangeEmail = (e) => {
    setState({
      ...state,
      email: e.target.value,
      errors: {
        ...state.errors,
        email: "",
      },
    });
  };

  const onChangePassword = (e) => {
    setState({
      ...state,
      password: e.target.value,
      errors: {
        ...state.errors,
        password: "",
      },
    });
  };

  const onChangeNom = (e) => {
    setState({
      ...state,
      nom: e.target.value,
      errors: {
        ...state.errors,
        nom: "",
      },
    });
  };

  const onChangePrenom = (e) => {
    setState({
      ...state,
      prenom: e.target.value,
      errors: {
        ...state.errors,
        prenom: "",
      },
    });
  };

  const onChangeCin = (e) => {
    setState({
      ...state,
      cin: e.target.value,
      errors: {
        ...state.errors,
        cin: "",
      },
    });
  };

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const errors = {
      username: vusername(state.username),
      email: email(state.email),
      password: vpassword(state.password),
      nom: vnom(state.nom),
      prenom: vprenom(state.prenom),
      cin: vcin(state.cin),
    };

    if (
      !state.username.trim() ||
      !state.email.trim() ||
      !state.password.trim() ||
      !state.nom.trim() ||
      !state.prenom.trim() ||
      !state.cin.trim()
    ) {
      setState({
        ...state,
        successful: false,
        message: "All fields are important.",
      });
    } else if (Object.values(errors).every((error) => !error)) {
      AuthService.register(state.username, state.email, state.password, state.nom, state.prenom, state.cin)
        .then((response) => {
          setState({
            ...state,
            message: response.data.message,
            successful: true,
          });
          navigate('/login');
        })
        .catch((error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setState({
            ...state,
            successful: false,
            message: resMessage,
          });
        });
    } else {
      setState({
        ...state,
        successful: false,
        errors: {
          ...errors,
        },
      });
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} xl={12}>
          <div className="m-5 p-5">
            <div className="card card-user p-5">
              <div className="text-center">
                {/* Avatar */}
              </div>
              <Form onSubmit={handleRegister}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={state.username}
                    onChange={onChangeUsername}
                    required
                  />
                  {state.errors.username && (
                    <div className="alert alert-danger" role="alert">
                      {state.errors.username}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={state.email}
                    onChange={onChangeEmail}
                    required
                  />
                  {state.errors.email && (
                    <div className="alert alert-danger" role="alert">
                      {state.errors.email}
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
                    required
                  />
                  {state.errors.password && (
                    <div className="alert alert-danger" role="alert">
                      {state.errors.password}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="nom">Nom</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="nom"
                    value={state.nom}
                    onChange={onChangeNom}
                    required
                  />
                  {state.errors.nom && (
                    <div className="alert alert-danger" role="alert">
                      {state.errors.nom}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="prenom">Prenom</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="prenom"
                    value={state.prenom}
                    onChange={onChangePrenom}
                    required
                  />
                  {state.errors.prenom && (
                    <div className="alert alert-danger" role="alert">
                      {state.errors.prenom}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="cin">CIN</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="cin"
                    value={state.cin}
                    onChange={onChangeCin}
                    required
                  />
                  {state.errors.cin && (
                    <div className="alert alert-danger" role="alert">
                      {state.errors.cin}
                    </div>
                  )}
                </div>
                {state.message && !state.successful && (
                  <div className="alert alert-danger" role="alert">
                    {state.message}
                  </div>
                )}
                <div className="form-group">
                  <button className="btn btn-primary btn-block" type="submit">
                    Register
                  </button>
                </div>
              </Form>
              <div className="text-center">
                <a href="/login" className="text-primary">
                  Already have an account ?
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default UserRegister;
