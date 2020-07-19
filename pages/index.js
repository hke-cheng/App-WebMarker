import Avator from "../components/Avator";
import Divider from "../components/Divider";
import Page from "../components/Page";
import { Body1 } from "../components/Texts";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appContainer: {
    background: "white",
    display: "flex",
    padding: "0px",
    borderRadius: "20px"
  },

});

const Index = props => {

  const classes = useStyles(props);
  return (
    <Page>

      {/* webList-Tab */}

      {/* <PopularTabs /> */}


    </Page>
  )
}

export default Index;