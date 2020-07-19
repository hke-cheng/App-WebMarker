


import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    borderRadius: "20px",
    background:"blue",
    overflow: "hidden",
    width: "60px",
    height: "60px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    "& img": {
      maxWidth: "60px"
    },
  }
});

const Avator = props => {

  const classes = useStyles(props);
  return (
      <a href="https://www.google.com" target="_blank">
        <div className={classes.root}>
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
          /> */}
        </div>
      </a>
  )
}

export default Avator;