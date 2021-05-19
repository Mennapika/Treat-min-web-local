import React, { useState } from "react";
import { makeStyles,createMuiTheme } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import HistoryIcon from "@material-ui/icons/History";
import Appointment from "./Appointment";
import History from "./History";
import Avatar from "./Avatar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { useHistory } from "react-router-dom";
import { useTranslation, initReactI18next } from "react-i18next";
import Globals from "../navbar/global";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset ,ThemeProvider} from '@material-ui/core/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
  direction: Globals.direction,
});


const useStyles = makeStyles({
  container: {
    backgroundColor: "#235274",
  },
  wrapper: {
    margin: "0 auto",
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    "@media screen and (max-width: 768px)": {
      flexDirection: "column",
      width: "90%",
    },
    "@media screen and (max-width: 1000px)": {
      fontSize: "12px",
    },
  },
  columnOne: {
    backgroundColor: "#235274",
    display: "flex",
    flexDirection: "column",
    width: "33%",
    marginTop: "2em",
    "@media screen and (max-width: 768px)": {
      width: "100%",
    },
  },
  columnTwo: {
    backgroundColor: "#235274",
    width: "65%",
    margin: "2em 0",
    display: "flex",
    flexDirection: "column",
    "@media screen and (max-width: 768px)": {
      width: "100%",
    },
  },
  mainInfo: {
    position: "relative",
    backgroundColor: "#FFF",
    borderRadius: "20px 20px 0 0",
  },
  editBtn: {
    position: "absolute",
    right: "10px",
    top: "10px",
    color: "#19A25D",
  },
  avatar: {
    display: "block",
    width: 140,
    height: 140,
    borderRadius: 70,
    margin: "100px auto 30px auto",
  },
  userName: {
    textAlign: "center",
    fontSize: "16px",
    color: "#19A25D",
  },
  mail: {
    color: "#91c788",
    marginTop: "3px",
    marginBottom: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addInfo: {
    backgroundColor: "#FFF",
    marginTop: "5px",
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  addInfo2: {
    height: 60,
    backgroundColor: "#fff",
    marginTop: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: "0 0 15px 15px",
    "@media screen and (min-width: 769px)": {
      marginBottom: "140px",
    },
  },
  icon: {
    color: "#19a25d",
    marginRight: "0.25em",
    fontSize: 30,
  },
  info: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#19A25D",
    marginLeft: "2em",
  },
  header: {
    margin: "0.75em 0",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px",
    marginLeft: "1.25em",
    color: "#235274",
  },
  headerIcon: {
    color: "#235274",
    marginRight: "0.25em",
    fontSize: "1.5em",
  },
  showAppSection: {
    backgroundColor: "#FFF",
    borderRadius: "20px",
    maxHeight: 240,
    overflow: "auto",
    marginBottom: "1em",
  },
  hideAppSection: {
    display: "none",
  },
  showHistorySection: {
    backgroundColor: "#FFF",
    borderRadius: "20px",
    maxHeight: 240,
    overflow: "auto",
    marginBottom: "1em",
  },
  hideHistorySection: {
    display: "none",
  },
  headerBtn: {
    backgroundColor: "#FFF",
    borderRadius: "20px",
    cursor: "pointer",
    position: "relative",
    outline: "none",
    border: "none",
    marginBottom: "0.5em",
    "&:hover ": {
      backgroundColor: "#dddddd",
    },
  },
  notch: {
    position: "absolute",
    right: "1em",
  },
  imageWrapper: {
    marginTop: "2em",
    textAlign: "center",
    maxWidth: "800px",
    borderRadius: "20px",
    "@media screen and (max-width: 768px)": {
      display: "none",
    },
  },
  image: {
    width: "80%",
  },
  addPhoto: {
    position: "absolute",
    top: "30%",
    right: "30%",
  },
});
function Account() {
  const { t } = useTranslation();
  const classes = useStyles();
  const history = useHistory();
  const [appIsOpen, setAppIsOpen] = useState(false);
  const [historyIsOpen, setHistoryIsOpen] = useState(false);
  const handleHistory = () => {
    setHistoryIsOpen(!historyIsOpen);
  };
  const handleApp = () => {
    setAppIsOpen(!appIsOpen);
  };

  return (
    <ThemeProvider theme={theme}>
    <StylesProvider jss={jss}>
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.columnOne}>
          <div className={classes.mainInfo}>
            <IconButton
              className={classes.editBtn}
              aria-label="Edit"
              title={t('edit')}
              onClick={() => history.push("/EditUserInfo")}
            >
              <EditIcon />
            </IconButton>
            <Avatar />

            <h1 className={classes.userName} color="textSecondary" gutterBottom>
            {t('gerges')}
            </h1>
            <Typography className={classes.mail}>
              <LocationOnIcon className={classes.icon} />
              {t('asu')}
            </Typography>
          </div>
          <div className={classes.addInfo}>
            <p className={classes.info}>
              <PhoneIcon className={classes.icon} /> +20 01286516312
            </p>
          </div>
          <div className={classes.addInfo2}>
            <p className={classes.info}>
              <EmailIcon className={classes.icon} /> gergeswageh@gmail.com
            </p>
          </div>
        </div>
        <div className={classes.columnTwo}>
          <button className={classes.headerBtn} onClick={handleApp}>
            <h3 className={classes.header}>
              <CalendarTodayIcon className={classes.headerIcon} /> {t('appoinment')}
              {appIsOpen ? (
                <ArrowDropUpIcon className={classes.notch} />
              ) : (
                <ArrowDropDownIcon className={classes.notch} />
              )}
            </h3>
          </button>
          <div
            className={
              appIsOpen ? classes.showAppSection : classes.hideAppSection
            }
          >
            <Appointment
              service={t('ramdan')}
              time={t('tues')}
              date="1/1/2021"
            />
            <Appointment
              sservice={t('ramdan')}
              time={t('tues')}
              date="1/1/2021"
            />
            <Appointment
            service={t('ramdan')}
            time={t('tues')}
            date="1/1/2021"
            />
          </div>
          <button className={classes.headerBtn} onClick={handleHistory}>
            <h3 className={classes.header}>
              <HistoryIcon className={classes.headerIcon} /> {t('history')}
              {historyIsOpen ? (
                <ArrowDropUpIcon className={classes.notch} />
              ) : (
                <ArrowDropDownIcon className={classes.notch} />
              )}
            </h3>
          </button>
          <div
            className={
              historyIsOpen
                ? classes.showHistorySection
                : classes.hideHistorySection
            }
          >
            <History
            service={t('ahmedhassan')}
            time={t('tues')}
            date="1/1/2021"
            />
          </div>
          <div className={classes.imageWrapper}>
            <img
              className={classes.image}
              src={require("./book.png").default}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
    </StylesProvider>
    </ThemeProvider>
  );
}

export default Account;
