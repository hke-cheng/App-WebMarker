import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from "@material-ui/core/styles";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from "./TabPanel";
import Divider from "./Divider";
import AddButton from "../components/AddButton";

import AppContainer from "../components/AppContainer";
import AvatorCards from "../components/AvatorCard";

// Overwrite Styles
const AntTabs = withStyles({

  indicator: {
    backgroundColor: "black"
  }
})(props => <Tabs centered {...props} />);

const AntTab = withStyles(theme => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      "Inter",
      "sans-serif",
    ].join(","),
    "&:hover": {
      color: "black",
      opacity: 1
    },
    "&:focus": {
      color: "black"
    }
  },
  selected: {}
}))(props => <Tab disableRipple {...props} />);



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function PopularTabs() {

  //state
  const [value, setValue] = useState(0);
  const [onHover, setOnHover]= useState(false);

  const defaultAppLists = [
    {
      listName: "Search",
      webs: [
        { webName: "google", url: "http://www.google.com" },
        { webName: "apple", url: "http://www.apple.com" }
      ]
    },
    {
      listName: "Work",
      webs: [
        { webName: "linkedIn", url: "http://www.linkedin.com" },
        { webName: "wrod", url: "http://www.apple.com" }
      ]
    }
  ];
  const [webLists, setWebLists] = useState(defaultAppLists)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

        <AntTabs
          value={value}
          onChange={handleChange}
          aria-label="Tab"
        >

          {webLists.map(list => {
            return (
              <>
              <AntTab label={list.listName} {...a11yProps(webLists.indexOf(list))} />
              
              </>
            )
          }
          )}

        </AntTabs>
        <AddButton />

      </div>

      {webLists.map(list => {
        const webs = list.webs;
        return (
          <TabPanel value={value} index={webLists.indexOf(list)}>
            <AppContainer>
            {webs.map(web => <AvatorCards label={web.webName}/>)}
            </AppContainer>
          </TabPanel>
        )
      }
      )}


      {/* <TabPanel value={value} index={0}>
        <AppContainer>
          <AvatorCards label={web.webName}/>
        </AppContainer>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <AppContainer>
          <AvatorCards />
          <AvatorCards />
        </AppContainer>
      </TabPanel> */}




    </div >
  );
}
