import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { Link as LinkR } from "react-router-dom";

export const GridContainer = styled(Grid)`
  width: 100%;
  margin: 0px;
  background-color: #235274;
  @media screen and (max-width: 768px) {
    width: 768px;
  }
  @media screen and (max-width: 480px) {
    width: 480px;
  }
`;

export const GridImg = styled(Grid)`
  text-align: center;
`;

export const ForgetPasswordImg = styled.img`
  width: 600px;
  height: 600px;
  @media screen and (min-width: 1080px) {
    margin-left: 100px;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const GridForm = styled(Grid)`
  text-align: center;
  margin-bottom: 30px;
  @media screen and (min-width: 1000px) {
    margin-top: 100px;
  }
`;

export const ForgetPasswordForm = styled.form`
  width: 370px;
  /*height: 210px;*/
  border: 1px solid #f9f9f9;
  border-radius: 20px;
  text-align: center;
  background-color: #f9f9f9;
  margin: 0 auto 0 auto;
  padding: 20px 20px 0 20px;
  @media screen and (max-width: 480px){
    width: 80%;
    margin: 20% auto 10% auto;
    /*margin-top: 30%;
    margin-bottom: 30%;*/
  }
  @media screen and (min-width: 1024px){
    position: relative;
    left: 40px;
    top: 60px;
  }
`;

export const LoginForm = styled.form`
  width: 370px;
  height: 270px;
  border: 1px solid #f9f9f9;
  border-radius: 20px;
  text-align: center;
  background-color: #f9f9f9;
  margin: 0 auto 0 auto;
  @media screen and (max-width: 480px) {
    width: 320px;
    height: 270px;
  }
  @media screen and (max-width: 350px) {
    width: 250px;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavBtnLink = styled(LinkR)`
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

export const NavBtnLink2 = styled(LinkR)`
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
