import React, { useEffect, useState } from "react";
import { Button, CardHeader, Col, Input, Row, Card, CardTitle, CardBody, Table, ButtonGroup, Badge } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function Reclamations() {
    const [reclamations, setReclamations] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getReclamations = async () => {
        try {
            const response = await axios.get('http://localhost:8080/reclamations/all');
            setReclamations(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getReclamations();
    }, []);

  
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const renderReclamationsTable = (status) => {
        const filteredReclamations = reclamations.filter(reclamation => reclamation.status === status);
        const filteredData = filteredReclamations.filter((item) => {
            // Modify the condition based on your search requirements
            return item.user.cin?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    
        });
        const reclamationsList = filteredData.slice(0, 10).map(reclamation => {
            const service = reclamation.service ? reclamation.service.service : '';
            const criticiteValue = reclamation.criticite;
            const status = reclamation.status;

            let badgeVariant;
            let criticiteLabel;

            let statusBadge;

            if (status === 'EN COURS') {
                statusBadge = 'warning';
            } else if (status === 'VALIDE') {
                statusBadge = 'success';
            } else if (status === 'REFUS') {
                statusBadge = 'danger';
            }

            if (criticiteValue === false) {
                badgeVariant = 'warning';
                criticiteLabel = 'Normal';
            } else if (criticiteValue === true) {
                badgeVariant = 'danger';
                criticiteLabel = 'High';
            }

            return <tr key={reclamation.id}>
                <td style={{ whiteSpace: 'nowrap' }}>{reclamation.id}</td>
                <td>{service}</td>
                <td>{reclamation.commentaire}</td>
                <td>{reclamation.motif}</td>
                <td>{statusBadge && (
                    <Badge color={statusBadge}>{status}</Badge>
                )}</td>
                <td>
                    {badgeVariant && (
                        <Badge color={badgeVariant}>{criticiteLabel}</Badge>
                    )}
                </td>
                <td className="text-center">
                    <ButtonGroup>
                        <Button size="sm" color="success" tag={Link} to={"/manager/contact/" + reclamation.id}><i className="tim-icons icon-email-85" /></Button>
                        <Button size="sm" color="primary" tag={Link} to={"/manager/details/" + reclamation.id}><i className="tim-icons icon-alert-circle-exc" /></Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (

            <Table key={status} responsive>
                <thead className="text-primary">
                    <tr>
                        <th>#</th>
                        <th>Service</th>
                        <th>Description</th>
                        <th>Motif</th>
                        <th>Status</th>
                        <th>Etat critique</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reclamationsList}
                </tbody>
            </Table>
        );
    };



    return (
        <>
            <div className="content">
                <Row>
                    <Col xs={12} md={4} xl={4}>
                        <h3>Gérer les Reclamations</h3>
                    </Col>
                    <Col xs={12} md={7} xl={7}>
                        <Input placeholder="Search" type="text" name="search" value={searchTerm} onChange={handleSearch} />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={12} md={12} xl={12}>
                        <Card className="my-5">
                            <CardHeader >
                                <CardTitle tag="h5">Les reclamations En Cours</CardTitle>
                            </CardHeader>
                            <CardBody>
                                {renderReclamationsTable('EN COURS')}
                            </CardBody>
                        </Card>
                        <Card className="my-5">
                            <CardHeader >
                                <CardTitle tag="h5">Les reclamations Validé</CardTitle>
                            </CardHeader>
                            <CardBody>
                                {renderReclamationsTable('VALIDE')}
                            </CardBody>
                        </Card>
                        <Card className="my-5">
                            <CardHeader >
                                <CardTitle tag="h5">Les reclamations Refus</CardTitle>
                            </CardHeader>
                            <CardBody>
                                {renderReclamationsTable('REFUS')}
                            </CardBody>
                        </Card>

                    </Col>
                </Row>

            </div>
        </>
    )
}
export default Reclamations;