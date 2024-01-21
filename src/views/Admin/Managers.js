import React, { useState, useEffect } from "react";
import { Button, CardHeader, Col, Input, Row, Card, CardTitle, CardBody, Table, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

function Managers() {
    const [managers, setManagers] = useState([]);
    const [deleteId, setDeleteId] = useState(null);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    useEffect(() => {
        // Fetch data from the API
        fetch("http://localhost:8080/user/all")
            .then((response) => response.json())
            .then((data) => {
                // Filter managers with the role "ROLE_MODERATOR"
                const filteredManagers = data.filter((manager) =>
                    manager.roles.some((role) => role.name === "ROLE_MODERATOR")
                );
                setManagers(filteredManagers);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleDelete = (id) => {
        setDeleteId(id);
        toggleConfirmationModal();
    };

    const toggleConfirmationModal = () => {
        setIsConfirmationModalOpen(!isConfirmationModalOpen);
    };

    const confirmDelete = () => {
        // Make a delete request to the API
        fetch(`http://localhost:8080/user/deleteUser/${deleteId}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    // If the delete request is successful, update the managers state
                    setManagers((prevManagers) => prevManagers.filter((manager) => manager.id !== deleteId));
                    toggleConfirmationModal();
                } else {
                    console.error("Error deleting user:", response.statusText);
                }
            })
            .catch((error) => console.error("Error deleting user:", error));
    };

    const redirectToUpdate = (manager) => {
        navigate(`/admin/updateManager`, { state: { manager: manager } });
    };

    return (
        <>
            <div className="content">
                <Row>
                    <Col xs={12} md={2}>
                        <h3>Gérer les managers</h3>
                    </Col>
                    <Col xs={12} md={9}>
                        <Input placeholder="Search" type="text" name="search" />
                    </Col>
                    <Col xs={12} md={1}>
                        <Button size="sm" className="btn btn-success" tag={Link} to="/admin/addmanager">
                            <i className="tim-icons icon-simple-add text-white" />
                        </Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={12} md={12}>
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h3">Liste des managers</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>#</th>
                                            <th>CIN</th>
                                            <th>Nom</th>
                                            <th>Email</th>
                                            <th className="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {managers.map((manager, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{manager.cin}</td>
                                                <td>{manager.nom}</td>
                                                <td>{manager.email}</td>
                                                <td className="text-center">
                                                    <ButtonGroup>
                                                        <Button size="sm" color="blue" tag={Link} to={"/admin/contact/" + manager.id}>
                                                            <i className="tim-icons icon-email-85 text-white" />
                                                        </Button>
                                                        <Button size="sm" color="primary" onClick={() => redirectToUpdate(manager)}>
                                                            <i className="tim-icons icon-pencil text-white" />
                                                        </Button>
                                                        <Button size="sm" color="danger" onClick={() => handleDelete(manager.id)}>
                                                            <i className="tim-icons icon-trash-simple text-white" />
                                                        </Button>
                                                    </ButtonGroup>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
            <Modal isOpen={isConfirmationModalOpen} toggle={toggleConfirmationModal}>
                <ModalHeader toggle={toggleConfirmationModal}>Confirmation</ModalHeader>
                <ModalBody>
                    Do you want to delete this manager?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={confirmDelete}>Yes</Button>
                    <Button color="secondary" onClick={toggleConfirmationModal}>No</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default Managers;
