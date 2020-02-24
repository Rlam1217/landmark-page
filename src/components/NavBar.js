import React from 'react';
import Landmark from '../imgs/landmark.svg';
import styled from 'styled-components';

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

const MenuBtn = styled.div`
    order: 3;
`;

const BtnLine = styled.div`
    width: 28px;
    height: 1px;
    margin: 0 0 5px 0;
    background: #fff;
`;

const Language = styled.ul`
    color: #fff;
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    align-items: flex-end;
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
                <div className="landmark-logo">
                <img src={Landmark} alt="" />
                </div>
                <div className="vl"></div>        
                {
                    this.props.showMenu === false
                    ?
                    <div className={this.props.showMenu ? "menu-btn close" : "menu-btn"} onClick={this.props.toggle}>  
                        <MenuBtn>
                            <BtnLine></BtnLine>
                            <BtnLine></BtnLine>
                            <BtnLine></BtnLine>
                        </MenuBtn>
                    </div>
                    :
                    <div onClick={this.props.toggle}>
                        X
                    </div>
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