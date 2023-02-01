import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { useState } from "react";
import {menuData} from '../data/menuData';

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0rem 2rem 0 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: transparent;

  &.active {
    background: linear-gradient(90deg, #000 0%, #3c4048 100%);
    opacity: 95%;
  }
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #ff4a4a;
    white-space: nowrap;
    transition: 0.3s;
    transform: scale(1.05);
  }
`;

const Logo = styled(Link)`
  ${NavLink}
  font-weight: 700;
  letter-spacing: 0.5rem;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #ff4a4a;
    white-space: nowrap;
    transform: skew(1.03);
    font-weight: bolder;
  }
`;

const MenuBars = styled(HiOutlineBars3CenterLeft)`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-80%, 26%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
  display: flex;
  justify-content: space-around;
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Nav className={navbar ? "active" : ""}>
      <Logo to="/">UTOPIAN</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
      {menuData.map((item, index)=>(
        <NavMenuLinks to={item.link} key={index}>
        {item.title}
        </NavMenuLinks>
      ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" to="/contact">
            Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
