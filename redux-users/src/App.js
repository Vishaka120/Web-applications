import "./App.css";
import UserDerails from "./Components/UserDerails";
import Form from "./Components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  let [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/" element={<UserDerails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
