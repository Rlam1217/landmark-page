import React from "react";
import styled from 'styled-components';


const ContentDiscover = styled.section`
    position: relative;
    background-color: #000026;
    width: 100%;
    margin-top: 70px;
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

const H1 = styled.h1`
    font-size: 1rem;
    letter-spacing: 4.69px;
    text-transform: uppercase;
    text-align: center;
    color: white;
    margin-bottom: 10px;
    @media (min-width: 1024px) {
        font-size: 1rem;   
  }
`;


const Title = styled.span`
    font-size: 2rem;
    text-align: center;
    letter-spacing: .9px;
    color: white;
    line-height: 50px;
    @media (min-width: 1024px) {
        font-size: 3.7rem;  
        line-height: 90px;
  }
`;

const Button = styled.button`
    background: transparent;
    border-color: #ceaf70;
    border-width: thin;
    padding: 15px 30px 15px 30px;  
    color: #ceaf70;
    text-transform: uppercase;
    letter-spacing: .9px;
    @media (min-width: 1024px) {
        border: none;
        font-size: .7rem;  
  }
`;

function ContentCard (props) {
    console.log(props)
    return (
    <ContentDiscover>
        <RenderImageWrapper>
            <img src={props.image} alt="Landmark On Robson Residences"/>
            <ContentWrapper>
                <H1 className="subtitle">{props.subtitle} <br/>
                <Title className="title">{props.title}</Title></H1>
                <Button>{props.button}</Button>
            </ContentWrapper>  
        </RenderImageWrapper>
    </ContentDiscover>

    )
}

export default ContentCard