import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar/NavBar";
import PageOne from "./PageOne/PageOne";
import PageTwo from "./PageTwo/PageTwo";
import PageThree from "./PageThree/PageThree";
import PageFour from "./PageFour/PageFour";
import PageFive from "./PageFive/PageFive";
// import image from "./img/pngwing 1.png";
function App() {
  return (
    <div
      style={{
        backgroundImage: `url(./img/background_1.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <NavBar />
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
    </div>
  );
}

export default App;
