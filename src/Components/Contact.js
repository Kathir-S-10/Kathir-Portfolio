import '../Styles/Contact.css';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import insta from '../Images/instagram.png';
import git from '../Images/github.png';
import linked from '../Images/linkedin.png';



const Contact = () => {


    return (
        <Container fluid="md" className='contact-border'>
            <Row>
                <center><Col><p id='contact-title'>CONTACT</p></Col></center>
            </Row>
            <Row>
                <Col><p className='left-col'>droptotkathir@gmail.com</p></Col>
                <Col className='right-col'><a href="mailto:droptokathir@gmail.com" className='send-btn'>SEND MESSAGE</a></Col>
            </Row>
           <center>
           <Row className='logos'>
                <Col><a href='https://drive.google.com/file/d/1Ui4K1KEIlWpZFpyMSSLVQR7gcDAdn5fq/view' className='logos-btn'>RESUME</a></Col>
                <Col><a href='https://www.instagram.com/kathir__10__/'><img src={insta} className='logos-logo'></img></a></Col>
                <Col><a href='https://github.com/Kathir-S-10'><img src={git} className='logos-logo'></img></a></Col>
                <Col><a href='https://www.linkedin.com/in/kathir-s-19a60825a/'><img src={linked} className='logos-logo'></img></a></Col>
            </Row>
           </center>
           

        </Container>
    )
}

export default Contact