import { Nav, Navbar, DropdownDivider, NavDropdown, NavItem, NavLink, NavbarToggle, NavbarCollapse, Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

export default function Navigation() {
  return (
    <>
      <Container className="py-3">
        <div className="d-flex flex-row gap-3">
            <Image width='50' height='50' className="align-self-center mb-3" src="/branding/home_button.png" />
            <h1 id="header-title" className="align-self-center" ><strong>Information Technology Services</strong></h1>
        </div>

      </Container>

      <Navbar expand="md" className="bg-body-tertiary">
        <Container className="d-flex flex-row-reverse">
          <NavbarToggle aria-controls="basic-navbar-nav" className="d-flex-end" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#link">Link</NavLink>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavItem href="#action/3.1">Action</NavItem>
                <NavItem href="#action/3.2">
                  Another action
                </NavItem>
                <NavItem href="#action/3.3">Something</NavItem>
                <DropdownDivider />
                <NavItem href="#action/3.4">
                  Separated link
                </NavItem>
              </NavDropdown>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
}