import React, { useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { WebListsContext } from "../contexts/webLists.context"
import { Body1 } from "../components/Texts";

const useStyles = makeStyles({
  tab_root: {
    padding: "16px",
    display: "flex",
    flexDirection:"column",
    "& div": {
      width: "100%",
      height:"2px",
      borderRadius:"50%",
      marginTop:"8px",
      background:props => props.id === props.activeId && "black",
    },

    "&:hover": {
      cursor: "pointer",
    },
  },
  activeFont: {
    fontWeight: props => props.id === props.activeId && 900,
  }
});

const Tab = props => {
  const classes = useStyles(props);

  //set ActiveId
  const onClickHandler = (currentId) => {
    props.onActiveId(currentId);
  }

  return (
    <div className={classes.tab_root} onClick={() => onClickHandler(props.id)}>
      <Body1 className={classes.activeFont}>{props.label} + {props.id}</Body1>
      <div></div>
    </div>
  )
}

const Tabs = props => {

  const tabs = useContext(WebListsContext);
  const { webLists, activeId, findActiveId } = tabs;

  return (
    <>
      <div style={{ display: "flex" }}>
        {webLists.map((webList, index) => (
          <Tab
            key={index}
            label={webList.listName}
            id={webList.id}
            onActiveId={findActiveId}
            activeId={activeId}
          />))}
      </div>

      <p>Active Id: {activeId}</p>
    </>
  )
}

export default Tabs;