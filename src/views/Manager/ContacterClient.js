import React, { useEffect, useState } from "react";
import { Button, CardHeader, Col, Input, Row, Card, CardTitle, CardBody, Form } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import emailjs from 'emailjs-com';

function ContacterClient() {
    const { idB } = useParams();
    const [user, setUser] = useState([]);
    const [objet, setObjet] = useState('');
    const [message, setMessage]= useState('');

    const getReclamationsById = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/reclamations/reclamation/${idB}`); 
            setUser(response.data.user);
        } catch (error) {
            console.error(error);
        }
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        const serviceId = "service_id";
        const templateId = "template_id";

        try {

            // send email
            await emailjs.send(serviceId, templateId, {
                from_name: objet,
                to_name: user.username,
                message:message,
                to_email: user.email,
            });
            window.location.replace('/manager/reclamations');
        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        emailjs.init("password");
        getReclamationsById();
    }, [])
    return (
        <>
            <div className="content">

                <Row>
                    <Col xs={12} md={9} xl={9}>
                        <h3>Contacter Client</h3>
                    </Col>
                    <Col xs={12} md={2} xl={2}>

                    </Col>
                    <Col xs={12} md={1} xl={1}>
                        <Button size="sm" className="btn btn-danger" tag={Link} to="/manager/reclamations"><i className="tim-icons icon-simple-remove text-white" /></Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={12} md={2} xl={2}>

                    </Col>
                    <Col xs={12} md={8} xl={8} >
                        <Card className="p-3">
                            <CardHeader>
                                <CardTitle tag="h3">
                                    {user.username}
                                </CardTitle>
                            </CardHeader>
                            <CardBody className="p-5">
                                <Form onSubmit={sendEmail}>
                                    <div className="form-group">
                                        <label htmlFor="email">EMAIL :</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            value={user.email}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="objet">OBJET :</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="objet"
                                            value={objet}
                                            onChange={(e) => setObjet(e.target.value)}
                                            
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">MESSAGE</label>
                                        <Input
                                            type="textarea"
                                            className="form-control"
                                            name="message"
                                            placeholder="Type a message..."
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}

                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            className="btn btn-info btn-block"
                                        >

                                            <span>SEND</span>
                                        </button>
                                    </div>
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
export default ContacterClient;
