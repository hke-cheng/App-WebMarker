import {useContext} from "react";
import Avator from "../components/Avator";
import Divider from "../components/Divider";
import Tabs from "../components/Tabs";
import Page from "../components/Page";
import { Body1 } from "../components/Texts";
import { makeStyles } from "@material-ui/core/styles";
import { WebListsProvider } from "../contexts/webLists.context";
import TabPanel from "../components/TabPanel";



const useStyles = makeStyles({

});

const Index = props => {

  const classes = useStyles(props);
 

  return (
    <WebListsProvider >
      <Page>
        <Tabs />
        <TabPanel />
      </Page>
    </WebListsProvider>
  )
}

export default Index;