import '../Styles/MainPage.css';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from '../Images/profile.png';
import { Link } from 'react-router-dom';
import insta from '../Images/instagram.png';
import git from '../Images/github.png';
import linked from '../Images/linkedin.png';

const MainPage = () => {
    return (
        <Container fluid="md" className='mainpage-border'>
            <Row>
                <Col md={6} sm={12} className='col1'>
                    <p className='hello'>HELLO !</p>
                    <p className='intro'>I'm<span>Kathir</span></p>

                    <center><p className='frontend'>FRONTEND DEVELOPER</p></center>
                    <center><p className='intro-desc'> I'm a <b>frontend developer & UI developer</b> specializing in <b>HTML, CSS,
                        JavaScript, and React.js.</b></p></center>
                </Col>
                <Col className='col1'>
                    <center>
                        <img src={profile} className='profile-img'></img>
                        <div className='profiles'>
                            <a href="https://www.instagram.com/kathir__10__/"><img src={insta} className='logo-img'></img></a>
                            <a href='https://github.com/Kathir-S-10'><img src={git} className='logo-img'></img></a>
                            <a href='https://www.linkedin.com/in/kathir-s-19a60825a/'><img src={linked} className='logo-img'></img></a>
                        </div>
                    </center>
                </Col>
            </Row>
        </Container>
    )
}

export default MainPage