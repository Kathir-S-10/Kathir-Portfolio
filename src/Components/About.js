import '../Styles/About.css';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import html from '../Images/html.png';
import css from '../Images/css.png';
import js from '../Images/javascript.png';
import react from '../Images/react.png';
import photoshop from '../Images/photoshop.png';

const About = () => {
    return (
        <Container fluid="md" className='about-border'>
            <Row>
                <Col md={6} sm={12} className='column1'>
                    <center>
                    <p id='about-title'>ABOUT</p>
                    <p className='about-desc'>Hi! I’m Kathir S, a dedicated frontend developer with a passion
                        for creating interactive and user-friendly web experiences.
                        I specialize in HTML, CSS, and JavaScript, and
                        I love turning ideas into beautiful, functional websites.
                        Explore my portfolio to see my work, and let’s connect!</p>
                    </center>
                </Col>
                <Col className='column2'>
              <center>
              <p className='skills-title'>SKILLS</p>
              </center>
                <Row>
                    <Col><img src={html} className='skill-img'></img></Col>
                    <Col><img src={css} className='skill-img'></img></Col>
                    <Col><img src={js} className='skill-img'></img></Col>
                <Col><img src={react} className='skill-img'></img></Col>
                <Col><img src={photoshop} className='skill-img'></img></Col>
                </Row>
                </Col>
            </Row>

        </Container>
    )
}


export default About