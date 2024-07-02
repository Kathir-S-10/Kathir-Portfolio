import '../Styles/Projects.css';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rest from '../Images/rest.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import net from '../Images/net.png';
import cafe from '../Images/cafe.png';



const Projects = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <Container fluid="md" className='project-border'>
            <center><p id='project-title' >PROJECTS</p></center>
            <Row>
                <Col>
                    <center><p data-aos="fade-right" className='rest-name'>Restaurant Webpage</p></center>
                    <center><a href='https://github.com/Kathir-S-10/Restarant'><img data-aos="fade-right" src={rest} className='rest-img'></img></a></center>
                </Col>
                <Col>
                    <center><p data-aos="fade-up" className='rest-name'>Netflix-Clone</p></center>
                    <center><a href='https://github.com/Kathir-S-10/Netflix_Clone'><img data-aos="fade-up" src={net} className='rest-img'></img></a></center>
                </Col>
            </Row>
            <br></br>
            <Row>
                <center><p data-aos="fade-right" className='rest-name'>Cafe Webpage</p></center>
                <center><a href='https://kathir-s-10.github.io/cafe-websites/'><img data-aos="fade-right" src={cafe} className='rest-img'></img></a></center>
            </Row>
        </Container>
    )
}

export default Projects