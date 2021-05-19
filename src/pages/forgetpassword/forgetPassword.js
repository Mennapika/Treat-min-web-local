import React, { useState } from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {
  GridContainer,
  Img,
  GridForm,
  Form,
  NavBtn,
  Button,
  NavBtnLink2
} from "../elements";
import { useTranslation, initReactI18next } from "react-i18next";
import axios from "axios";
import Globals from "../../component/navbar/global";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
  direction:Globals.direction,
  palette: {
    primary: {
      main: "#19a25d"
    }
  }
});

const useStyles = makeStyles({
  content: {
    marginTop: "10px",
    width: "100%"
  },

  btnStyleOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "15px"
  },
  notValidEmail: {
    color: "rgb(240, 84, 84)",
    margin: "10px 0 0 0"
  }
});

function ForgetPassword(props) {
  const styles = useStyles();
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(true);
  const [inValidEmail, setInValidEmail] = useState(false);
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
  const handleSignClick = (event) => {
    event.preventDefault();
    if (errorEmail) {
      setInValidEmail(true);
      props.history.push('/forgetPassword');
    } else {
      axios.post('/api/accounts/password-email/', { email: email }).then((response) => {
        console.log(response.data.details);
        localStorage.setItem('email', email);
        props.history.push('/verificationCode');
      }).catch((error) => {
        console.log(error.response.data);
      })
      setInValidEmail(false);
    }
  }
  const handleEnterClick = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (errorEmail) {
        setInValidEmail(true);
        props.history.push('/forgetPassword');
      } else {
        axios.post('/api/accounts/password-email/', { email: email }).then((response) => {
          console.log(response.data.details);
          localStorage.setItem('email', email);
          props.history.push('/verificationCode');
        }).catch((error) => {
          console.log(error.response.data);
        })
        setInValidEmail(false);
      }
    }
  }
  const { t } = useTranslation();
  return (
    <div>
      <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <GridContainer container>
          <Grid xs={12} sm={12} md={6} lg={6}>
            <Img
              src={require("../../images/Forgot password.png").default}
              alt="ForgetPassword"
            />
          </Grid>
          <GridForm xs={12} sm={12} md={6} lg={6}>
            <Form>
              <h2 style={{ marginTop: "10px" }}>{t('findaccount')}</h2>
              <TextField
                className={styles.content}
                onChange={handleEmailChange}
                variant="outlined"
                label={t('email')}
                required
                error={errorEmail}
                onKeyPress={handleEnterClick}
              />
              {inValidEmail && <p style={{ color: "red", marginTop: "5px" }}>
                {t('emailnotfound')}
              </p>}
              <div className={styles.btnStyleOuter}>
                <NavBtn>
                  <NavBtnLink2 to="/login">{t('cancel')}</NavBtnLink2>
                </NavBtn>
                <Button
                  onClick={handleSignClick}
                >
                  {t('send_ver_code')}
                </Button>
              </div>
            </Form>
          </GridForm>
        </GridContainer>
        </StylesProvider>
      </ThemeProvider>
    </div>
  );
}

export default ForgetPassword;
