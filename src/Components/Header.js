import '../Styles/Header.css';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';



const Header = () => {



    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000)
    }, [])

    return (
        <>
            <Container fluid className='header-box'>
                <Row>
                    {/* col 1 */}
                    <Col className='mt-3 names'>KATHIR</Col>

                    {/* col 2 */}
                    <Col xs="auto" className='mt-2 btns'>
                        <a href='#project-title' className='btn'>PROJECTS</a>
                        <a href='#about-title' className='btn'>ABOUT</a>
                        <a href='#contact-title' className='btn'>CONTACT</a>

                    </Col>

                    {/* col 3 */}
                    <Col className='mt-3 time'>
                        <p>{time.toLocaleTimeString()}</p>
                    </Col>
                </Row>
            </Container></>
    )
}

export default Header