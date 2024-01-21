import React, { useEffect, useState } from "react";


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
 
  Row,
  Col,

} from "reactstrap";


import ReclamationsChart from "./ReclamationsChart";
import ReclamationService from "./ReclamationService";
function Dashboard(props) {

  const [reclamations, setReclamations] = useState([]);
  const [recNum, setRecNum] = useState(0);

  const getReclamations = async () => {
    try {
      const response = await fetch(`http://localhost:8080/reclamations/all`);

      const data = await response.json();
      setReclamations(data);
      const devsNbr = data.length;
      setRecNum(devsNbr);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getReclamations();
  }, []);


  return (
    <>
      <div className="content">
        
        <Row className="mt-5 p-5">
          <Col lg="6">
            <Card className="card-chart" style={{ height: '500px' }}>
              <CardHeader>
                <h5 className="card-category">Reclamations By Status</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> {recNum}
                </CardTitle>
              </CardHeader>
              <CardBody className="py-5">
                <ReclamationsChart reclamations={reclamations} />
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-chart" style={{ height: '500px' }}>
              <CardHeader>
                <h5 className="card-category">Reclamations by Service</h5>
                <CardTitle tag="h3">

                </CardTitle>
              </CardHeader>
              <CardBody>
                <ReclamationService />
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
    </>
  );
}

export default Dashboard;