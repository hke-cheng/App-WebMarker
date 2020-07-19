import React, { useState, createContext } from "react";
import useWebListsState from "../hooks/useWebListsState";

//create context of holding all of the data on webstate
const defaultWebLists = [
  {
    listName: "Search",
    id:1,
    webs: [
      { webName: "google", url: "http://www.google.com" },
      { webName: "apple", url: "https://www.apple.com/" }
    ]
  },
  {
    listName: "Work",
    id:2,
    webs: [
      { webName: "linkedIn", url: "https://www.linkedin.com/" },
      { webName: "wrod", url: "http://www.apple.com" }
    ]
  }
];

export const WebListsContext = createContext();

export function WebListsProvider(props) {

  //State
  const webStuff = useWebListsState(defaultWebLists);

  return (
    <WebListsContext.Provider value={webStuff} >
      {props.children}
    </WebListsContext.Provider>
  );
}