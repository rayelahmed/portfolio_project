import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Components/Home/Home";

import Contacts from "./Components/Pages/Contact/Contacts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contacts />}></Route>
      </Routes>
    </div>
  );
}

export default App;
