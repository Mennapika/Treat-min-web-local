import React, { useState, useEffect } from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from '@material-ui/core/Input';
import { useTranslation, initReactI18next } from "react-i18next";
import { setSideBar } from "../../Redux/actions/filterClinics";
import {
  GridContainer,
  Img,
  GridForm,
  Form,
  NavBtn,
  Button,
  NavBtnLink2
} from "../elements";
import axios from "axios";
import { connect } from "react-redux";

const theme = createMuiTheme({
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
    width: "100%"
  },
  btnStyleOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "15px"
  }
});

function ResetPassword(props) {
  const styles = useStyles();
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(true);
  const [visibility, setVisibility] = useState(false);
  const [invalidPass, setInvalidPass] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    props.dispatch(setSideBar(false));
  }, [])

  function hnadlePasswordChange(event) {
    const passwordVal = event.target.value;
    if (passwordVal.length >= 8 && passwordVal.length <= 32 && !passwordVal.match(/^\d{8,32}$/)) {
      if (passwordVal === confirmPassword && passwordVal !== "") {
        setInvalidPass(false);
        setErrorConfirmPassword(false);
      }
      else {
        setErrorConfirmPassword(true);
      }
      setPassword(passwordVal);
      setErrorPassword(false);
    } else {
      setPassword(passwordVal);
      setErrorPassword(true);
      setErrorConfirmPassword(true);
    }
  }

  function hnadleConfirmPasswordChange(event) {
    const confirmNewPassword = event.target.value;
    if (confirmNewPassword === password) {
      setConfirmPassword(confirmNewPassword);
      setErrorConfirmPassword(false);
      setInvalidPass(false);
    } else {
      setConfirmPassword(confirmNewPassword);
      setErrorConfirmPassword(true);
    }
  }

  function handleVisibility() {
    setVisibility((prevValue) => !prevValue);
  }

  const handleBtnClick = (event) => {
    event.preventDefault();
    if (!errorPassword && !errorConfirmPassword) {
      const email = localStorage.getItem('email');
      axios.patch('/api/accounts/password-reset/', {
        email: email,
        password: password
      }).then((response) => {
        localStorage.removeItem('email');
        props.history.push('/login');
      })
    } else {
      setInvalidPass(true);
      props.history.push('/resetPassword');
    }
  }
  const handleEnterClick = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (!errorPassword && !errorConfirmPassword) {
        const email = localStorage.getItem('email');
        axios.patch('/api/accounts/password-reset/', {
          email: email,
          password: password
        }).then((response) => {
          localStorage.removeItem('email');
          props.history.push('/login');
        })
      } else {
        setInvalidPass(true);
        props.history.push('/resetPassword');
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
              src={require("../../images/My password-bro.svg").default}
              alt="Reset-Password-img"
            />
          </Grid>
          <GridForm xs={12} sm={12} md={6} lg={6}>
            <Form>
              <h3 style={{ marginTop: "10px" }}>{t('choose_new_password')}</h3>
              <FormControl
                className={styles.content}
                required
                variant="standard"
              >
                <InputLabel
                  color={errorPassword ? "secondary" : "primary"}
                  required htmlFor="standard-adornment-password"
                >
                  {t('new_password')}
                </InputLabel>
                <Input
                  id="standard-adornment-password"
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
                  labelWidth={120}
                />
              </FormControl>
              <FormControl
                className={styles.content}
                required
                variant="standard"
              >
                <InputLabel
                  color={errorConfirmPassword ? "secondary" : "primary"}
                  required htmlFor="standard-adornment-password"
                >
                  {t('confirm_Password')}
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={visibility ? "text" : "password"}
                  onChange={hnadleConfirmPasswordChange}
                  error={errorConfirmPassword}
                  onKeyPress={handleEnterClick}
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
                  labelWidth={145}
                />
              </FormControl>
              {(invalidPass) && (
                <p style={{ marginTop: "10px", color: "red" }}>
                  {t('eightcharcter')}
                </p>
              )}
              <div className={styles.btnStyleOuter}>
                <NavBtn>
                  <NavBtnLink2 to="/login">{t('cancel')}</NavBtnLink2>
                </NavBtn>
                <Button
                  onClick={handleBtnClick}
                >
                  {t('submit')}
                </Button>
              </div>
            </Form>
          </GridForm>
        </GridContainer>
      </ThemeProvider>
    </div>
  );
}

export default connect()(ResetPassword);
