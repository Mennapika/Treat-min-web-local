import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import FindClincalSection from '../FindClincal'
import FindSpecialRoomSection from '../FindSpecialRooms'
import FindServicesSection from '../FindServices';
import { useTranslation} from "react-i18next";

function TabPanel(props) {
  
  const { children, value, index, ...other } = props;
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  Tab: {
    backgroundColor: "#235274",
    indicatorColor: "	#00b300",
  }
}));

export default function NavTabs() {
  const { t } = useTranslation();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab className={classes.Tab} icon={<LocalHospitalIcon/>}label={t('clinic')} href="/drafts" {...a11yProps(0)} />
          <LinkTab className={classes.Tab} icon={<LocalHotelIcon/>}label={t('special_room')} href="/trash" {...a11yProps(1)} />
          <LinkTab className={classes.Tab} icon={<SettingsApplicationsIcon/>} label={t('service')} href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <FindClincalSection/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <FindSpecialRoomSection/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FindServicesSection/>
      </TabPanel>
    </div>
  );
}
