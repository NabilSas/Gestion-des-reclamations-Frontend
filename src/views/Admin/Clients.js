import React, { useState, useEffect } from "react";
import { Button, CardHeader, Col, Input, Row, Card, CardTitle, CardBody, Table, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";

function Clients() {
    const [clients, setClients] = useState([]);
    const [deleteModal, setDeleteModal] = useState(false);
    const [selectedClientId, setSelectedClientId] = useState(null);
    const [searchQuery, setSearchQuery] = useState(""); // New state for the search query

    useEffect(() => {
        // Fetch data from the API
        fetch(`http://localhost:8080/user/all`)
            .then((response) => response.json())
            .then((data) => {
                // Filter users with the role "ROLE_USER"
                const filteredClients = data.filter((client) =>
                    client.roles.some((role) => role.name === "ROLE_USER")
                );
                setClients(filteredClients);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const toggleDeleteModal = () => setDeleteModal(!deleteModal);

    const handleDelete = (id) => {
        toggleDeleteModal(); // Open the confirmation modal
        setSelectedClientId(id);
    };

    const confirmDelete = () => {
        // Make a delete request to the API
        fetch(`http://localhost:8080/user/deleteUser/${selectedClientId}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    // If the delete request is successful, update the clients state
                    setClients((prevClients) => prevClients.filter((client) => client.id !== selectedClientId));
                } else {
                    console.error("Error deleting user:", response.statusText);
                }
            })
            .catch((error) => console.error("Error deleting user:", error))
            .finally(() => {
                toggleDeleteModal(); // Close the confirmation modal
                setSelectedClientId(null);
            });
    };

    const handleSearch = () => {
        // Make a search request to the API
        fetch(`http://localhost:8080/user/user/${searchQuery}`)
            .then((response) => response.json())
            .then((data) => {
                // Update state with the search result
                setClients([data]);
            })
            .catch((error) => console.error("Error searching user:", error));
    };

    return (
        <div className="content">
            <Row className="mb-3">
                <Col xs={12} md={2}>
                    <h3>Gérer les clients</h3>
                </Col>

                <Col xs={12} md={9}>
                    <Input
                        placeholder="Search"
                        type="text"
                        name="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button size="sm" className="btn btn-success" onClick={handleSearch}>
                        <i className="tim-icons icon-zoom-split" />
                    </Button>
                </Col>
                <Col xs={12} md={1}>
                    <Button size="sm" className="btn btn-success" tag={Link} to="/admin/addclients">
                        <i className="tim-icons icon-simple-add text-white" />
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h3">Liste des Clients</CardTitle>
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
                                    {clients.map((client, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{client.cin}</td>
                                            <td>{client.nom}</td>
                                            <td>{client.email}</td>
                                            <td className="text-center">
                                                <ButtonGroup>
                                                    <Button size="sm" color="primary" tag={Link} to="/admin/UpdateClients">
                                                        <i className="tim-icons icon-pencil text-white" /> Modifier
                                                    </Button>
                                                    <Button size="sm" color="danger" onClick={() => handleDelete(client.id)}>
                                                        <i className="tim-icons icon-trash-simple text-white" /> Supprimer
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

            {/* Confirmation Modal */}
            <Modal isOpen={deleteModal} toggle={toggleDeleteModal}>
                <ModalHeader toggle={toggleDeleteModal}>Confirmation</ModalHeader>
                <ModalBody>
                    <p>Do you want to delete this client?</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={confirmDelete}>
                        Delete
                    </Button>{" "}
                    <Button color="secondary" onClick={toggleDeleteModal}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Clients;
