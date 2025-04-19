import "./Menu.css";
import { Link } from "react-router-dom";


const Menu = () => (
  <aside className="Menu">
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/test">Pagina de test</Link>
        </li>
      </ul>
    </nav>

  </aside>
)

export default Menu;