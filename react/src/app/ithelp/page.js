"use client";
import Image from "next/image";
import '../page.css';
import { Button, Card, CardBody, CardText, Col, Container, Row, Tab, TabContainer, Tabs, Nav, NavLink, NavItem, TabPane, TabContent } from "react-bootstrap";
import Wireless from "@/_components/ithelpTabs/wireless";
import Duo from "@/_components/ithelpTabs/duo";
import Topdesk from "@/_components/ithelpTabs/topdesk";


export default function Ithelp() {
  return (
  <>
  <Container fluid>
      <TabContainer id="how-do-i" defaultActiveKey="wireless">
        <Row className="pt-4">
          <Col sm="12" lg="1">
          </Col>
          <Col sm="12" lg="2">
            <Container fluid className="pb-3 bg-body-tertiary pt-3 rounded-3 border mb-4" >
            <h4 id="how-do-i-subtitle">How Do I?</h4>
            
            <Nav variant="pills" className="flex-column border-bottom border-top border-primary border-2 pt-2 pb-2">
              <NavItem>
                <NavLink className="nav-pill-item" eventKey="wireless">Wireless</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-pill-item" eventKey="duo">Duo - MFA</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-pill-item" eventKey="topdesk">TOPdesk</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-pill-item" eventKey="other">Other</NavLink>
              </NavItem>
            </Nav>
            </Container>
          </Col>

          <Col sm="12" lg="6">
            <TabContent className="rounded-3 border p-4 pt-3 bg-body-tertiary" style={{minHeight: '32vh'}}>
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
                    <img class="flex-end rounded" width="75" height="75" src="/ithelp/duo/duo_icon.png" />
                  </Col>
                </Row>

                <Duo/>

              </TabPane>
              <TabPane eventKey="topdesk">
                <Row className="align-items-center">
                  <Col className="me-auto">
                    <h2 class="text-primary display-6">TOPdesk</h2>
                  </Col>
                  <Col className="col-auto">
                    <img class="flex-end" width="75" height="75" src="/ithelp/topdesk/Topdesk_button.png" />
                  </Col>
                </Row>

                <Topdesk/>

              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
      </Container>
      </>
  );
}
