import React from 'react';
import styled, { keyframes } from 'styled-components';
import Arrow from '../imgs/arrow.png';
import NavBar from './NavBar';
import NavMenu from './NavMenu';
import BannerLogo from  '../imgs/banner.jpg';
import background2 from  '../imgs/background2.jpg';
import background3 from  '../imgs/background3.jpg';
import background4 from  '../imgs/background4.jpg';
import background5 from  '../imgs/background5.jpg';
import background6 from  '../imgs/background2.jpg';
import background7 from  '../imgs/background7.jpg';
import background8 from  '../imgs/background8.jpg';
import background9 from  '../imgs/background9.jpg';





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
    @media (min-width: 768px) {
        font-size: 4rem;  
    }
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
    0% {top: 72vh;}
    100% {top: 77vh; opacity: 1;}
`;

const ScrollDownArrow = styled.div`
    position: absolute;
    bottom: 100px;
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
          showMenu: false,
          src: ""
        };
        this.toggleClass = this.toggleClass.bind(this);
        this.onGo = this.onGo.bind(this);
      }

      componentDidMount(){
        this.setState({src: BannerLogo})
      }

      toggleClass() {
        this.setState({ showMenu: !this.state.showMenu , src: BannerLogo });
      }

      onGo = (img) => {
        if(img === "Home")
        {  
            this.setState({src: BannerLogo})
        }
        if(img === "Only One Robson")
        {  
            this.setState({src: background2})
        }
         if(img === "270° Views")
        {  
            this.setState({src: background3})
        }
        if(img === "Refined Residences")
        {  
            this.setState({src: background4})
        }
        if(img === "Club Robson, Lifestyle Concierge Services")
        {  
            this.setState({src: background5})
        }
        if(img === "Award-Winning Team")
        {  
            this.setState({src: background6})
        }
        if(img === "Media")
        {  
            this.setState({src: background7})
        }
        if(img === "Register")
        {  
            this.setState({src: background8})
        }
        if(img === "Contact")
        {  
            this.setState({src: background9})
        }
      }

    render() {
        return (
            <section className="banner">
                {/*<Background></Background>*/}
                <img src={this.state.src} className="background" alt="background"/>
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
                    <NavMenu onGo={this.onGo}/>
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