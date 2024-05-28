import Link from "next/link";
import { Accordion, AccordionBody, AccordionItem, AccordionHeader, ListGroup, ListGroupItem, Badge, Row, Col, Card, CardHeader, CardBody, CardFooter, CardImg, Image, CardTitle, CardSubtitle } from "react-bootstrap";

export default function Duo() {

    return (

        <>

            <p>The Duo Mobile app is only supported on devices that are running
                Android 10+ and iOS 14+.
            </p>
            <p>
                To check if your phone supports Duo Mobile, search for the app in
                the Apple App Store or Google Play Store and try to install it.
            </p>
            <p>
                If you do not see, or cannot install the app, your phone is not
                compatible. Some iPhones may be prompted to install an older version
                of the app and should do that if asked.
            </p>

            <p>{"If your cell phone does not support Duo Mobile, please submit a TOPDesk ticket under “Submit a Ticket > MFA > Cannot Use Duo Mobile App” and ignore the enrollment email."}</p>


            <Accordion>
                <AccordionItem eventKey={0}>
                    <AccordionHeader className="aHeader">
                        <h5>Q & A</h5>
                    </AccordionHeader>
                    <AccordionBody className="bg-body-secondary">
                        <ListGroup as="ol">
                            <ListGroupItem>
                                <div className="fw-bold">
                                    Q: What is MFA?
                                </div>
                                <div className="rounded bg-primary-subtle p-2 m-0">Multi-factor authentication (MFA) is a security enhancement that makes it very difficult for cyber attackers to gain access to personal data.
                                    Essentially MFA requires more than two logon factors.
                                    Instead of using just your AMDSB username and password to access data on the AMDSB domain, another logon factor will now be required.</div>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="fw-bold">
                                    Q: Why are we Doing This?
                                </div>
                                <div className="rounded bg-primary-subtle p-2 m-0">
                                    MFA is very effective because logging in requires physical possession of something beyond your username and password, be it your cell phone or a hardware token. While there are many ways to steal your username and password from anywhere in the world, it’s much more difficult to steal or access your username and password AND your phone or a hardware token. MFA is the safest way to protect your personal information. Banks, CRA, utility companies, and many other services are introducing MFA to protect your identity. Cyber security events such as phishing and ransomware is a constant threat and becoming very sophisticated.
                                    If a cyber criminal gains access to your board email account, any personal service connected to that email account can be compromised.
                                    The only cyber protection method proved to mitigate this risk is MFA.
                                </div>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="fw-bold">
                                    Q: How often will I be prompted for MFA?
                                </div>
                                <div className="rounded bg-primary-subtle p-2 m-0">
                                    You will only be prompted for MFA when off-site. When logging in on a device for the first time you will have the option to <span className="text-primary">Trust</span>  that device/browser.
                                    This will stop MFA from prompting as frequently on that device and last for 120 days.
                                    <br />
                                    After the 120 days you will be asked if you’d like to trust that device/browser again.
                                    <br />
                                    <div className="mx-auto text-center pt-3">
                                        <img className="pb-3"
                                            src="/ithelp/duo/q_a/1.png"
                                            alt="select duo mobile option" />
                                        <br />
                                        <i>Chromebook login does not support the <span className="text-primary">Trust this device/browser</span> feature but will only prompt for MFA off-site.</i>

                                    </div>
                                </div>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="fw-bold">
                                    Q: How do I set up MFA?
                                </div>
                                <div className="rounded bg-primary-subtle p-2 m-0">
                                    You only need to set up MFA once, on one device. The <span className="text-primary">Duo app</span> is the quickest and easiest MFA method and can be set up from the enrollment email that was sent to staff.
                                    <br />
                                    <Link href="https://amdsb.sharepoint.com/sites/Info/LL/Documents/Memos/Memos%20and%20Workshop%20Advisories%202021-2022/67_Multi-Factor_Authentication(MFA)_Deployment_Notification.pdf">Instructions on the setup process can be found here</Link>
                                    <br />
                                    Tokens and SMS Passcodes are requested via a TOPdesk ticket. ITS will configure these methods and no further setup is required by staff. Links to the TOPdesk forms can be found here:
                                    <ul>
                                        <li>
                                            <Link href="https://amdsb.topdesk.net/tas/public/ssp/content/serviceflow?unid=c915e00d007f4982b366072a5b3a33de">Request SMS Passcodes (Your cellphone does not support the Duo app)</Link>
                                        </li>
                                        <li>
                                            <Link href="https://amdsb.topdesk.net/tas/public/ssp/content/serviceflow?unid=7045120e1acf4dc5ab4ea4d7683bf54b">Request a Token (You do not have a cellphone)</Link>
                                        </li>
                                    </ul>
                                </div>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="fw-bold">
                                    Q: What do the different MFA methods look like?
                                </div>
                                <div className="rounded bg-primary-subtle p-2 m-0">
                                    <Row>
                                        <Col>
                                            <Card className="text-center">
                                                <CardHeader>
                                                    <CardTitle>Duo App</CardTitle>
                                                    <CardSubtitle>Recommended for all staff</CardSubtitle>
                                                </CardHeader>
                                                <Row className="mx-auto pt-2">
                                                    <Col>
                                                        <Image width="200" height="auto" src="/ithelp/duo/q_a/2.png" />
                                                    </Col>
                                                    <Col>
                                                        <Image width="200" height="auto" src="/ithelp/duo/q_a/5.png" />
                                                    </Col>

                                                </Row>

                                                <CardBody>

                                                </CardBody>
                                                <CardFooter>
                                                    You will need to open the app and tap <span className="text-primary">Approve</span>
                                                </CardFooter>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col>
                                            <Card className="text-center">
                                                <CardHeader>
                                                    <CardTitle>SMS Passcode</CardTitle>
                                                    <CardSubtitle>Recommended for all staff</CardSubtitle>
                                                </CardHeader>
                                                <Row className="mx-auto pt-2">
                                                    <Col>
                                                        <Image width="200" height="auto" src="/ithelp/duo/q_a/3.png" />
                                                    </Col>
                                                    <Col>
                                                        <Image width="200" height="auto" src="/ithelp/duo/q_a/6.png" />
                                                    </Col>

                                                </Row>
                                                <CardFooter>
                                                You will need to enter the code into the <span className="text-primary">Passcode</span> box
                                                </CardFooter>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col>
                                            <Card className="text-center">
                                                <CardHeader>
                                                    <CardTitle>Token</CardTitle>
                                                    <CardSubtitle>For staff without a phone</CardSubtitle>
                                                </CardHeader>
                                                <Row className="mx-auto pt-2">
                                                    <Col>
                                                        <Image width="200" height="auto" src="/ithelp/duo/q_a/4.png" />
                                                    </Col>
                                                    <Col>
                                                        <Image width="200" height="auto" src="/ithelp/duo/q_a/7.png" />
                                                    </Col>

                                                </Row>
                                                <CardFooter>
                                                You will need to enter the code into the <span className="text-primary">Passcode</span> box
                                                </CardFooter>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </ListGroupItem>
                        </ListGroup>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey={1}>
                    <AccordionHeader className="aHeader">
                        <h5>First Time Set Up</h5>
                    </AccordionHeader>
                    <AccordionBody className="bg-body-secondary">
                        <h4><Badge bg="danger" className="text-wrap">If you have requested a hardware token, please ignore these steps.</Badge></h4>
                        <ListGroup as="ol" numbered>
                            <ListGroupItem>
                                Download the Duo app on your mobile device. It can be found in your device's app store titled “Duo Mobile”.
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>On a computer <span className="text-danger">outside</span> of AMDSB’s network</strong>, login to an AMDSB site like <Link href="https://amdsb.elearningontario.ca/d2l/home">The Core</Link>.
                                <br />
                                It will prompt you to start setting up Duo
                                <br />
                                <img
                                    src="/ithelp/duo/first_time_setup/1.png"
                                    alt="Welcome to Duo Security screen" />
                            </ListGroupItem>

                            <ListGroupItem>
                                Press <span className="text-primary">Next</span> until you see the setup options. Choose to set up Duo Mobile.
                                <br />
                                <img
                                    src="/ithelp/duo/first_time_setup/2.png"
                                    alt="select duo mobile option" />
                            </ListGroupItem>

                            <ListGroupItem>
                                Enter your cell phone number or choose <span className="text-primary">I have a tablet</span> if using a tablet.
                                <br />
                                If using a phone number press <span className="text-primary">Add phone number</span> and confirm it on the next screen.
                                <br />
                                <h4><Badge bg="danger" className="text-wrap">Phone numbers must be unique to the user adding them. Do not add home/shared phone numbers.</Badge></h4>
                                <img
                                    src="/ithelp/duo/first_time_setup/3.png"
                                    alt="enter your phone number screen" />
                            </ListGroupItem>

                            <ListGroupItem>
                                You will be asked to download the app. If you have not done this, do it now.
                                <br />
                                <h4><Badge bg="danger" className="text-wrap">Do not proceed to the next step without downloading the app.</Badge></h4>
                            </ListGroupItem>
                            <ListGroupItem>
                                You will be asked to scan the barcode.
                                <br />
                                Open the Duo app on your phone and press <span className="text-primary">Continue</span> on the welcome screen.
                                <br />
                                Select <span className="text-primary">Use a QR code</span> to add an account.
                            </ListGroupItem>
                            <ListGroupItem>
                                Scan the barcode on your computer with your phone or tablet.
                                <br />
                                <i>If the app prompts that it needs access to your camera select allow. </i>
                            </ListGroupItem>
                            <ListGroupItem>
                                After scanning the QR code, tap <span className="text-primary">Next</span> in your app to give your account a name.
                                <br />
                                Leave the default of <span className="text-primary">Avon Maitland District School Board</span> and tap <span className="text-primary">Save</span>.
                            </ListGroupItem>
                            <ListGroupItem>
                                If prompted, run through the practice exercise and remaining setup to your preference.
                                <br />
                                <h4><Badge className="text-wrap" bg="danger">We recommend allowing notifications when asked during the setup to make the experience as simple as possible.</Badge></h4>
                            </ListGroupItem>
                            <ListGroupItem>
                                Once the app setup is complete, go back to your browser and press <span className="text-primary">Continue</span>.
                            </ListGroupItem>
                            <ListGroupItem>
                                <Badge bg="success"><h6 className="p-0 m-0">You are now set up with Duo MFA!</h6></Badge> Click <span className="text-primary">Log in with Duo</span> to continue and you will receive a prompt on your phone or tablet to approve the login.
                            </ListGroupItem>
                        </ListGroup>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>

        </>
    );
}