import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SideBarContainer = styled.aside`
 position:fixed;
 z-index:999;
 top:0;
 height:100%;
 width:350px;
 background: #ffc500;
 display:grid;
 align-items:center;
 transition: 0.3s ease-in-out;
 right: ${({isOpen}) => (isOpen ? '0' : '-1000px'  )  };

 @media-screen and (max-width: 400px){
     width: 100%;
 }

`;

export const Icon= styled.div`
 top:1.2rem;
 right:1.5rem;
 position:absolute;
 background:transparent;
 border:transparent;
 font-size:2rem;
 cursor:pointer;
 outline:none;
`;
export const CloseIcon= styled(FaTimes)`
 color: #000;
`;
export const SideBarMenu = styled.div`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(3,80px);
 text-align:center;

 @media-screen and (max-width:400px){
 grid-template-rows: repeat(3,60px);
  
 }
`;
export const SideBarLink = styled(Link)`
 display:flex;
 align-items:center;
 justify-content:center;
 font-size:1.5rem;
 text-decoration:none;
 list-style:none;
 transition: 0.2s ease-in-out;
 color: #000;
 cursor:pointer;

    &:hover{
      color: #e31837;
      transition: 0.2s ease-in-out;

    }
`;
export const SideBtnWrap = styled.div`
 display:flex;
 justify-content:center;
`;
export const SideBarRoute = styled(Link) `
 background:#e31837;
 padding: 16px 64px;
 white-space:nowrap;
 color:#fff;
 font-size:16px;
 outline:none;
 border:none;
 cursor:pointer;
 transition:0.2s ease-in-out;
 text-decoration:none;

   &:hover{
      transition:0.2s ease-in-out;
      color:#010606;
      background:#fff;
           
   }
`;
