import React from 'react';
import styled, { keyframes } from 'styled-components';
import Arrow from '../imgs/arrow.png';
import NavBar from './NavBar';
import NavMenu from './NavMenu';



const Background = styled.div`
    background-image: url(${require("../imgs/banner.jpg")});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
`;

const BannerText = styled.div`
    font-size: 1.4rem;
    padding-left: 20px;
    position: absolute;
    top: 50vh;
    color: #fff;
    text-shadow: 2px 2px 4px hsla(0,0%,39%,.8);
`;

const left = keyframes`
    0% {left: 50px; opacity: 0;}
    100% {left: 0px;}
`;

const H1 = styled.h1`
    position: relative;
    animation: ${left};
    transition-timing-function: ease-in;
    animation-delay: .3s;
    animation-duration: 1s;
    animation-fill-mode: forwards;                
`;

const leftSub = keyframes`
    0% {left: 50px; opacity: 0;}
    100% {left: 0px;}
`;

const Span = styled.span`
    text-transform: uppercase;
    font-size: 3rem;
    position: relative;
    animation-name: ${leftSub};
    transition-timing-function: ease-in;
    animation-delay: .5s;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
`;

const leftLine = keyframes`
    0% {width: 0px; opacity: 0;}
    100% {width: 40px; opacity: 1; }
`;

const Hr = styled.hr`
    border-top: 1px solid white;
    border-left: 0px;
    margin-top: 20px;
    margin-left: 0px;
    width: 40px;
    position: relative;
    left: 5px;
    animation-name: ${leftLine};
    transition-timing-function: ease-in;
    animation-delay: 1.3s;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    opacity: 0;
`;

const scrollDown = keyframes`
    0% {left: 70px; opacity: 0;}
    100% {left: 0px; opacity: 1; }
`;

const ScrollDown = styled.div`
    font-size: .8rem;
    text-transform: uppercase;
    position: absolute;
    top: 77vh;
    padding-left: 20px;
    animation-name: ${scrollDown};
    transition-timing-function: ease-in;
    animation-delay: 1.3s;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    opacity: 0;
    a {
        color: white;
        text-decoration: none;
        }
`;

const scrollDownArrow = keyframes`
    0% {left: 70px; opacity: 0;}
    100% {left: 0px; opacity: 1; }
`;

const ScrollDownArrow = styled.div`
    position: absolute;
    padding-left: 20px;
    opacity: 0;
    padding-left: 20px;
    animation-name: ${scrollDownArrow};
    transition-timing-function: ease-in;
    animation-delay: 1.3s;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    img {
            width: 29px;
            padding-top: 35px;
        }
`;

class Banner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          showMenu: false
        };
        this.toggleClass = this.toggleClass.bind(this);
      }

      toggleClass() {
        this.setState({ showMenu: !this.state.showMenu });
      }

    render() {
        return (
            <section className="banner">
                <Background></Background>
                {
                    this.state.showMenu === false
                    ?
                    <React.Fragment>
                        <BannerText>
                            <H1 className={this.state.showMenu ? "menu-btn close" : "menu-btn"}>Transforming Vancouver's</H1>
                            <Span className="banner-subtitle">Skyline</Span>
                            <Hr className="scroll-line"></Hr>
                        </BannerText>
                        <ScrollDown className="scroll-down-text"><a href="#landmark">Scroll Down</a></ScrollDown>
                        <ScrollDownArrow className="scroll-down-arrow"><img src={Arrow} alt="arrow" /></ScrollDownArrow>
                    </React.Fragment>
                    :
                    <NavMenu/>
                        
                }
                <NavBar
                    toggle={this.toggleClass}
                    showMenu={this.state.showMenu}
                    />
            </section>
        )
    }
}



export default Banner