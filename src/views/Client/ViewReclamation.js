import React, { useState, useEffect } from "react";
import { Button, CardHeader, Col, Input, Row, Card, CardTitle, CardBody, Table, ButtonGroup, Form } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const baseUrl = 'http://localhost:8080';

function ViewReclamation() {
    const { id } = useParams();
    const [motif, setMotif] = useState('');
    const [commentaire, setCommentaire] = useState('');
    const [reclamations, setReclamations] = useState([]);


    const getReclamationsById = async () => {
        try {
            const response = await axios.get(`/reclamations/reclamation/${id}`);
            setMotif(response.data.motif);
            setCommentaire(response.data.commentaire);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getReclamationsById();
    }, []);

    

    return (
        <>
            <div className="content">

                <Row>
                    <Col xs={12} md={9} xl={9}>
                        <h3>Details :</h3>
                    </Col>
                    <Col xs={12} md={2} xl={2}>

                    </Col>
                    <Col xs={12} md={1} xl={1}>
                        <Button size="sm" className="btn btn-danger" tag={Link} to="/client/"><i className="tim-icons icon-simple-remove text-white" /></Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={12} md={2} xl={2}>

                    </Col>
                    <Col xs={12} md={8} xl={8} >
                        <Card className="p-3">
                            <CardHeader>
                                <CardTitle tag="h3">
                                    Motif :
                                </CardTitle>
                            </CardHeader>
                            <CardBody className="p-5">
                                <Form onSubmit="">


                                    <div>
                                        <p>
                                            {commentaire}
                                        </p>
                                    </div>

                                    {/*

                                    <div className="form-group">
                                        <label htmlFor="email">EMAIL :</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            value="monaimer99@gmail.com"
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">MESSAGE</label>
                                        <Input
                                            type="textarea"
                                            className="form-control"
                                            name="message"
                                            placeholder="Type a message..."

                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            className="btn btn-info btn-block"
                                        >

                                            <span>SEND</span>
                                        </button>
                                    </div>


                                    */}



                                </Form>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col xs={12} md={2} xl={2}>

                    </Col>
                </Row>

            </div>

        </>
    )

}
export default ViewReclamation;