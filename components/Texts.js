
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  h1: {
    fontFamily: "Inter, sans-serif",
    fontSize: "24px",
    fontWeight: 700,
    margin: "0px"
  },

  h2: {
    fontFamily: "Inter, sans-serif",
    fontSize: "20px",
    fontWeight: 700,
    margin: "0px"
  },

  h3: {
    fontFamily: "Inter, sans-serif",
    fontSize: "18px",
    fontWeight: 700,
    margin: "0px"
  },

  h4: {
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    fontWeight: 700,
    margin: "0px",
    color: props => props.textColor,
  },

  h5: {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    fontWeight: 700,
    margin: "0px"
  },


  body1: {
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    margin: "0px"
  },
  body2: {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    margin: "0px",
  }
});


//H
export const H1 = (props) => {
  const classes = useStyles(props);
  return (
    <h1 {...props} className={classes.h1}>
      {props.children}
    </h1>
  )
};

export const H2 = (props) => {
  const classes = useStyles(props);
  return (
    <h1 {...props} className={classes.h2}>
      {props.children}
    </h1>
  )
};


export const H3 = (props) => {
  const classes = useStyles(props);
  return (
    <h1 {...props} className={classes.h3}>
      {props.children}
    </h1>
  )
};

export const H4 = (props) => {
  const classes = useStyles(props);
  return (
    <h1 {...props} className={classes.h4}>
      {props.children}
    </h1>
  )
};

export const H5 = (props) => {
  const classes = useStyles(props);
  return (
    <h1 {...props} className={classes.h5}>
      {props.children}
    </h1>
  )
};


//P
export const Body1 = (props) => {
  const classes = useStyles(props);
  return (
    <p {...props} className={classes.body1}>
      {props.children}
    </p>
  )
};


export const Body2 = (props) => {
  const classes = useStyles(props);
  return (
    <p {...props} className={classes.body2}>
      {props.children}
    </p>
  )
};

