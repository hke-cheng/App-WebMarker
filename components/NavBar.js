

import SearchBar from "./SearchBar";
import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles({
  root:{
    padding:"16px 0px",
    height:"90px",
    width:"100%",
    background:"grey",
    display:"flex",
    alignItesm:"center",
    justifyContent:"center"
  }
});

const NavBar = (props) => {

  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <SearchBar placeholder="Search on Google"/>
    </div>
  )
}

export default NavBar;