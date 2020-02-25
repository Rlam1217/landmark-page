import React from 'react';
import styled from 'styled-components';
import Render from '../imgs/render.jpg';
import LandmarkWhite from '../imgs/landmark-white.svg';


const LandmarkContainer = styled.section`
    width: 100%;
    margin: 0 auto;
    background-color: #000026;
`;

const RenderImageWrapper = styled.div`
    max-width: 650px;
`;

const Content = styled.div`
    max-width: 767px;
    width: 100%;
    padding: 70px 25px 70px 25px;
    background-color: #000026;
`;

const H1 = styled.h1`
    font-size: 1.4rem;
    color: #fff;
    letter-spacing: 4.69px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 10px;
`;

const LandmarkTitleWrapper = styled.div`
    text-align: center;
    margin-bottom: 30px;
    img {
        margin: 0 auto;
    }
`;

const Link = styled.div`
    margin: 0 auto;
    text-align: center;
    color: #ceaf70;
    text-transform: uppercase;
    letter-spacing: 2.29px;

`;


function LandmarkContent () {
    return (
        <LandmarkContainer>
            <RenderImageWrapper>
                <img src={Render} alt="Landmark On Robson Complex"/>
            </RenderImageWrapper>
            <Content>
                <H1>This Is</H1>
                <LandmarkTitleWrapper>
                    <img src={LandmarkWhite} alt="Landmark On Robson"/>
                </LandmarkTitleWrapper>
                <Link>Watch The Film</Link>
            </Content>   
        </LandmarkContainer>

    )
}



export default LandmarkContent