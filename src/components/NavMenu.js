import React from "react";
import AsiaStandard from '../imgs/asia-standard.png';
import Magnum from '../imgs/magnum.png';
import styled, { keyframes } from 'styled-components';




const MenuMainOpen = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1; }
`;
const MenuMain = styled.div`
    background: linear-gradient(180deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 1%,rgba(0,0,0,.5) 61%,transparent);
    list-style-type: none;
    width: 100%;
    height: 100vh;
    padding: 70px 0px 0px 20px;
    font-size: 1.5rem;
    line-height: 3rem;
    text-decoration: none;
    color: #989898ff;
    font-weight: 100;
    position: absolute;
    top: 0;
    transition-timing-function: ease-in;
    animation: ${MenuMainOpen} .5s forwards;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    ul {
        margin-top: 50px;
    }
    p {
        width: 300px;
    }
    a {
        color: #989898ff;
        text-decoration: none;
        position:relative;
    }
    a:after {
        content:"";
        position: absolute;
        bottom: 0px;
        left: 0px;
        background: #fff;
        width: 0px;
        height: 1px;
        transition: 0.5s linear;
    }

    a:hover::after {
        width: 100%;
    }
`;

const MenuBottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 20px 0 0;
    img {
        width: 90px;
    }
    @media (min-width: 768px) {
    padding-top: 90px;       
    }
`;

const MenuBottomContact = styled.div`
    text-transform: uppercase;
    color: #ceaf70;
    font-size: .7rem;
    line-height: 1rem;
    width: 400px;
`;

const MenuBottomImageWrapper = styled.div`
    width: 90px;
`;

class NavMenu extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
          showMenu: false
        };
      }
    render(){
        return (
            <nav className="menu">
                <MenuMain className="menu-main">
                    <ul>
                        <li rel="one" className="menu-item">
                            <a href="/" className="menu-link" onMouseOver={() => this.props.onGo("Home")}>
                                Home
                            </a>
                        </li>
                        <li rel="one" className="menu-item">
                            <a href="/" className="menu-link" onMouseOver={() => this.props.onGo("Only One Robson")}>
                                Only One Robson
                            </a>
                        </li>
                        <li rel="three" className="menu-item">
                            <a href="/" className="menu-link" onMouseOver={() => this.props.onGo("270° Views")}>
                                270° Views
                            </a>
                        </li>
                        <li rel="four" className="menu-item">
                            <a href="/" className="menu-link" onMouseOver={() => this.props.onGo("Refined Residences")}>
                                Refined Residences
                            </a>
                        </li>
                        <li rel="five" className="menu-item">
                            <a href="/" className="menu-link" onMouseOver={() => this.props.onGo("Club Robson, Lifestyle Concierge Services")}>
                                Club Robson, Lifestyle Concierge Services
                            </a>
                        </li>
                        <li rel="six" className="menu-item">
                            <a href="/" className="menu-link" onMouseOver={() => this.props.onGo("Award-Winning Team")}>
                                Award-Winning Team
                            </a>
                        </li>
                        <li rel="seven" className="menu-item">
                            <a href="/" className="menu-link" onMouseOver={() => this.props.onGo("Media")}>
                                Media
                            </a>
                        </li>
                        <li rel="eight" className="menu-item">
                            <a href="/" className="menu-link" onMouseOver={() => this.props.onGo("Register")}>
                                Register
                            </a>
                        </li>
                        <li rel="nine" className="menu-item">
                            <a href="/" className="menu-link" onMouseOver={() => this.props.onGo("Contact")}>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <MenuBottom>
                        <MenuBottomContact>
                            <p>1400 Robson St. Vancouver, BC</p>
                            <p>604 566 2288 | info@landmarkrobson.com</p>
                        </MenuBottomContact>
                        <MenuBottomImageWrapper>  
                            <img src={AsiaStandard} alt="Asian Standard"/>
                        </MenuBottomImageWrapper>
                        <MenuBottomImageWrapper>    
                            <img src={Magnum} alt="Magnum"/>
                        </MenuBottomImageWrapper>    
                    </MenuBottom>
                </MenuMain>
            </nav>    
        )
    }
}

export default NavMenu