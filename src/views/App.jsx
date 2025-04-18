import React from "react";
import "./App.css";
import Menu from "../components/layout/Menu.jsx";
import Content from "../components/layout/Content.jsx";

export default function App(props) {
  return (
    <div className="App">
      <Menu />
      <Content />
    </div>
  );
}
