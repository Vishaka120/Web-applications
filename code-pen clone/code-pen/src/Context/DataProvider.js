import React, { createContext } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
export const DataContext = createContext(null);
export default function DataProvider(props) {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");

  return (
    <DataContext.Provider
      value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
