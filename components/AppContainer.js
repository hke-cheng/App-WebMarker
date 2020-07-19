
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  appContainer: {
    background: "white",
    display: "flex",
    padding: "6px",
    borderRadius: "20px",
    minWidth:"480px",
    maxWidth:"980px",
    display:"flex",
    flexWrap:"wrap",
    alignItems:"center",
    justifyContent:"center"
  },
});

const AppContainer = props => {
  const classes = useStyles(props);
  return (
    <div className={classes.appContainer}>
      {props.children}
    </div>
  )
}

export default AppContainer;