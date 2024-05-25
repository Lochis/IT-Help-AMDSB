import { Card, CardBody, Container } from "react-bootstrap";
export default function Footer() {

    return (
        <Container className="text-center">
        <hr/>
        <Card>
            <CardBody>
                <h6>
                    Avon Maitland District School Board © 2024
                    <br></br>
                    <br></br>
                    62 Chalk Street
                    <br></br> 
                    Seaforth Ontario
                    <br></br> 
                    N0K1W0
                    <br></br>
                    <br></br>
                    519-527-0111 or 1-800-592-5437
                </h6>
            </CardBody>
        </Card>
        </Container>
    );
}