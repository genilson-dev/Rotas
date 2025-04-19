
import "./Content.css";
import { Route, Routes } from "react-router-dom";
import About from "../../views/exemples/About.jsx";
import Home from "../../views/exemples/Home.jsx";

export default function Content() {
  return (
    <div className="Content">
      <main>
        <h1>Conteúdo</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
