import Image from "next/image";
import Link from "next/link";
import { Button, Card, CardBody, CardText, Container, Row, Col, Carousel } from "react-bootstrap";
import './page.css';

export default function Home() {
  return (
    <>
    <Container fluid='sm' className="pt-3 pb-4">
      <Container className="d-xs-none d-md-block bg-body-tertiary p-4 rounded-3">
        <Row>
          <Col md="1">
          </Col>
          <Col>
        <p>The <b>Information Technology Services department</b> is responsible for all technical support, training,
          security of networks, devices, core business systems, and student information systems of the Avon Maitland
          District School
          Board.
          <br></br>
          <br></br> The department is committed to ensure all students and staff have dependable and safe access to
          progressive technologies in our classrooms of today and tomorrow.
        </p>

        <br></br>

        <h3 className="">The Information Technology Services Team is responsible for:</h3>
        <ul>
          <li>Technology planning and management</li>
          <li>Technology support and repairs</li>
          <li>Email and internet related services</li>
          <li>Technology infrastructure development</li>
          <li>Digital hardware, software and LAN/WAN design and implementation</li>
          <li>Educational and assistive technology support</li>
          <li>Information, Privacy and Security</li>
          <li>Administration and technical support of Student Information System (Maplewood)</li>
          <li>OnSIS reporting</li>
          <li>Admissions and Enrolment of Pupils</li>
        </ul>
        <Link target="_blank" href="https://amdsb.sharepoint.com/sites/Info/cs/Documents/IT%20Information%20%26%20Resources/ITS%20Contact%20List.pdf">
          For a contact directory of the Information Technology Services Team, click here.
          </Link>
          </Col>
          <Col md="1">
          </Col>
          </Row>
      </Container>
    </Container>
    </>
  );
}
