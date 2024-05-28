import Link from "next/link";
import { Card, CardBody, Container } from "react-bootstrap";
export default function Footer() {

    const currentDate = new Date().toDateString();

    return (
        <Container className="text-center pt-5" fluid>
        <hr/>
        
                <h5>
                    <Link href="https://www.amdsb.ca/">Avon Maitland District School Board</Link> 
                    <br></br>
                    62 Chalk Street
                    <br></br> 
                    Seaforth Ontario
                    <br></br> 
                    N0K1W0
                    <br></br>
                    519-527-0111 or 1-800-592-5437
                    <br></br>
                    
                </h5>
           
           <hr/>
           <p>© {currentDate.substring(currentDate.length-4)}</p>
          
        </Container>
    );
}