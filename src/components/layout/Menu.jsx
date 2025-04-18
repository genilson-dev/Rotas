import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    <aside className="Menu">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </aside>
  );
}
