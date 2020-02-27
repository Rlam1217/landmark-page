import React from 'react';
import Landmark from '../imgs/landmark.svg';
import styled, { keyframes } from 'styled-components';

const Nav = styled.section`
    z-index: 1;
    position: fixed;
    top: 0;
    transition: top 1.1s;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 20px 0 20px;
    height: 90px;
    background: linear-gradient(180deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 1%,rgba(0,0,0,.5) 61%,transparent);
`;

const LandmarkLogo = styled.div`
    flex-grow: 1;
    @media (min-width: 768px) {
        img {
               max-width: 160px;
            }
       }  
`;

const MenuBtn = styled.div`
   @media (min-width: 768px) {
    order: 3;        
    }
`;

const BtnLine = styled.div`
    width: 28px;
    height: 1px;
    margin: 0 0 5px 0;
    background: #fff;
`;


const BtnLineTopClosed = keyframes`
    0% {transform: translateY(0px);}
    50% {transform: translateY(6px);}
    100% {transform-origin: 30% 40%; transform: rotate(45deg);}
`;


const BtnLineTop = styled.div`
    width: 28px;
    height: 1px;
    margin: 0 0 5px 0;
    background: #fff;
    transition: transform .3s ease-in-out;
    animation: ${BtnLineTopClosed} 1s forwards;
`;

const BtnLineMiddle = styled.div`
    opacity: 0;
`;

const BtnLineBottomClosed = keyframes`
    0% {transform: translateY(0px);}
    50% {transform: translateY(-6px);}
    100% {transform-origin: 30% 40%; transform: rotate(-45deg);}
`;

const BtnLineBottom = styled.div`
    width: 28px;
    height: 1px;
    margin: 0 0 5px 0;
    background: #fff;
    transition: transform .3s ease-in-out;
    animation: ${BtnLineBottomClosed} 1s forwards;
`;

const Language = styled.ul`
    color: #fff;
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    align-items: flex-end;
    
    @media (min-width: 768px) {
        align-items: flex-start;
        flex-basis: 10%;
        flex-direction: row;    
    }
`;




class NavBar extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
          showMenu: false
        };
      }

    render() {
        return (
            <Nav>
                <LandmarkLogo>
                <img src={Landmark} alt="Landmark" />
                </LandmarkLogo>
                <div className="vl"></div>        
                {
                    this.props.showMenu === false
                    ?
                    <MenuBtn>
                    <div className={this.props.showMenu ? "menu-btn close" : "menu-btn"} onClick={this.props.toggle}>  
                        <BtnLine></BtnLine>
                        <BtnLine></BtnLine>
                        <BtnLine></BtnLine>
                    </div>
                    </MenuBtn>
                    :
                    <MenuBtn>
                        <div onClick={this.props.toggle}>
                            <BtnLineTop></BtnLineTop>
                            <BtnLineMiddle></BtnLineMiddle>
                            <BtnLineBottom></BtnLineBottom>
                        </div>
                    </MenuBtn>
                    
                }
                <Language>
                    <li>EN</li>
                    <li className="register">REGESTER</li>
                </Language>
            </Nav>
        )
    }
  }



export default NavBar