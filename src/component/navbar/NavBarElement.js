import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import Globals from "./global";

export const Nav = styled.nav`
  background: white;
  height: 80px;
  /*margin-top:-80px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  @media screen and (max-width: 768px) {
    padding: 2 0px;
    margin: auto;
    border-radius: 10px;
  }
`;
export const NavLogo = styled(LinkR)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    position: sticky;
  }
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: relative;
    top: -30px;
    left: 20px;
    right:-40px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #89c3a8;
    float: left;
    text-align: center;
  }
`;
export const MobileIcon2 = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: relative;
    top: -30px;
    left: 60px;
    right:-40px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #89c3a8;
    float: left;
    text-align: center;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItems = styled.li`
  height: 80px;
`;
export const NavItems2=styled.li`
           padding: 10px 20px;
            width: 100px;
            border: none;
            border-radius: 2px;
            display: inline;
`;
export const NavLinks = styled(LinkS)`
  color: #89c3a8;
  margin-top: 30px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  hight: 100%;
  cursor: pointer;
  &:active {
    border-bottom: 3px solid #205072;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtn2 = styled.nav`
  display: flex;
  align-items: center;
  width: 50px;
  text-align: center;
  margin: 150px;
  @media screen and (max-width: 768px) {
    margin: 50px;
  }
`;
export const NavBtn33 = styled.nav`
  display: flex;
  align-items: center;
  width: 50px;
  text-align: center;
  margin: 150px;
  background-color: #b30000;
  @media screen and (max-width: 768px) {
    margin: 50px;
  }
`;
export const NavBtn3 = styled.nav`
  display: flex;
  align-items: center;
  width: 50px;
  text-align: center;
  justify-content:"center";
  margin: 5px;
  margin-left:25%;
  margin-bottom:10%;
  @media screen and (max-width: 768px) {
    margin: 5px;
    margin-leftt:30%;
    margin-bottom:25%;
  }
  @media screen and [dir=rtl] {
    margin: 5px;
    margin-right:30%;
    margin-bottom:25%;
  }
`;
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #19a25d;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  boarder: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2sease-in-out;
    background: #f5f5f5;
    color: #205072;
  }
`;
export const NavBtnLink2 = styled(LinkR)`
  border-radius: 50px;
  background: #19a25d;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 20px;
  outline: none;
  boarder: none;
  cursor: pointer;
  padding: 14px 40px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-align: "center";

  &:hover {
    transition: all 0.2sease-in-out;
    background: #f5f5f5;
    color: #205072;
  }
`;

export const NavBtnLink55 = styled(LinkR)`
  border-radius: 50px;
  background: #FFF;
  white-space: nowrap;
  padding: 10px 22px;
  color: #235274;
  font-size: 20px;
  outline: none;
  boarder: none;
  cursor: pointer;
  padding: 14px 40px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-align: "center";
`;

export const NavBtnLink3 = styled(LinkR)`
  border-radius: 50px;
  background: #19a25d;
  white-space: nowrap;
  color: white;
  font-size: 20px;
  outline: none;
  boarder: none;
  cursor: pointer;
  padding: 14px 40px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-align: "center";
  justify-content:"center";
  display:flex;
  float:center;
  &:hover {
    transition: all 0.2sease-in-out;
    background: #f5f5f5;
    color: #205072;
  }
`;

export const Button = styled.button`
  border-radius: 50px;
  background: #19a25d;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2sease-in-out;
    background: #f5f5f5;
    color: #205072;
  }
`;

export const Button2 = styled.button`
  border-radius: 50px;
  background: #c64756;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2sease-in-out;
    background: #f5f5f5;
    color: #205072;
  }
`;
//booking Button
export const BookingButton = styled.button`
  border-radius: 50px;
  background: #19a25d;
  white-space: nowrap;
  color: white;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 14px 40px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /*text-align: "center";
  justify-content:"center";
  display:flex;
  float:center;*/
  margin-bottom: 50px;
  &:hover {
    transition: all 0.2sease-in-out;
    background: #f5f5f5;
    color: #205072;
  }
`;
export const UserName = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  background-color: #f6dfeb;
  text-align: center;
`;

export const Button3 = styled.button`
  border-radius: 50px;
  background: #c64756;
  white-space: nowrap;
  /*padding: 10px 22px;*/
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2sease-in-out;
    background: #f5f5f5;
    color: #205072;
  }
`;