import React, { useState } from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import { NavLink } from "react-router-dom";
import { useTranslation, initReactI18next } from "react-i18next";
import {
  GridContainer,
  Img,
  GridForm,
  Form,
  NavBtn,
  Button,
  NavBtnLink2,
  ForgetPassword
} from "../elements";
import axios from "axios";
import Globals from "../../component/navbar/global";
const theme = createMuiTheme({
  direction:Globals.direction,
  palette: {
    primary: {
      main: "#19a25d"
    },
    secondary: {
      main: "#f00"
    }
  }
});

const useStyles = makeStyles({
  content: {
    marginTop: "20px",
    marginBottom: "5px",
    width: "100%"
  },
  btnStyleOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "15px"
  },
  signUp: {
    color: "blue"
  }
});

function Login(props) {
  const styles = useStyles();
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(true);
  const [visibility, setVisibility] = useState(false);
  const [inValidEmail, setInValidEmail] = useState(false);
  const [inValidPass, setInValidPass] = useState(false);
  function handleEmailChange(event) {
    const emailValue = event.target.value;
    if (emailValue.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
      setEmail(emailValue);
      setErrorEmail(false);
      setInValidEmail(false);
    } else {
      setErrorEmail(true);
    }
  }

  function hnadlePasswordChange(event) {
    const passwordVal = event.target.value;
    if ((passwordVal.length >= 8 && passwordVal.length <= 32)) {
      setPassword(passwordVal);
      setErrorPassword(false);
      setInValidPass(false);
    } else {
      setErrorPassword(true);
    }
  }

  function handleVisibility() {
    setVisibility((prevValue) => !prevValue);
  }

  const handleBtnClick = (event) => {
    event.preventDefault();
    if (!errorPassword && !errorEmail) {
      axios.post('/api/accounts/login/', {
        email: email,
        password: password
      }).then((response) => {
        console.log(response.data.token);
        const token = response.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('isLogin', 'true');
        props.history.push('/');
      }).catch((error) => {
        console.log(error);
      })

    } else {
      props.history.push('/login');
      if (errorEmail) {
        setInValidEmail(true);
      }
      if (errorPassword) {
        setInValidPass(true);
      }
    }
  }

  const handleEnterClick = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (!errorPassword && !errorEmail) {
        axios.post('/api/accounts/login/', {
          email: email,
          password: password
        }).then((response) => {
          console.log(response.data.token);
          const token = response.data.token;
          localStorage.setItem('token', token);
          localStorage.setItem('isLogin', 'true');
          props.history.push('/');
        }).catch((error) => {
          console.log(error);
        })

      } else {
        props.history.push('/login');
        if (errorEmail) {
          setInValidEmail(true);
        }
        if (errorPassword) {
          setInValidPass(true);
        }
      }
    }
  }
  const { t } = useTranslation();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GridContainer container>
          <Grid xs={12} sm={12} md={6} lg={6}>
            <Img
              src={require("../../images/Login-amico.png").default}
              alt="login-img"
            />
          </Grid>
          <GridForm xs={12} sm={12} md={6} lg={6}>
            <Form>
              <h2>  {t('logintreat')}</h2>
              <TextField
                className={styles.content}
                onChange={handleEmailChange}
                onKeyPress={handleEnterClick}
                variant="outlined"
                label={t('email')}
                type="text"
                required
                error={errorEmail}
              />
              {inValidEmail && <p style={{ color: "red", marginTop: "5px", float: "left", clear: "both" }}>
                {t('emailnotvalid')}
              </p>}
              <ForgetPassword to="/forgetPassword">
                {t('forgetpassword')}
              </ForgetPassword>
              <FormControl
                className={styles.content}
                required
                variant="outlined"
              >
                <InputLabel
                  color={errorPassword ? "secondary" : "primary"}
                  required htmlFor="outlined-adornment-password"
                >
                  {t('password')}
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={visibility ? "text" : "password"}
                  onChange={hnadlePasswordChange}
                  onKeyPress={handleEnterClick}
                  error={errorPassword}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        onClick={handleVisibility}
                      >
                        {visibility ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={80}
                />
              </FormControl>
              {inValidPass && <div><p style={{ color: "red", marginTop: "5px", float: "left", clear: "both" }}>
                {t('eightcharcter')}
              </p></div>}
              <br />
              <div style={{ paddingTop: "10px", paddingBottom: "2px" }}>
                <p style={{ display: "inline" }}>
                  {t('newuser')}&nbsp;&nbsp;
                </p>
                <NavLink className={styles.signUp} to="/SignUp">
                  {t('signup')}
                </NavLink>
              </div>
              <div className={styles.btnStyleOuter}>
                <NavBtn>
                  <NavBtnLink2 to="/">{t('cancel')}</NavBtnLink2>
                </NavBtn>
                <Button
                  onClick={handleBtnClick}
                >
                  {t('login')}
                </Button>
              </div>
            </Form>
          </GridForm>
        </GridContainer>
      </ThemeProvider>
    </div>
  );
}

export default Login;
