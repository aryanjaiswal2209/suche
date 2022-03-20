import React,{useState} from 'react';
import { Button } from '../Button';
import Navbar from '../navbar';
import SideBar from '../SideBar';
import {HeroContainer,HeroContent,HeroItems,HeroH1,HeroP,HeroBtn} from './Heroelements';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>We Understand Your Need</HeroH1>
                    <HeroP></HeroP>
                    <Button primary='true'>Apply</Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
