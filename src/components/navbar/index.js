import { menuData } from '../data/MenuData';
import { Button } from '../Button';
import React from 'react';
import { NavLink,NavMenu,NavBtn,NavMenuLinks,MenuBars,Nav,Logo } from './navbarelements';
import { Link } from 'react-router-dom';
import ResumeForm from '../../ResumeForm';

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to = '/'>SUCHE</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu >
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index} target='_blank'>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                {/* <Link to='/ResumeForm' target='_blank'>Apply</Link> */}
                <Button to ="/Form" target='_blank' primary='true'>Resume</Button>
            </NavBtn>
            
        </Nav>
    )
}

export default Navbar
