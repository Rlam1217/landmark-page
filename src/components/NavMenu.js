import React from "react";
import AsiaStandard from '../imgs/asia-standard.png';
import Magnum from './images/magnum.png';
import styled from 'styled-components';


const MenuMain = styled.div`

    background: linear-gradient(180deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 1%,rgba(0,0,0,.5) 61%,transparent);
    list-style-type: none;
    width: 100%;
    height: 100vh;
    padding: 70px 0px 0px 20px;
    opacity: 1;
    font-size: 1.2rem;
    transition: .3s ease;
    line-height: 2.2rem;
    position: absolute;
    top: 0;
    transition: visibility 0s linear 300ms, opacity 300ms;
    p {
        width: 300px;
    }
    a {
        color: #fff;
        text-decoration: none;
    }
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
                            <a href="/" className="menu-link">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/" className="menu-link">
                                <p className="menu-item">Only One Robson</p>
                            </a>
                        </li>
                        <li rel="three" className="menu-item">
                            <a href="/" className="menu-link">
                                270° Views
                            </a>
                        </li>
                        <li rel="four" className="menu-item">
                            <a href="/" className="menu-link">
                                Refined Residences
                            </a>
                        </li>
                        <li rel="five" className="menu-item">
                            <a href="/" className="menu-link">
                                Club Robson, Lifestyle Concierge Services
                            </a>
                        </li>
                        <li rel="six" className="menu-item">
                            <a href="/" className="menu-link">
                                Award-Winning Team
                            </a>
                        </li>
                        <li rel="seven" className="menu-item">
                            <a href="/" className="menu-link">
                                Media
                            </a>
                        </li>
                        <li rel="eight" className="menu-item">
                            <a href="/" className="menu-link">
                                Register
                            </a>
                        </li>
                        <li rel="nine" className="menu-item">
                            <a href="/" className="menu-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="menu-bottom">
                        <div className="address">
                            <p>1400 Robson St. Vancouver, BC</p>
                            <p>604 566 2288 | info@landmarkrobson.com</p>
                        </div>
                        <div className="asia-image-container">  
                            <img src={AsiaStandard} alt=""/>
                        </div>
                        <div className="magnum-image-container">    
                            <img src={Magnum} alt=""/>
                        </div>    
                    </div>
                </MenuMain>
            </nav>    
        )
    }
}

export default NavMenu