"use client";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { Button, Card, CardBody, CardText, Col, Container, Row, Tab, TabContainer, Tabs, Nav, NavLink, NavItem, TabPane, TabContent } from "react-bootstrap";
import Wireless from "@/_components/ithelpTabs/wireless";
import Duo from "@/_components/ithelpTabs/duo";


export default function Ithelp() {
  return (
  <>
  <Container fluid>
      <TabContainer id="how-do-i" defaultActiveKey="wireless">
        <Row className="pt-4">
          <Col md="2">
          </Col>
          <Col md="2">
            <h4 id="how-do-i-subtitle">How Do I?</h4>
            <hr />
            <Nav variant="pills" className="flex-column">
              <NavItem>
                <NavLink eventKey="wireless">Wireless</NavLink>
              </NavItem>
              <NavItem>
                <NavLink eventKey="duo">Duo - MFA</NavLink>
              </NavItem>
              <NavItem>
                <NavLink eventKey="reset">Reset Password</NavLink>
              </NavItem>
              <NavItem>
                <NavLink eventKey="other">Other</NavLink>
              </NavItem>
            </Nav>
            <hr />
          </Col>

          <Col md="6">
            <TabContent>
              <TabPane eventKey="wireless">
                <h2 class="text-primary display-6">Wireless</h2>
                  <Wireless/>
                </TabPane>
              <TabPane eventKey="duo">
                <Row className="align-items-center">
                  <Col className="me-auto">
                    <h2 class="text-primary display-6">Duo - MFA</h2>
                  </Col>
                  <Col className="col-auto">
                    <img class="flex-end" src="/ithelp/duo/duo_icon.png" />
                  </Col>
                </Row>
                <Duo/>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
      </Container>
      </>
  );
}
