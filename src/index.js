import React from "react";
import ReactDOM  from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Pages
import App from "./App";
import News from "./components/Pages/News";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Us from "./components/Pages/Us";
import University from "./components/Pages/University";
import Coworking from "./components/Pages/Coworking";
import Scheduler from "./components/Pages/Scheduler";
import JestersParty from "./components/Pages/JestersParty";
import Success from "./components/Pages/Success";

// Generic
import Header from "./components/Header";
import Footer from "./components/Footer";
import Spacing from "./components/Spacing";
import Home from "./components/Pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    {/* Generic */}
    <Header />
    <Spacing />

    {/* Component */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/us" element={<Us />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/university" element={<University />} />
      <Route path="/coworking" element={<Coworking />} />
      <Route path="/coworking/scheduler" element={<Scheduler />} />
      <Route path="/JestersParty" element={<JestersParty />} />
      <Route path="/Success" element={<Success />} />
    </Routes>

    {/* Footer */}
    <Spacing />
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
