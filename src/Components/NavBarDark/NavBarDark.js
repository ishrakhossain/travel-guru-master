import { FormControl } from '@material-ui/core';
import React from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.png';
import './NavBarDark.css'

const NavBarDark = () => {
    return (
        <div className="header-nav" >

            <Navbar className="navbar" bg="transparent" expand="lg">
                        <Navbar.Brand href="/home"><img className="travel-logo" src={Logo} alt="travel-logo"></img></Navbar.Brand>
                        <Form inline>
                                <FormControl style={{color: 'white'}} type="text" placeholder="Search Your Destination" className="mr-sm-2" />
                                <Button style={{color: 'white', backgroundColor: 'transparent', border: '1px solid grey'}}>Search Your Destination</Button>
                            </Form>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                           
                            <Nav className="mr-auto title">
                            
                                
                            </Nav>
                            <Nav.Link style={{color: 'white'}} href="#home">News</Nav.Link>
                                <Nav.Link style={{color: 'white'}}href="#link">Destination</Nav.Link>
                                <Nav.Link style={{color: 'white'}}href="#link">Blog</Nav.Link>
                                <Nav.Link style={{color: 'white'}} href="#link">Contact</Nav.Link>
                            <Link to="/login"><Button style={{fontFamily:'Montserrat',fontWeight:'bold',border: '1px solid grey',color:'black',backgroundColor: '#F9A51A',width: '104px',height: '44px',borderRadius: '5px',padding: '12px 29px'}}>Login</Button></Link>
                            
                            
                        </Navbar.Collapse>
                    </Navbar>
            
        </div>
    );
};

export default NavBarDark;