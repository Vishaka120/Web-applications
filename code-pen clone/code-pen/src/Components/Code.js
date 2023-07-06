import React from "react";
import { DataContext } from "../Context/DataProvider";
import { useContext } from "react";
import Editor from "./Editor";

export default function Code() {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  return (
    <div className="pane top-pane">
      <Editor
        language="xml"
        displayName="HTML"
        value={html}
        onChange={setHtml}
      />
      <Editor language="css" displayName="CSS" value={css} onChange={setCss} />
      <Editor
        language="javascript"
        displayName="JS"
        value={js}
        onChange={setJs}
      />
    </div>
  );
}
