import { Accordion, AccordionHeader, AccordionBody, AccordionItem, ListGroup, ListGroupItem, Badge } from "react-bootstrap";

export default function Wireless() {

    return (
        <>
            <p>
                Our wireless networks consist of the following:
            </p>
            <ul>
                <li>
                    <strong class="text-primary">AMDSB-SECURE</strong> - this network is for both AMDSB owned and
                    personal
                    devices. Our systems
                    will
                    automatically determine if this device is board owned and apply necessary security.
                </li>
                <li>
                    <strong class="text-primary">AMDSB-GUEST</strong> - this network is for external guest users who
                    are Not
                    AMDSB Staff or
                    Students.
                </li>
            </ul>

            <p>
                <strong>
                    The new AMDSB-SECURE network may have compatibility issues with some older personal
                    devices.
                    <br />
                    In this case you will need to join the AMDSB-GUEST.
                </strong>
            </p>

            <h4 id="AMDSB-devices-only-badge">
                <Badge bg="danger">AMDSB-IOS and AMDSB-CHROME are for AMDSB owned devices only!</Badge>
            </h4>

            <p>
                As a result of privacy features present in all contemporary Wi-Fi devices, it's not feasible for us to retain your login credentials. Consequently, you might encounter repeated prompts to log in to the Wi-Fi system.
            </p>
            <p>
                One <b>solution</b> is to disable your private Wi-Fi settings:
            </p>

            <Accordion>
                <AccordionItem eventKey={0}>
                    <AccordionHeader className="aHeader">
                        <h5>Turn Off InPrivate Wi-Fi</h5> 
                    </AccordionHeader>
                    <AccordionBody className="bg-body-secondary">
                       <h4><Badge bg="secondary">IOS</Badge></h4>
                        <ListGroup as="ol" numbered>
                            <ListGroupItem>Go to Settings
                                <img src="/ithelp/wireless/turn_off_inprivate/ios_settings.png" alt="ios-settings" />
                                Wi-Fi, then tap <img src="/ithelp/wireless/turn_off_inprivate/information_ios.png" alt="ios information button" /> on a network.
                            </ListGroupItem>
                            <ListGroupItem>Turn Private Address off.</ListGroupItem>
                        </ListGroup>
                        <hr />
                        <h4>
                            <Badge bg="success">Android</Badge>
                        </h4>
                        <ListGroup as="ol" numbered>
                            <ListGroupItem>
                                Open Settings app on Android device.
                                <br />
                                <img class="w-50" src="/ithelp/wireless/turn_off_inprivate/android_wifi_settings.png"
                                    alt="android wifi settings 1" />
                            </ListGroupItem>

                            <ListGroupItem>
                                Tap Connections
                                <br />
                                <img class="w-50" src="/ithelp/wireless/turn_off_inprivate/android_wifi_settings2.png"
                                    alt="contuation of android wifi settings 2" />
                            </ListGroupItem>

                            <ListGroupItem>
                                Tap Wi-Fi
                                <br />
                                <img class="w-50" src="/ithelp/wireless/turn_off_inprivate/android_wifi_settings3.png"
                                    alt="contuation of android wifi settings 3" />
                            </ListGroupItem>

                            <ListGroupItem>
                                Tap the settings gear icon
                                <br />
                                <img class="w-50"
                                    src="/ithelp/wireless/turn_off_inprivate/android_wifi_settings4.png"
                                    alt="contuation of android wifi settings 4" />
                            </ListGroupItem>

                            <ListGroupItem>
                                Tap "Phone MAC"
                                <br />
                                <img class="w-50"
                                    src="/ithelp/wireless/turn_off_inprivate/android_wifi_settings5.png"
                                    alt="contuation of android wifi settings 5" />
                            </ListGroupItem>

                        </ListGroup>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>

            <h4 className="mt-4">How to Connect:</h4>
            <Accordion>
                <AccordionItem eventKey={1}>
                    <AccordionHeader>
                        <h5>
                            On an <Badge pill bg="success" className="align-top">Android</Badge> Based Operating System
                        </h5>
                        
                    </AccordionHeader>
                    <AccordionBody>
                        <ListGroup as="ol" numbered>
                            <ListGroupItem>
                                Connect to the <span class="text-primary">AMDSB-Secure</span> Wi-fi on your Android device.
                                <img class="d-block" src="/ithelp/wireless/android_based_os/1.png"
                                    alt="image of wi-fi screen to connect to amdsb-secure" />
                            </ListGroupItem>
                            <ListGroupItem>Enter your Avon Maitland
                                Username
                                (firstname.lastname) <b>or</b> full email address ending in
                                @ed.amdsb.ca & your password. Ensure <span
                                    class="text-danger">Auto-reconnect</span> is turned on.
                                <img class="d-block" src="/ithelp/wireless/android_based_os/2.png"
                                    alt="image of entering credentials into AMDSB-SECURE wi-fi network" />
                            </ListGroupItem>
                            <ListGroupItem>Tap on <span class="text-primary">CA
                                cetificate</span> and choose the <span class="text-primary">Don't Validate</span> option.
                                <img class="d-block" src="/ithelp/wireless/android_based_os/3.png"
                                    alt="image of tapping CA cetificate and the Don't validate option" />
                            </ListGroupItem>
                        </ListGroup>
                        <hr />
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem eventKey={2}>
                    <AccordionHeader>
                        <h5>
                            On an <Badge pill bg="secondary" className="align-top">IOS</Badge> Based Operating System
                        </h5>
                    </AccordionHeader>
                    <AccordionBody>
                        <ListGroup as="ol" numbered>
                            <ListGroupItem>
                                Connect to <span class="text-primary">AMDSB-Secure</span> and enter Username and Password (firstname.lastname) <b>or</b> full email address ending in @ed.amdsb.ca accepted.
                                <br />
                                <img class="d-block" src="/ithelp/wireless/apple_based_os/1.png"
                                    alt="image of wi-fi screen to connect to amdsb-secure" />
                            </ListGroupItem>
                            <ListGroupItem>
                                If prompted to trust a certificate, please click <b>Trust</b>
                                <img class="d-block" src="/ithelp/wireless/apple_based_os/2.png"
                                    alt="image of trusting certificate" />
                            </ListGroupItem>
                        </ListGroup>
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem eventKey={3}>
                    <AccordionHeader>
                        <h5>
                            On a <Badge pill bg="info" className="align-top">Windows</Badge> Operating System
                        </h5>
                    </AccordionHeader>
                    <AccordionBody>
                        <ListGroup as="ol" numbered>
                            <ListGroupItem>
                                Connect to <span class="text-primary">AMDSB-Secure</span> and enter Username and password(firstname.lastname) <b>or</b> full email address ending in @ed.amdsb.ca accepted.
                                <br />
                                <br />
                                <p>
                                    Make sure <span class="text-primary">Use my windows user
                                        account</span> is unchecked if using a PERSONAL
                                    windows
                                    device.
                                </p>
                                <img class="d-block" src="/ithelp/wireless/windows_os/1.png"
                                    alt="iamge of wi-fi screen to connect to amdsb-secure" />


                            </ListGroupItem>
                            <ListGroupItem>
                                Click <span class="text-primary">Connect</span> when
                                prompted a
                                second time!
                                <img class="d-block" src="/ithelp/wireless/windows_os/2.png"
                                    alt="image of trusting certificate" />
                            </ListGroupItem>
                        </ListGroup>
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem eventKey={4}>
                    <AccordionHeader>
                        <h5>
                            On a <Badge pill bg="secondary" className="align-top">macOS</Badge> Operating System
                        </h5>
                    </AccordionHeader>
                    <AccordionBody>
                        <ListGroup as="ol" numbered>
                            <ListGroupItem>
                                Connect to <span class="text-primary">AMDSB-Secure</span> which you will be prompted for your Active Directory login (firstname.lastname & password).
                            </ListGroupItem>
                            <ListGroupItem>
                                When a prompt is presented, accept our Certificate.
                                <br />
                                You must always choose <span class="text-primary">Always
                                    Trust</span> and click <span
                                        class="text-primary">Continue</span>
                                <img class="d-block" src="/ithelp/wireless/macos/1.png"
                                    alt="image of trusting certificate" />
                                <b>Mac based devices will then prompt you for a <span
                                    class="text-primary">second</span> username and
                                    password
                                    after clicking <span class="text-primary">Continue</span>.
                                    <br />
                                    You will then need to enter your Local Mac Administrator Username & Password.</b>
                            </ListGroupItem>
                        </ListGroup>
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem eventKey={5}>
                    <AccordionHeader>
                        <h5>
                            On a <Badge pill bg="success" className="align-top">Chromebook</Badge> (personal) Operating System
                        </h5>
                    </AccordionHeader>
                    <AccordionBody>
                        <ListGroup as="ol" numbered>
                            <ListGroupItem>
                                Click on the wireless Logo located on the Bottom right
                                corner.
                                <img class="d-block"
                                    src="/ithelp/wireless/chromebook/1.png"
                                    alt="image wireless logo" />
                            </ListGroupItem>
                            <ListGroupItem>
                                Click on the wireless logo (located above the <span
                                    class="text-danger">Not connected</span>)
                                <br />
                                You must always choose <span class="text-primary">Always
                                    Trust</span> and click <span
                                        class="text-primary">Continue</span>
                                <img class="d-block"
                                    src="/ithelp/wireless/chromebook/2.png"
                                    alt="image of wireless modal on chromebook" />
                            </ListGroupItem>
                            <ListGroupItem>
                                Next Select your preferred network (<span
                                    class="text-primary">AMDSB-Secure</span>)
                                <img class="d-block"
                                    src="/ithelp/wireless/chromebook/3.png"
                                    alt="image of network's available" />
                            </ListGroupItem>
                            <ListGroupItem>
                                Configure as follows:
                                <ul>
                                    <li>EAP Method - PEAP</li>
                                    <li>EAP Phase 2 Authentication - MSCHAPv2</li>
                                    <li>Server CA Certificate - Do not check.</li>
                                    <li>Identity – Your AMDSB Active Directory Username
                                        (firstname.lastname)</li>
                                    <li>Password – Your AMDSB Active Directory Password</li>
                                    <li>Anonymous Identity - not required - leave blank.
                                    </li>
                                </ul>
                            </ListGroupItem>
                        </ListGroup>
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem eventKey={6}>
                    <AccordionHeader>
                        <h5>
                            AMDSB-GUEST Wi-Fi
                        </h5>
                    </AccordionHeader>
                    <AccordionBody>
                        <ListGroup as="ol" numbered>
                            <ListGroupItem>
                                After connecting to <span className="text-primary">AMDSB-GUEST</span> Wi-Fi you will be prompted to enter a sponsor email.
                                <br />
                                Any sponsor email ending in @ed.amdsb.ca and your email address (AMDSB or Personal email accepted)
                                <img class="d-block"
                                    src="/ithelp/wireless/AMDSB_GUEST/1.png"
                                    alt="image wireless logo" />
                            </ListGroupItem>
                            <ListGroupItem>
                                Next the Sponsor will receive an email and be asked to accept your wi-fi access request (below screenshot).
                                <br />
                                The Sponsor will need to <span className="text-primary">click here</span> to allow access.
                                <img class="d-block"
                                    src="/ithelp/wireless/AMDSB_GUEST/2.png"
                                    alt="image of wireless modal on chromebook" />
                            </ListGroupItem>
                            <ListGroupItem>
                                As soon as the Sponsor allows access the <span style={{ color: "orange" }}>Orange Login button</span> at the bottom will become enabled so you can click on this button.
                                <img class="d-block"
                                    src="/ithelp/wireless/AMDSB_GUEST/3.png"
                                    alt="image of network's available" />
                            </ListGroupItem>
                        </ListGroup>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>

        </>
    );
}