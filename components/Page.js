
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  root:{
    padding:"20px 40px",
    background:"#EEEEEE",
  }
});

const Page = props =>{

  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      {props.children}
    </div>
  )
}

export default Page;