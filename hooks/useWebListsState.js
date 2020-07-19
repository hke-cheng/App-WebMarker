import { v4 as uuidv4 } from 'uuid';
import {useState} from "react";

export default initialWebLists => {

  const [webLists, setWebLists]= useState(initialWebLists);
  const [activeId,setActiveId] = useState(1);

  const onPageData = webLists.filter(webList => webList.id === activeId)

  return {
    webLists, activeId,onPageData,

    //List of methods
    addWebLists: () => {
      setWebLists([...WebLists, { id: uuidv4(), webs:[]}]);
    },

    //onActiveTab
    findActiveId:newId => {
      setActiveId(newId);
      console.log(`runed functionActiveId + ${newId}`);
    }

    //OnPage Data
   

    //Add List

    //Rename List

    //Delete a List

    //Move Web into a List

    //Remove a web from a list
  }

}