import React, { useState } from "react";
import { Button, CardHeader, Col, Input, Row, Card, CardTitle, CardBody, Form, FormGroup, Label } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

function UpdateManager() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const location = useLocation();
    const manager = location.state.manager;

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <div className="content">
                <Row>
                    <Col xs={12} md={9}>
                        <h3>Gérer Manager</h3>
                    </Col>
                    <Col xs={12} md={2}></Col>
                    <Col xs={12} md={1}>
                        <Button size="sm" className="btn btn-danger" tag={Link} to="/admin/managers">
                            <i className="tim-icons icon-simple-remove text-white" />
                        </Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={12} md={2}></Col>
                    <Col xs={12} md={8}>
                        <Card className="p-3">
                            <CardHeader>
                                <CardTitle tag="h3">Modifier MANAGER</CardTitle>
                            </CardHeader>
                            <CardBody className="p-5">
                                <Form onSubmit="">
                                    <FormGroup>
                                        <Label for="prenom">PRENOM :</Label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="prenom"
                                            id="prenom"
                                            pattern="^[a-zA-ZÀ-ÿ-]+$"
                                            title="Enter a valid first name"
                                            defaultValue={manager.prenom}
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
                                            defaultValue={manager.nom}
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
                                            defaultValue={manager.email}
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
                                            defaultValue={manager.username}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">PASSWORD :</Label>
                                        <Input
                                            type={passwordVisible ? "text" : "password"}
                                            className="form-control"
                                            name="password"
                                            id="password"
                                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"
                                            title="Minimum eight characters, at least one uppercase letter, one lowercase letter, and one number"
                                            defaultValue={manager.password}
                                        />
                                        <Input
                                            type="checkbox"
                                            className="mt-2"
                                            onChange={togglePasswordVisibility}
                                        />{" "}
                                        Show Password
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="matricule">Nº DE MATRICULE :</Label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="matricule"
                                            id="matricule"
                                            defaultValue={manager.matricule}
                                        />
                                    </FormGroup>
                                    <Button className="btn btn-success btn-block" type="submit">
                                        <span>MODIFIER</span>
                                    </Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12} md={2}></Col>
                </Row>
            </div>
        </>
    );
}

export default UpdateManager;
