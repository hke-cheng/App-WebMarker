import Avator from "../components/Avator";
import Divider from "../components/Divider";
import { Body1 } from "../components/Texts";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({

  avatorCard: {
    padding: "16px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.09)",
    }
  }
});

const AvatorCard = props => {

  const classes = useStyles(props);
  return (

        <div className={classes.avatorCard}>
          <Avator />
          <Divider vertical space="8px" />
          <Body1>{props.label}</Body1>
        </div>

  )
}

export default AvatorCard;