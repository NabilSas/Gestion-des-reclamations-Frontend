import React, { useState, useEffect } from "react";
import { Button, Form, CardHeader, Col, Input, Row, Card, CardTitle, CardBody, Table, ButtonGroup, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";
import axios from 'axios';

const baseUrl = 'http://localhost:8080';

function ListReclamation() {
    const [services, setServices] = useState([]);
    const [reclamations, setReclamations] = useState([]);
    const [selectedReclamation, setSelectedReclamation] = useState('');
    const [deleteModal, setDeleteModal] = useState(false);
    const [visualizeModal, setVisualizeModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [editData, setEditData] = useState({
        motif: '',
        criticite: '',
        commentaire: '',
        status: '',
        service: '',
    });

    const toggleDeleteModal = () => setDeleteModal(!deleteModal);
    const toggleVisualizeModal = () => setVisualizeModal(!visualizeModal);
    const toggleEditModal = () => setEditModal(!editModal);

    const getAllReclamations = async () => {
        try {
            // Get user ID from local storage
            const userData = JSON.parse(localStorage.getItem('user'));

            if (!userData || !userData.id) {
                console.error('User ID not found in local storage');
                return;
            }

            // Fetch reclamations for the user
            const response = await axios.get(`${baseUrl}/reclamations/user/${userData.id}`);
            // Set reclamations in state or do something with the data
            setReclamations(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(baseUrl + `/reclamations/search/${searchTerm}`);
            setReclamations(response.data);
        } catch (error) {
            console.error('Error searching reclamations:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(baseUrl + `/reclamations/delete/${selectedReclamation.id}`);
            getAllReclamations();
            toggleDeleteModal();
        } catch (error) {
            console.error('Error deleting reclamation:', error);
        }
    };

    const confirmDelete = (reclamation) => {
        setSelectedReclamation(reclamation);
        toggleDeleteModal();
    };

    const handleVisualize = (reclamation) => {
        setSelectedReclamation(reclamation);
        toggleVisualizeModal();
    };

    const handleEdit = (reclamation) => {
        setSelectedReclamation(reclamation);
        setEditData({
            motif: reclamation.motif,
            criticite: reclamation.criticite,
            commentaire: reclamation.commentaire,
            status: reclamation.status,
            service: reclamation.service.id,
        });
        toggleEditModal();
    };

    const handleSaveChanges = async () => {
        try {
            await axios.put(baseUrl + `/reclamations/update/${selectedReclamation.id}`, editData);
            getAllReclamations();
            toggleEditModal();
        } catch (error) {
            console.error('Error updating reclamation:', error);
        }
    };

    useEffect(() => {
        getAllReclamations();

        axios.get(baseUrl + '/services/all')
            .then(response => {
                setServices(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array to ensure useEffect runs only once on mount

    const filteredReclamations = reclamations.filter((reclamation) =>
        reclamation.motif.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <>
            <div className="content">
                <Row>
                    <Col xs={12} md={2} xl={2}>
                        <h3>Liste des reclamations</h3>
                    </Col>
                    <Col xs={12} md={7} xl={7}>
                        <Input
                            placeholder="Search"
                            type="text"
                            name="search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </Col>
                    <Col xs={12} md={2} xl={2}>
                        <Button size="sm" className="btn btn-success" tag={Link} to="/client/liste-reclamation">Rechercher<i className="tim-icons icon-simple-addd text-white" /></Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={12} md={12} xl={12}>
                        <Card>
                            <CardHeader >
                                <CardTitle tag="h5">Listes des RECLAMATIONS</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>#</th>
                                            <th>Motif</th>
                                            <th>Service</th>
                                            <th>Criticité</th>
                                            <th>Statut</th>
                                            <th className="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {filteredReclamations.map((reclamation, index) => (
                                            <tr key={reclamation.id}>
                                                <td>{index + 1}</td>
                                                <td>{reclamation.motif}</td>
                                                <td>{reclamation.service.service}</td>
                                                <td>{reclamation.criticite ? 'Normale' : 'Elevée'}</td>
                                                <td>{reclamation.status}</td>
                                                <td className="text-center">
                                                    <ButtonGroup>
                                                        <Button size="sm" color="blue" onClick={() => handleVisualize(reclamation)}><i className="fa fa-eye" /></Button>
                                                        <Button size="sm" color="primary" onClick={() => handleEdit(reclamation)} ><i className="tim-icons icon-pencil text-white" /></Button>
                                                        <Button size="sm" color="danger" onClick={() => confirmDelete(reclamation)}><i className="tim-icons icon-trash-simple text-white" /></Button>
                                                    </ButtonGroup>
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <Modal isOpen={visualizeModal} toggle={toggleVisualizeModal}>
                                    <ModalHeader toggle={toggleVisualizeModal}>Visualize Reclamation</ModalHeader>
                                    <ModalBody>
                                        {selectedReclamation && <p>{selectedReclamation.commentaire}</p>}
                                    </ModalBody>
                                    <ModalFooter className="container p-4">
                                        <Button color="secondary" onClick={toggleVisualizeModal}>Close</Button>
                                    </ModalFooter>
                                </Modal>

                                <Modal isOpen={editModal} toggle={toggleEditModal}>
                                    <div className="content">
                                        <ModalHeader toggle={toggleEditModal}>Edit Reclamation</ModalHeader>
                                        <ModalBody>
                                            <Form>
                                                <div className="form-group">
                                                    <label htmlFor="motif">MOTIF:</label>
                                                    <Input
                                                        value={editData.motif}
                                                        onChange={(e) => setEditData({ ...editData, motif: e.target.value })}
                                                        type="text"
                                                        className="form-control"
                                                        name="motif"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="criticite">CRITICITE:</label>
                                                    <select
                                                        value={editData.criticite}
                                                        onChange={(e) => setEditData({ ...editData, criticite: e.target.value })}
                                                        id="criticite"
                                                        className="form-control"
                                                    >
                                                        <option value="normale">Normale</option>
                                                        <option value="elevée">Elevée</option>
                                                    </select>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="commentaire">COMMENTAIRE:</label>
                                                    <Input
                                                        value={editData.commentaire}
                                                        onChange={(e) => setEditData({ ...editData, commentaire: e.target.value })}
                                                        id="commentaire"
                                                        type="textarea"
                                                        className="form-control"
                                                        name="commentaire"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="service">SERVICE:</label>
                                                    <select
                                                        value={editData.service}
                                                        onChange={(e) => setEditData({ ...editData, service: e.target.value })}
                                                        id="service"
                                                        className="form-control"
                                                    >
                                                        <option value="" disabled>Selectioner un service</option>
                                                        {services.map(service => (
                                                            <option key={service.id} value={service.id}>
                                                                {service.service}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </Form>
                                        </ModalBody>
                                        <ModalFooter className="container p-4">
                                            <Button color="success" onClick={handleSaveChanges}>Save Changes</Button>
                                            <Button color="secondary" onClick={toggleEditModal}>Cancel</Button>
                                        </ModalFooter>
                                    </div>
                                </Modal>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Modal isOpen={deleteModal} toggle={toggleDeleteModal}>
                    <div className="content">
                        <ModalHeader toggle={toggleDeleteModal}>Confirmation</ModalHeader>
                        <ModalBody>
                            Are you sure you want to delete this reclamation?
                        </ModalBody>
                        <ModalFooter className="container p-4">
                            <Button color="danger" onClick={handleDelete}>Delete</Button>
                            <Button color="secondary" onClick={toggleDeleteModal}>Cancel</Button>
                        </ModalFooter>
                    </div>
                </Modal>

            </div>
        </>
    )
}
export default ListReclamation;