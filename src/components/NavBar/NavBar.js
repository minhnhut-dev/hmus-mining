import { Link } from "components";
import "./NavBar.css";

const categories = [
  "Fruits",
  "Vegetables",
  "Pasta, Rice",
  "Meat",
  "Fish",
  "Dairy",
];

const NavBar = () => (
  <nav className="nav-bar">
    <h2>Categories</h2>
    <div className="nav-bar__list">
      {categories.map((category) => (
        <Link to="/" className="nav-bar__item" key={category}>
          {category}
        </Link>
      ))}
    </div>
  </nav>
);

export default NavBar;
