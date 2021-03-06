import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #d1eadd;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const CloseIcon = styled(FaTimes)`
  color: #235274;
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const SidebarWrapper = styled.div`
  color: #d1eadd;
`;
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  color: #86c2a6;
  &:hover {
    color: #235274;
    transition: 0.2s ease-in-out;
  }
`;
export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px; 
`;
export const SidebarBtnWrap2 = styled.div`
  display: flex;
  justify-content: center;
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(0, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
  @media screen and (max-width: 320px) {
    grid-template-rows: repeat(6, 40px);
  }
`;
export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #19a25d;
  white-space: nowrap;
  padding: 16px 64px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-bottom: 10px; 
`;
export const SidebarRoute2 = styled(LinkR)`
  border-radius: 50px;
  background: #b30000;
  white-space: nowrap;
  padding: 16px 64px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  
`;
export const SidebarButton = styled.button`
  border-radius: 50px;
  background: #19a25d;
  white-space: nowrap;
  padding: 16px 64px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-bottom: 10px; 
  @media screen and (max-width: 320px) {
    font-size: 12px;
    padding: 12px 24px;
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
  padding: 16px 64px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
`;
