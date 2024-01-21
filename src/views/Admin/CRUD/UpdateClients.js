import React, { useState, useEffect } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

function UpdateClients() {
  const [client, setClient] = useState({
    prenom: "",
    nom: "",
    email: "",
    username: "",
    password: "",
    matricule: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const { client: initialClient } = location.state || {};

  useEffect(() => {
    // Fetch client data when component mounts
    const fetchClientData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/user/getUser/${initialClient.id}`);
        if (!response.ok) {
          throw new Error(`Error fetching client: ${response.statusText}`);
        }
        const data = await response.json();
        setClient(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClientData();
  }, [initialClient.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add your form submission logic here
      const response = await fetch(`http://localhost:8080/user/updateUser/${initialClient.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(client),
      });

      if (!response.ok) {
        throw new Error(`Error updating client: ${response.statusText}`);
      }

      // Redirect to the clients page after successful update
      window.location.href = "/admin/clients"; // Use window.location.href for navigation
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="content">
      <Row>
        <Col xs={12} md={9}>
          <h3>Gérer Clients</h3>
        </Col>
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={1}>
          <Button size="sm" className="btn btn-danger" tag={Link} to="/admin/clients">
            <i className="tim-icons icon-simple-remove text-white" />
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="prenom">PRENOM :</Label>
              <Input
                type="text"
                className="form-control"
                name="prenom"
                id="prenom"
                pattern="^[a-zA-ZÀ-ÿ-]+$"
                title="Enter a valid first name"
                value={client.prenom}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="nom">NOM :</Label>
              <Input
                type="text"
                className="form-control"
                name="nom"
                id="nom"
                pattern="^[a-zA-ZÀ-ÿ-]+$"
                title="Enter a valid last name"
                value={client.nom}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">EMAIL :</Label>
              <Input
                type="text"
                className="form-control"
                name="email"
                id="email"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                title="Enter a valid email address"
                value={client.email}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="username">USERNAME :</Label>
              <Input
                type="text"
                className="form-control"
                name="username"
                id="username"
                pattern="^[a-zA-Z0-9_-]+$"
                title="Enter a valid username"
                value={client.username}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">PASSWORD :</Label>
              <Input
                type="password"
                className="form-control"
                name="password"
                id="password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"
                title="Minimum eight characters, at least one uppercase letter, one lowercase letter, and one number"
                value={client.password}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="matricule">Nº DE MATRICULE :</Label>
              <Input
                type="text"
                className="form-control"
                name="matricule"
                id="matricule"
                value={client.matricule}
                onChange={handleChange}
              />
            </FormGroup>
            <Button className="btn btn-success btn-block" type="submit">
              <span>MODIFIER</span>
            </Button>
          </Form>
        </Col>
        <Col xs={12} md={2}></Col>
      </Row>
    </div>
  );
}

export default UpdateClients;
