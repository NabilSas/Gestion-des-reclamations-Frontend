import React, { useState, useEffect } from "react";
import { Button, CardHeader, Col, Input, Row, Card, CardTitle, CardBody, Form } from "reactstrap";
import axios from 'axios';

const baseUrl = 'http://localhost:8080';

function AddReclamation() {
    const [services, setServices] = useState([]);
    const userData = JSON.parse(localStorage.getItem('user'));

    const [data, setData] = useState({
        motif: '',
        criticite: true,
        commentaire: '',
        status: 'EN COURS',
        service: '',
        pieceJointe: '',
        user:userData.id
    });

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
        };
    
    
    const handleFileChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.files[0]
        });
    }

    const FormSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('motif', data.motif);
            formData.append('criticite', data.criticite);
            formData.append('commentaire', data.commentaire);
            formData.append('status', data.status);
            formData.append('service', data.service);
            formData.append('pieceJointe', data.pieceJointe);
            formData.append('user',data.user);         
            console.log('Service:', data.service);

            const response = await axios.post(baseUrl + '/reclamations/save_client', formData, {
                headers: {
                    'Content-type': 'multipart/form-data',
                },
            });
            

            console.log('Data submitted successfully:', response.data);
            console.log(formData);

        } catch (error) {
            console.error('Error submitting data:', error);
            console.log('Error Response:', error.response);

        }


    };



    useEffect(() => {
        axios.get(baseUrl + '/services/all')
            .then(response => {
                setServices(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <>

            <div className="content">

                <Row>
                    <Col xs={12} md={8} xl={8}>
                        <h3>Ajouter Reclamation</h3>
                    </Col>
                    <Col xs={12} md={9} xl={9}>

                    </Col>

                    {/* <Col xs={12} md={1} xl={1}>
                        <Button size="sm" className="btn btn-danger" tag={Link} to="/client/add-reclamation"><i className="tim-icons icon-simple-remove text-white" /></Button>
                    </Col>
                    */}

                </Row>
                <Row className="mt-3">
                    <Col xs={12} md={12} xl={12}>

                    </Col>
                    <Col xs={12} md={12} xl={12} >
                        <Card className="p-3">
                            <CardHeader>
                                <CardTitle tag="h3">
                                    Ajouter une nouvelle RECLAMATION
                                </CardTitle>
                            </CardHeader>
                            <CardBody className="p-5">
                                <Form onSubmit={FormSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="motif">MOTIF :</label>
                                        <Input
                                            id="motif"
                                            onChange={handleChange}
                                            type="text"
                                            className="form-control"
                                            name="motif"

                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="criticite">CRITICITE :</label>
                                        <select

                                            onChange={handleChange}
                                            id="criticite"
                                            className="form-control">
                                            <option value="0">Normale</option>
                                            <option value="1">Elevée</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="commentaire">COMMENTAIRE :</label>
                                        <Input

                                            onChange={handleChange}
                                            id="commentaire"
                                            type="textarea"
                                            className="form-control"
                                            name="commentaire"

                                        />
                                    </div>


                                   
<div className="form-group">
    <label htmlFor="service">SERVICE :</label>
    <select
        id="service"
        className="form-control"
        name="service"  // Make sure to include the name attribute
        onChange={handleChange}
    >
        <option value="" disabled>Selectionner un service</option>
        {services.map(service => (
            <option value={service.id}>
                {service.service}
            </option>
        ))}
    </select>
</div>


                                    <div className="form-group">
                                        <label htmlFor="piece-jointe">PIECE JOINTE :</label>
                                        <Button type="submit" className="btn btn-success btn-block col-4">
                                        <Input
    type="file"
    onChange={handleFileChange}
    className="form-control-file"
    name="pieceJointe"
/>
 Upload </Button>
                                       
                                    </div>
                                    <div className="form-group mt-4">
                                        <Col xs={12} md={4} xl={4} className="">
                                            <Button type="submit" className="btn btn-success btn-block">
                                                <span>ENREGISTRER</span>
                                            </Button>
                                        </Col>
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
export default AddReclamation;