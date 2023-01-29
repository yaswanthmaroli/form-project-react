import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/form1" element={<Form1/>}></Route>
        <Route path="/form2" element={<Form2/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
