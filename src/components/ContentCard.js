import React from "react";
import styled from 'styled-components';
import Residences from '../imgs/residences.jpg';

const ContentDiscover = styled.section`
    position: relative;
    background-color: #000026;
    max-width: 767px;
    width: 100%;
    margin: 0 auto;
`;

const RenderImageWrapper = styled.div`
    display: block;
    width: 100%;
    margin: 0 auto;
`;

const ContentWrapper = styled.div`
    position: absolute;
    top: 40%;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
`;

const H2 = styled.h2`
    font-size: 2rem;
    text-align: center;
    letter-spacing: .9px;
    color: white;
    &:before {
    content: "Refined";
    display: block;
    font-size: 1rem;
    color: #ceaf70;
    letter-spacing: 4.69px;
    text-transform: uppercase;
    text-align: center;
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
                <H2 class="title">Residences</H2>
                <Button>Discover the Residences</Button>
            </ContentWrapper>  
        </RenderImageWrapper>
    </ContentDiscover>

    )
}

export default ContentCard