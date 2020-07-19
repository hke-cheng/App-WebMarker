import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SvgIcon from '@material-ui/core/SvgIcon';

import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
  root: {

    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
    border: "none",
    borderRadius: "50%",
    "&:hover": {
      cursor: "pointer",
      background: "white",
    }
  },
  rootWrapper: {
    position: "relative"
  },
  dropDown: {
    position: "absolute",
    padding:"16px",
    top: "0px",
    left: "46px",
    width: "200px",
    height: "160px",
    borderRadius: "8px",
    background: "white",
    boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.29)",
    transition: "0.1s visibility",
  }
})

const AddButton = props => {

  const classes = useStyles(props);
  const [dropDown, setDropDown] = useState(false);
  return (
    <div
      className={classes.rootWrapper}
      onMouseOver={() => setDropDown(true)}
      onMouseLeave={() => setDropDown(false)}
    >
      <button className={classes.root}>
        <SvgIcon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </SvgIcon>
      </button>

      <div className={classes.dropDown} style={{ visibility: dropDown ? "visible" : "hidden" }}>
        <form noValidate autoComplete="off">
          <TextField id="addNewList" label="Add New List" variant="outlined"/>
        </form>
      </div>
    </div>
  )
}
export default AddButton;