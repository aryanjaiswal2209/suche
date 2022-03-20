import React from "react";
import { Button } from "./components/Button";
import styled from "styled-components";

const Openings = ({data}) => {
  return (
    <OpeningsContainer>
      <OpeningsHeading>Live Openings</OpeningsHeading>
      <OpeningsWrapper>
        {data.map((openings,index) => {
                    return(
                        <OpeningsCard key={index}>
                            {/* <ProductImage src={opening.img} alt={product.alt} /> */}
                            <OpeningsInfo>
                                <OpeningsTitle>{openings.name}</OpeningsTitle>
                                <OpeningsDesc>{openings.desc}</OpeningsDesc>
                                {/* <ProductPrice>{product.price}</ProductPrice> */}
                                <Button primary='true'  >{openings.button}</Button>
                            </OpeningsInfo>
                        </OpeningsCard>
                    )
                } ) }
      </OpeningsWrapper>
    </OpeningsContainer>
  );
};






const OpeningsContainer = styled.div`
 width:100vw;
 min-height:100vh;
 
 padding: 0rem calc((100vw-1300px)/2);
 background: yellowgreen;
 color:#fff;
 background-size: cover ;

`;

const OpeningsWrapper = styled.div`
 display:flex; 
 flex-direction: column ;
 justify-content: start;
 align-items: flex-start ;
 margin: 0 auto;
 justify-content:center;
`;

const OpeningsCard = styled.div`
 margin: 1rem 2rem;
 padding: 2rem 5rem;
 width:950px;
 border: 5px solid green;

`;



const OpeningsHeading = styled.h1`
 text-align:center;
 padding-top: 3rem;
 font-size: clamp(2 rem, 2.5vw, 3 rem);
 margin: 5 rem;
`;

const OpeningsTitle = styled.h2`
 font-weight:400;
 font-size:1.5rem;
 justify-content: start ;
 align-items: flex-start;
`;

const OpeningsInfo = styled.div`
 /* display: flex; */
 flex: 1 ;
 /* flex-direction: ; */
 justify-content: center;
 align-items: center;
 padding: 2 rem;
 text-align: center;
`;

const OpeningsDesc = styled.p`
 margin-bottom:  1 rem;
`;

export default Openings;

