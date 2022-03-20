
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

export const FooterContainer = styled.div`
 padding: 5rem calc((100vw-1100px)/2);
 color: #000;
 background: #fafafb;
 display: grid;
 grid-template-columns: repeat(2, 1fr);
`
export const FooterLinksWrapper = styled.div`
 display: grid;
 grid-template-columns: repeat(2, 1fr);

 @media screen and (max-width:820px){
     grid-template-columns: 1fr;
 }
`
export const FooterDesc = styled.div`
 padding: 0 2rem;

 h1 {
     margin-bottom: 3rem;
     color: #f26a2e;
 }

 @media screen and (max-width: 400px){
     padding: 1rem;
 }
`
export const FooterLink = styled(NavLink)`
 text-decoration :none ;
 margin-bottom: 0.5rem;
 color: #3d3d4e;
 font-size: 14px;

 &:hover{
     color: #f26a2e;
     transition: 0.3s ease-out ;
 }
`
export const FooterLinkItems = styled.div`
 padding: 1rem 2rem;
 display: flex;
 flex-direction: column;
 align-items: flex-start;

 @media screen and (max-width:400px){
     padding: 1rem;
 }
`
export const FooterLinkTitle = styled.h2`
font-size : 14px;
margin-bottom: 16px;
`