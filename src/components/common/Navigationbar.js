import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

const Navigtionbar = (props) => {
    const location = useLocation().pathname;

    /*const NavLinks = [{
        path : '/',
        component : AboutPage
    },
    {
        path : '/',
        component : AboutPage
    }
    {
        path : '/',
        component : AboutPage
    }]*/

    return (
        <nav>
            <Link className = {location === '/' ? 'activePage' : ''} to="/">Home</Link>
            <Link className = {location === '/about' ? 'activePage' : ''} to="/about">Technical Background</Link>
            <Link className = {location === '/projects' ? 'activePage' : ''} to="/projects">Projects</Link>
            <Link className = {location === '/blogs' ? 'activePage' : ''} to="/blogs">Blogs</Link>
            <Link className = {location === '/contact' ? 'activePage' : ''} to="/contact">Contact</Link>
            <div className='expandCollapseButton' onClick={() => props.toggleNavbar(!props.navbarStatus)}>
                <FontAwesomeIcon icon={faChevronCircleDown} />
            </div>
        </nav>
    );
}

export default Navigtionbar;
