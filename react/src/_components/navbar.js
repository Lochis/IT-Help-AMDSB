import { Nav, Navbar, DropdownDivider, NavDropdown, NavItem, NavLink, NavbarToggle, NavbarCollapse, Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navigation() {

  return (
    <>
      <Container className="pt-4 pb-2 d-sm-block d-none bg-body-tertiary border-bottom border-3 border-primary-subtle" fluid>
        <Container>
      <div className="d-flex flex-row gap-3">
        <Link href="/" className="me-auto text-decoration-none">
          <div className="d-flex flex-row gap-3">
            <Image width='50' height='55' className="align-self-center mb-3" src="/branding/home_button.png" alt="AMDSB home" />
            <h1 id="header-title" className="align-self-center me-auto fw-bold" >Information Technology Services</h1>
          </div>
        </Link>
        <div className="align-self-center">
         <ThemeSwitcher/>
        </div>
        </div>
        </Container>
      </Container>

      <Navbar expand="sm" className="bg-body-tertiary shadow-sm">
        <Container className="d-flex flex-row d-md-none d-lg-none d-sm-none">
        <Link href="/" className="me-auto text-decoration-none">
          <div className="d-flex flex-row gap-2">
            <Image width={30} height={35} className="align-self-center mb-3" src="/branding/home_button.png" alt="AMDSB home" />
            <h1 id="header-title" className="align-self-center me-auto flex-grow-1" ><strong>Information Technology Services</strong></h1>
          </div>
        </Link>
        <NavbarToggle aria-controls="basic-navbar-nav" className="d-flex-end" />
        </Container>
          
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="mx-auto gap-lg-4 gap-md-2 gap-sm-none">
              <NavLink  href="ithelp">
                <Image width="75" height="75" src="/navigation/training.png" style={{borderRadius: 12}} alt="IT Training button"></Image>
              </NavLink>
              <NavLink target="_blank" href="https://amdsb.sharepoint.com/:f:/r/sites/Info/SSS/Documents/IT%20Information%20%26%20Resources/IT%20Guidelines?csf=1&web=1&e=I7xhmB">
                <Image width="75" height="75" src="/navigation/guidelines.png" style={{borderRadius: 12}} alt="IT Guidelines button"></Image>
                </NavLink>
                <NavLink target="_blank" href="https://amdsb.topdesk.net/tas/public/login/saml">
                <Image width="75" height="75" src="/navigation/topdesk_staff.png" style={{borderRadius: 12}} alt="Topdesk Staff login button"></Image>
                </NavLink>
                <NavLink href="apps">
                <Image width="75" height="75" src="/navigation/board_approved_apps.png" style={{borderRadius: 12}} alt="AMDSB approved online tools"></Image>
                </NavLink>
                <NavLink target="_blank" href="https://amdsb.sharepoint.com/:b:/r/sites/Info/SSS/Documents/IT%20Information%20%26%20Resources/IT%20Guidelines/IT%20Price%20List.pdf">
                <Image width="75" height="75" src="/navigation/pricelist.png" style={{borderRadius: 12}} alt="IT Pricelist button"></Image>
                </NavLink>
                <NavLink href="https://amdsb.topdesk.net/tas/public/ssp/content/detail/service?unid=b7543fd1eb69438093e2868f8daa6c89&from=3ef637ee-e66e-474d-9f94-1988887534d4">
                <Image width="75" height="75" src="/navigation/purchasing.png" style={{borderRadius: 12}} alt="IT purchasing button"></Image>
                </NavLink>
                <NavLink href="reset">
                <Image width="75" height="75" src="/navigation/passwordreset.png" style={{borderRadius: 12}} alt="Password Reset button"></Image>
                </NavLink>
            </Nav>
          </NavbarCollapse>
        
      </Navbar>
    </>
  );
}