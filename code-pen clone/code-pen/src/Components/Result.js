import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../Context/DataProvider";
export default function Result() {
  const [src, setSrcDoc] = useState("");
  const { html, css, js } = useContext(DataContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
            <html>
              <body>${html}</body>
              <style>${css}</style>
              <script>${js}</script>
            </html>
          `);
    }, 250);
    //if change happens before 250ms , we clear the timeout
    return () => clearTimeout(timeout);
  }, [html, css, js]);
  return (
    <div className="pane">
      <iframe
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </div>
  );
}
