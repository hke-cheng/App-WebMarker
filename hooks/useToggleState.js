import { useState } from "react";

const useToggleState = (intialState = false) => {
  const [state, setState] = useState(initialState);
  const setToggle = () => {
    setState(!state);
  }

  return [state, setToggle]
}

export default useToggleState;
