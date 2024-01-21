import React, { useState } from "react";
import { Button, CardHeader, Col, Input, Row, Card, CardTitle, CardBody, Form } from "reactstrap";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

function AddClients() {
    const navigate = useNavigate();
    const [client, setClient] = useState({
        username: "",
        nom: "",
        cin: "",
        prenom: "",
        email: "",
        password: "",
    });

    // State to track email validity and error message
    const [isEmailValid, setIsEmailValid] = useState(true);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'email') {
            // Validate email pattern
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const isValid = emailRegex.test(value);
            setIsEmailValid(isValid);
        }

        setClient({ ...client, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if (!isEmailValid) {
                // Display an error message or take appropriate action
                console.error("Invalid email address");
                return;
            }

            const response = await axios.post("http://localhost:8080/api/auth/signup", client);
            console.log("API Response:", response.data);

            // Redirect to the Managers component
            navigate("/admin/clients");
        } catch (error) {
            console.error("Error sending data to API:", error);
            // Add error handling logic here
        }
    };

    return (
        <>
            <div className="content">
                <Row>
                    <Col xs={12} md={9} xl={9}>
                        <h3>Gérer Clients</h3>
                    </Col>
                    <Col xs={12} md={2} xl={2}></Col>
                    <Col xs={12} md={1} xl={1}>
                        <Button size="sm" className="btn btn-danger" tag={Link} to="/admin/clients">
                            <i className="tim-icons icon-simple-remove text-white" />
                        </Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={12} md={2} xl={2}></Col>
                    <Col xs={12} md={8} xl={8}>
                        <Card className="p-3">
                            <CardHeader>
                                <CardTitle tag="h3">Ajouter un Nouveau Client</CardTitle>
                            </CardHeader>
                            <CardBody className="p-5">
                                <Form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="username">USERNAME :</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            value={client.username}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nom">NOM :</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="nom"
                                            value={client.nom}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cin">CIN :</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="cin"
                                            value={client.cin}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="prenom">PRENOM :</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="prenom"
                                            value={client.prenom}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">EMAIL :</label>
                                        <Input
                                            type="text"
                                            className={`form-control ${!isEmailValid ? 'is-invalid' : ''}`}
                                            name="email"
                                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                                            title="Enter a valid email address"
                                            value={client.email}
                                            onChange={handleInputChange}
                                        />
                                        {!isEmailValid && <div className="invalid-feedback">Invalid email address</div>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">PASSWORD :</label>
                                        <Input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            value={client.password}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Col xs={12} md={4} xl={4}>
                                            <button type="submit" className="btn btn-success btn-block">
                                                <span>ENREGISTRER</span>
                                            </button>
                                        </Col>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12} md={2} xl={2}></Col>
                </Row>
            </div>
        </>
    );
}

export default AddClients;
