import React, { useEffect, useState } from "react";
import { Button, CardHeader, Col, Input, Row, Card, CardTitle, CardBody, Table, ButtonGroup, Form, CardFooter, Badge, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import JSZip from "jszip";

function RecDetails() {
    const { idB } = useParams();
    const [motif, setMotif] = useState('');
    const [service, setService] = useState('');
    const [commentaire, setCommentaire] = useState('');
    const [criticite, setCriticite] = useState(false);
    const [status, setStatus] = useState('');
    const [pieces, setPieces] = useState([]);
    const [motifMgr, setMotifMgr] = useState(null);
    const [serviceId, setServiceId] = useState([]);
    const [reclamations, setReclamations] = useState([]);

    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const [modal, setModal] = useState(false);

    const handleRefusClick = () => {
        setShowDeleteConfirmation(true);
        setModal(!modal);
    };
    const toggle = () => setModal(!modal);

    const getReclamationsById = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/reclamations/reclamation/${idB}`);
            setMotif(response.data.motif);
            setService(response.data.service.service);
            setCommentaire(response.data.commentaire);
            setCriticite(response.data.criticite);
            setStatus(response.data.status);
            setServiceId(response.data.service.id);
        } catch (error) {
            console.error(error);
        }
    };
    const services = {
        id: serviceId,
        service: service
    };

    var upStatus = "VALIDE";

    const valide = {
        id: idB, motif: motif, commentaire: commentaire, criticite: criticite, status: upStatus, service: services
    };

    const validerReclamation = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/reclamations/update/${idB}`, valide);
            const updatedRec = reclamations.map((reclamation) => {
                if (reclamation.id === response.data.id) {
                    return response.data;
                }
                return reclamation;
            });
            setReclamations(updatedRec);
            window.location.replace('/manager/reclamations');

        } catch (error) {
            console.error(error);
        }
    };
    var reStatus = "REFUS";
    const refus = {
        id: idB, motif: motif, commentaire: commentaire, criticite: criticite, status: reStatus, motifMgr: motifMgr, service: services
    };
    const refuserReclamation = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/reclamations/update/${idB}`, refus);
            const updatedRec = reclamations.map((reclamation) => {
                if (reclamation.id === response.data.id) {
                    return response.data;
                }
                return reclamation;
            });
            setReclamations(updatedRec);
            window.location.replace('/manager/reclamations');

        } catch (error) {
            console.error(error);
        }
        setShowDeleteConfirmation(false);
        setModal(modal);
    };
    const handleCancelRefus = () => {
        setShowDeleteConfirmation(false);
        setModal(modal);
    };

    useEffect(() => {
        getReclamationsById();
    }, []);

    let badgeVariant;
    let criticiteLabel;

    if (criticite === false) {
        badgeVariant = 'warning';
        criticiteLabel = 'Normal';
    } else if (criticite === true) {
        badgeVariant = 'danger';
        criticiteLabel = 'High';
    }

    let statusBadge;

    if (status === 'EN COURS') {
        statusBadge = 'warning';
    } else if (status === 'VALIDE') {
        statusBadge = 'success';
    } else if (status === 'REFUS') {
        statusBadge = 'danger';
    }

    const generateZip = async (reclamationId) => {
        try {
          // Fetch the reclamation data by ID
          const response = await axios.get(`http://localhost:8080/reclamations/reclamation/${reclamationId}`);
          const reclamationData = response.data;
      
          const zip = new JSZip();
          const pieces = [reclamationData.pieceJointe]; // Assuming pieceJointe is a single file in this case
      
          for (const piece of pieces) {
            const pieceUrl = `/reclamations/reclamation/${reclamationId}/piece/${piece}`;
            const pieceResponse = await axios.get(pieceUrl, { responseType: "arraybuffer" });
            zip.file(piece, pieceResponse.data);
          }
      
          const zipBlob = await zip.generateAsync({ type: "blob" });
      
          // Trigger the download
          const link = document.createElement("a");
          link.href = URL.createObjectURL(zipBlob);
          link.download = "pieces.zip";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (error) {
          console.error("Error fetching reclamation data:", error);
        }
      };
      
      

    return (
        <>
            <div className="content">
                <Row>
                    <Col xs={12} md={9} xl={9}>
                        <h3>Reclamation Details</h3>
                    </Col>
                    <Col xs={12} md={2} xl={2}>

                    </Col>
                    <Col xs={12} md={1} xl={1}>
                        <Button size="sm" className="btn btn-danger" tag={Link} to="/manager/reclamations"><i className="tim-icons icon-simple-remove text-white" /></Button>
                    </Col>
                </Row>
                <Row className="mt-5 py-5">
                    <Col xs={12} md={2} xl={2}>

                    </Col>
                    <Col xs={12} md={8} xl={8} >
                        <Card className="p-3 py-5">
                            <CardHeader>
                                <CardTitle tag="h4">
                                    <b>REF : {idB}</b>
                                </CardTitle>
                                <p className="card-category">{service} SERVICE</p>
                            </CardHeader>
                            <CardBody className="p-5">
                                <Row>
                                    <Col md="4"><b className="h4">Motif (Objet):</b></Col><Col md="8">{motif}</Col>
                                    <Col md="4"><b className="h4">Description :</b></Col><Col md="8">{commentaire}</Col>
                                    <Col md="4"><b className="h4">Status :</b></Col><Col md="8">{statusBadge && (
                                        <Badge color={statusBadge}>{status}</Badge>
                                    )}</Col>
                                    <Col md="4"><b className="h4">Etat Critique :</b></Col><Col md="8">{badgeVariant && (
                                        <Badge color={badgeVariant}>{criticiteLabel}</Badge>
                                    )}</Col>
                                    <Col md="4"><b className="h4">Pieces Jointes :</b></Col><Col md="8">
                                    <Button size="sm" color="info" onClick={() => generateZip(idB)}>
  <i className="tim-icons icon-cloud-download-93" /> Download Pieces
</Button>
                                         </Col>

                                </Row>
                            </CardBody>
                            <CardFooter className="text-right">
                                <ButtonGroup >
                                    <Button size="sm" color="success" tag={Link} onClick={validerReclamation}><i className="tim-icons icon-check-2" /> Valider</Button>
                                    <Button size="sm" color="danger" tag={Link} onClick={handleRefusClick}><i className="tim-icons icon-simple-remove" /> Refuser</Button>

                                </ButtonGroup>
                            </CardFooter>
                        </Card>

                    </Col>
                    <Col xs={12} md={2} xl={2}>

                    </Col>
                </Row>

            </div>
            {showDeleteConfirmation && (
                <Modal isOpen={modal} toggle={toggle} >
                    <ModalHeader toggle={toggle}>Confirmation de Refus</ModalHeader>
                    <ModalBody>
                        <p>Refuser cette reclamation ?</p>
                        <p>Motif de refus :</p>
                        <Input type="text"  value={motifMgr} onChange={(e) => setMotifMgr(e.target.value)} />
                    </ModalBody>
                    <ModalFooter className="text-right">
                        <ButtonGroup >
                            <Button size="sm" color="primary" onClick={refuserReclamation}>
                                YES
                            </Button>{' '}
                            <Button size="sm" color="secondary" onClick={handleCancelRefus}>
                                Cancel
                            </Button>
                        </ButtonGroup>
                    </ModalFooter>
                </Modal>

            )}
        </>
    )

}
export default RecDetails;