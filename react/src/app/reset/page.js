import Image from "next/image";
import '../page.css';
import { Button, Card, CardBody, CardText, Container, Row } from "react-bootstrap";

export default function Reset() {
  return (
    <>
      <Container fluid="sm" className="text-center pt-5 pb-4" style={{maxWidth:'750px'}}>
        <Card>
        <CardBody>
          <CardText>
          <span className="fw-bold">
            Self Service Password Reset (SSPR)
            <br></br>
            and
            <br></br>
            Multi-Factor Authentication (MFA)
            </span>
          
            <br></br>

            If you have trouble changing your password or with multi-factor authentication, please contact the Learning Resource Centre.
         
          </CardText>
        </CardBody>
        </Card>

        <Row className="mx-auto gy-2 py-2 mx-auto">
          <Button href="https://account.activedirectory.windowsazure.com/ChangePassword.aspx" className="resetbtn btn btn-secondary text-white py-3" target="_blank">Click HERE to Change your current (known) Password</Button>
          <Button href="https://aka.ms/ssprsetup/?whr=ed.amdsb.ca" className="resetbtn btn btn-success py-3" target="_blank">Click HERE to Register for Self Service Password Reset</Button>
          <Button href="https://passwordreset.microsoftonline.com/?whr=ed.amdsb.ca" className="resetbtn btn btn-danger py-3" target="_blank">Click HERE to Reset your Password if you have forgotten it</Button>
          <Button href="https://mysignins.microsoft.com/security-info?tenant=7521a320-3ade-494f-b901-bbefc8e14285" className="resetbtn btn btn-primary py-3" target="_blank">Click HERE to Change and Manage your O365 Security Info</Button>
        </Row>
        </Container>
    </>
  );
}
