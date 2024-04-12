import { Link } from "react-router-dom";
export default function Navbar() {
  const navButtonStyles = "";
  return (
    <nav>
      <button className={navButtonStyles}>
        <Link to="/">Home</Link>
      </button>
      <button className={navButtonStyles}>
        <Link to="/listings">Listings</Link>
      </button>
      <button className={navButtonStyles}>
        <Link to="/shopping-list">Shopping List</Link>
      </button>
      <button className={navButtonStyles}>
        <Link to="/contact-us">Contact Us</Link>
      </button>
    </nav>
  );
}
