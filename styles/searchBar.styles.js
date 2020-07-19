import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  search: {
    height: "46px",
    "& input": {
      padding: "0px 24px",
      width: "400px",
      height: "100%",
      borderRadius: 8,
      border: "none",
      outline: "none",
      "&:focus": {
        border: "#169EF8"
      }
    }
  },
})


export default useStyles;