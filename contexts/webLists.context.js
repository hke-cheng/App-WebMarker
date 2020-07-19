import React, { createContent} from "react";

//create context of holding all of the data on webstate
const defaultWebLists = [
  {},
  {}
]

export const WebListsContext = createContext();
export function WebListsProvider(props) {

  //State


  return (
    <WebListsContext.Provider value={} >
      {props.children}
    </WebListsContext.Provider>
  )


}