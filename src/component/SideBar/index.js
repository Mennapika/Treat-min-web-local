import React, { useEffect, useState } from "react";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  SidebarRoute,
  SidebarBtnWrap,
  SidebarButton,
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute2,
  Button2
} from "./SidebarElement";
import { useTranslation, initReactI18next } from "react-i18next";
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames';
import Globals from "../navbar/global";
import { createMuiTheme } from "@material-ui/core/styles";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, ThemeProvider } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { setAuth, deleteProfile } from "../../Redux/actions/Auth";
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
  overrides: {
    ButtonGroup: {
      direction: Globals.direction,
    }
  }
});


const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    country_code: 'eg',
  },
]

const GlobeIcon = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className="bi bi-globe"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>
)
const SideBar = ({ isOpen, toggle, auth, dispatch }) => {
  const [isLogin, setIsLogin] = useState(false);
  const local = localStorage.getItem('isLogin');
  let history = useHistory();
  const handleLogOut = () => {
    axios.post('/api/accounts/logout/', {}, {
      headers: {
        'Authorization': 'Token ' + localStorage.getItem('token')
      }
    }).then((response) => {
      setIsLogin(false);
      localStorage.setItem('isLogin', 'false');
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      dispatch(setAuth(false));
      dispatch(deleteProfile());
      history.push('/');
    })
  }
  useEffect(() => {
    if (localStorage.getItem('isLogin') === "true") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [auth.isLogin])
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()
  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])
  function handleClick() {
    history.push("/");
  }
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon>
            <CloseIcon />
          </Icon>
          <SidebarWrapper>
            <SidebarMenu>
              <SidebarLink to="home" onClick={toggle} onClick={handleClick}>
                {t('home')}
              </SidebarLink>
              <SidebarLink to="about" onClick={toggle} onClick={handleClick}>
                {t('aboutus')}
              </SidebarLink>
              <SidebarLink to="book" onClick={toggle} onClick={handleClick}>
                {t('book')}
              </SidebarLink>

            </SidebarMenu>
            <SidebarBtnWrap >

              <SidebarButton onClick={() => { i18next.changeLanguage("en"); window.location.reload(false);  }} >English</SidebarButton>
              <SidebarButton onClick={() => { i18next.changeLanguage("ar");window.location.reload(false); }} >عربي</SidebarButton>
            </SidebarBtnWrap>
            {isLogin &&
              <SidebarBtnWrap>
                <SidebarRoute to="/MyAccount"> {t('account')}</SidebarRoute>
              </SidebarBtnWrap>
            }
            {isLogin ?
              <SidebarBtnWrap>
                <Button2 onClick={handleLogOut}>{t('logout')}</Button2>
              </SidebarBtnWrap>
              :
              <SidebarBtnWrap>
                <SidebarRoute to="/login"> {t('login')}</SidebarRoute>
              </SidebarBtnWrap>
            }
            <SidebarBtnWrap>
              <SidebarRoute2 to="/Emergncy"> {t('emergency')}</SidebarRoute2>
            </SidebarBtnWrap>
          </SidebarWrapper>
        </SidebarContainer>
      </StylesProvider>
    </ThemeProvider>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps)(SideBar);
