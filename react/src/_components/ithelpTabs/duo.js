import Link from "next/link";
import { Accordion, AccordionBody, AccordionItem, AccordionHeader, ListGroup, ListGroupItem, Badge } from "react-bootstrap";

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

            <h6>NOTE: If you have requested a hardware token, please ignore these steps.</h6>

            <p>{"If your cell phone does not support Duo Mobile, please submit a TOPDesk ticket under “Submit a Ticket > MFA > Cannot Use Duo Mobile App” and ignore the enrollment email."}</p>


            <Accordion>
                <AccordionItem eventKey={0}>
                    <AccordionHeader className="aHeader">
                        <h5>First Time Set Up</h5>
                    </AccordionHeader>
                    <AccordionBody className="bg-body-secondary">
                        <ListGroup as="ol" numbered>
                            <ListGroupItem>
                            Download the Duo app on your mobile device. It can be found in your device's app store titled “Duo Mobile”.
                            </ListGroupItem>
                                <ListGroupItem>
                                <strong>On a computer outside of AMDSB’s network</strong> login to an AMDSB site like <Link href="https://amdsb.elearningontario.ca/d2l/home">The Core</Link>. It will prompt you to start setting up Duo
                                    <br/>
                                    <img class="w-50"
                                    src="/ithelp/hdi/images/android_wifi_settings2.png"
                                    alt="contuation of android wifi settings 2"/>
                                </ListGroupItem>
                                
                                    <ListGroupItem>
                                        Tap Wi-Fi
                                        <br/>
                                        <img class="w-50"
                                        src="/ithelp/hdi/images/android_wifi_settings3.png"
                                        alt="contuation of android wifi settings 3"/>
                                    </ListGroupItem>
                                    
                                        <ListGroupItem>
                                            Tap the settings gear icon
                                            <br/>
                                            <img class="w-50 pt-3"
                                            src="/ithelp/hdi/images/android_wifi_settings4.png"
                                            alt="contuation of android wifi settings 4"/>
                                            </ListGroupItem>
                                        
                                            <ListGroupItem>
                                                Tap "Phone MAC"
                                                <br/>
                                                <img class="w-50 pt-3"
                                                src="/ithelp/hdi/images/android_wifi_settings5.png"
                                                alt="contuation of android wifi settings 5"/>
                                            </ListGroupItem>
                                            


                                            </ListGroup>
                                        </AccordionBody>
                                    </AccordionItem>
                                </Accordion>

                            </>
                            );
}