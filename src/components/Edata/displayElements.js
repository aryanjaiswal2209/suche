import styled from 'styled-components';


export const Container = styled.div `


align-items:center;
justify-content:center;
background:white;
background-color:white;
color:darkblue;
padding-top:0px;
padding-bottom:30px;


`



export const Wrapper = styled.div `


margin:0 auto;
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr ;
grid-gap:16px;
padding:0 30px;
background:white;


@media screen and (max-width:1000px){

    grid-template-columns:1fr 1fr;
    padding:0 20px;
}

@media screen and (max-width:768px){

grid-template-columns: 1fr;
padding:0 60px;
}
`
export const Card = styled.div `
background:white;
display:flex;
flex-direction:column;
justify-content:flex-start;
/* align-items:center; */
border-radius:10px;
max-height:440px;
padding:10px;
border:1px solid black;
box-shadow:0 1px 3px rgba(0,0,0,0.2);
transition:all 0.2s ease-in-out;
text-decoration:none;
height:250px;
width:350px;
margin-left:20px;
color:black;
&:hover{

    transform:scale(1.02);
    transition:all 0.2s ease-in-out;
    cursor: pointer;
}



`





export const H1 = styled.h1 `
font-size:3.5rem;
color:darkcyan;
margin-bottom:100px;
margin-top:50px;
align-items:center;
justify-content:center;
padding-top:50px;

@media screen and(max-width:480px){

    font-size:2rem;
}
`
export const H2 = styled.h2 `

font-size:1rem;
margin:10px;
`
export const H3 = styled.h2 `

font-size:1rem;
margin:10px;
color:black

`


