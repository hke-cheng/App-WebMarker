
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  divider:{
    width:props => props.vertical ? "100%" : props.space,
    height:props => props.vertical ? props.space : "100%",
  }
})

const Divider = props => {

  const classes = useStyles(props);

  return (
    <div className={classes.divider} />
  )

}

export default Divider;