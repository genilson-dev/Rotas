import "./Content.css";
import { Route, Routes } from "react-router-dom";
import About from "../../views/exemples/About";
import Home from "../../views/exemples/Home";
import Param from "../../views/exemples/Param";

const Content = (props) => (
  <main className="Content">
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/param:/id" element={<Param />} /> */}
      <Route path="/param/:id" element={<Param />} />
      <Route path="*" element={<h1>404 - Not Found</h1>} />
    </Routes>
  </main>
);

export default Content;
