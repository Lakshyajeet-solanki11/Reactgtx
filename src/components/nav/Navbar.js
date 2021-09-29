import React, { Component } from "react";
import styled from "styled-components";
import { Colors } from "../../utils/Colors";
import LogoImg from "../../images/logo-img-min.png";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>
          <NavContainer>
            <Logo href="#">
              <img src={LogoImg} alt="" />
            </Logo>
            <Nav>
              <Navlinks href="#">Create Ads</Navlinks>
              <Navlinks href="#">About Us</Navlinks>
              <Navlinks href="#">Log in</Navlinks>
              <Navlinks href="#" className="registerBtn">
                Register
              </Navlinks>
            </Nav>
          </NavContainer>
        </Header>
      </React.Fragment>
    );
  }
}
const NavContainer = styled.div`
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
`;
const Header = styled.header`
  background: ${Colors.blueBG};
  color: ${Colors.white};
`;

const Logo = styled.a`
  width: 50px;
  img {
    width: 50px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
`;

const Navlinks = styled.a`
  padding: 0 1rem;
  font-size: 1.5rem;

  &.registerBtn {
    background: ${Colors.golden};
    padding: 0.5rem 2rem;
    text-align: center;
    border-radius: 0.2rem;
    &:hover {
      background: ${Colors.ctaBrown};
      color: ${Colors.white};
    }
  }

  &:hover {
    color: ${Colors.ctaBrown};
  }
`;
