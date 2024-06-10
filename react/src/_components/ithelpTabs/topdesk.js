import { Accordion, AccordionBody, AccordionItem, AccordionHeader, ListGroup, ListGroupItem, Badge, Row, Col, Card, CardHeader, CardBody, CardFooter, CardImg, Image, CardTitle, CardSubtitle } from "react-bootstrap";

export default function Topdesk() {

    return (
        <>
            <p>
                TOPdesk is our ticketing system here at AMDSB.
                <br/>
            </p>

            <Accordion>
                <AccordionItem eventKey={0}>
                    <AccordionHeader className="aHeader">
                        <h5>Submit a Ticket</h5>
                    </AccordionHeader>
                    <AccordionBody className="">
                        <ListGroup as="ol" numbered>
                            <ListGroupItem>
                            Login to TOPdesk by clicking the icon above or by going to <a href="https://amdsb.topdesk.net/tas/public/login/saml" alt="link to Information Technology Services department page in the core">
                            this link</a>.
                            </ListGroupItem>
                            <ListGroupItem>
                            You should be automatically logged in and see the TOPdesk homepage. 
                            <br/>
                            From here you have 2 options:
                            <ListGroup as="ul" numbered>
                                <ListGroupItem variant="success">
                                Click the <span className="text-primary">Submit a Ticket</span> tile, and from there select the category that best suits your issue/request. 
                                <br/>
                                <span className="text-danger">Use the descriptions to help you decide which category to click on.</span>
                                <br/>
                                <img src="/ithelp/topdesk/submit_a_ticket/1.png" alt="submit a ticket page in TOPdesk"/>
                                </ListGroupItem>
                                <ListGroupItem variant="secondary">
                                Use the search bar at the top of the page to search for key words pertaining to your issue/request. 
                                <br/>
                                Selecting a result under the <span className="text-primary">Services & Forms</span> heading will take you to the category that best matches your search.
                                <br/>
                                <img src="/ithelp/topdesk/submit_a_ticket/2.png" alt="Services and Forms heading highlighted"/>
                                </ListGroupItem>
                            </ListGroup>
                            </ListGroupItem>
                            <ListGroupItem>
                            Once you’ve made it to a category for your request, you’ll see some info on the left and <span className="text-primary">forms</span> on the right. 
                            Select the form that best fits with your issue/request. 
                            <br/>
                            If no forms match your issue/request, select the <span className="text-primary">Other/General</span> form in that category.
                            <br/>
                            <img src="/ithelp/topdesk/submit_a_ticket/3.png" alt="choosing a category, web services"/>
                            </ListGroupItem>
                            <ListGroupItem>
                                Fill out the form and keep an eye on the right of the screen for Possible solutions:
                                <br/>
                                <img src="/ithelp/topdesk/submit_a_ticket/4.png" alt="details page, possible solutions highlighted"/>
                            </ListGroupItem>
                        </ListGroup>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </>
    );
}