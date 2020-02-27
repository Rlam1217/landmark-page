import React from 'react';
import styled from 'styled-components';

const QuoteSectionContainer = styled.section`
    width: 100%;
    height: 450px;
    margin: 0 auto;
    background-color: #000026;
    color: white;
    font-size: 7rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const H1 = styled.h1`
    font-size: 2rem;
    color: #ceaf70;
    flex-basis: 100%;
    text-align: center;
`;

const Lwrapper = styled.div`

`;

const Iwrapper = styled.div`

`;

const Fwrapper = styled.div`

`;

const Ewrapper = styled.div`

`;





function QuoteSection () {
    return (
        <QuoteSectionContainer className="quote-container">
            <H1>A Landmark</H1>
            <Lwrapper className="l">L</Lwrapper>
            <Iwrapper className="i">I</Iwrapper>
            <Fwrapper className="f">F</Fwrapper>
            <Ewrapper className="e">E</Ewrapper>
        </QuoteSectionContainer>
    )
}







export default QuoteSection