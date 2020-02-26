import React from "react";
import styled from 'styled-components';
import Residences from '../imgs/residences.jpg';

const ContentDiscover = styled.section`
    position: relative;
    background-color: #000026;
    width: 100%;
`;

const RenderImageWrapper = styled.div`
    display: block;
    width: 100%;
    @media (min-width: 1024px) {
        img {
        max-width: 750px;
        }
        display: flex;
    }
`;

const ContentWrapper = styled.div`
    position: absolute;
    top: 40%;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    @media (min-width: 1024px) {
        position: relative;
        margin: auto;
       }
  
`;

const H2 = styled.h2`
    font-size: 2rem;
    text-align: center;
    letter-spacing: .9px;
    color: white;
    &::before {
    content: "Refined";
    display: block;
    font-size: 1rem;
    color: #ceaf70;
    letter-spacing: 4.69px;
    text-transform: uppercase;
    text-align: center;
  }
  @media (min-width: 1024px) {
        font-size: 3.7rem;   
  }
`;

const Button = styled.button`
    background: transparent;
    border-color: #ceaf70;
    border-width: thin;
    padding: 15px 30px 15px 30px;  
    color: #ceaf70;
`;

function ContentCard () {
    return (
    <ContentDiscover>
        <RenderImageWrapper>
            <img src={Residences} alt="Landmark On Robson Residences"/>
            <ContentWrapper>
                <H2>Residences</H2>
                <Button>Discover the Residences</Button>
            </ContentWrapper>  
        </RenderImageWrapper>
    </ContentDiscover>

    )
}

export default ContentCard