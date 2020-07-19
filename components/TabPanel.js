import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from "@material-ui/core/styles";
import { WebListsContext } from "../contexts/webLists.context";
import AvatorCard from "../components/AvatorCard";
import AppContainer from "../components/AppContainer"

import Divider from "./Divider";

const useStyles = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent:"center"
  }
});


const TabPanel = props => {

  const classes = useStyles(props);

  const { onPageData } = useContext(WebListsContext);
  const { webs } = onPageData[0];

  return (
    <div className={classes.root}>
      <AppContainer>
        {webs.map(web => <AvatorCard label={web.webName} url={web.url}/>)}
      </AppContainer>
    </div>
  )
}


export default TabPanel;