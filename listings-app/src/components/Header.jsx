import { Link } from "react-router-dom";

export default function Header({ title, onShowListings }) {
  const h1Styles = "text-3xl text-center";
  const headerStyles = "sticky top-0 opacity-90 bg-white w-full p-4";
  const btnStyles = "bg-indigo-700 w-28 h-8 text-white leading-8 mt-2.5";
  const navBtnStyles = "text-indigo-700 w-28 h-8 leading-8 mt-2.5";

  return (
    <>
      <header className={headerStyles}>
        <h1 className={h1Styles}>{title}</h1>
        <button className={btnStyles} onClick={onShowListings}>
          Show Listings
        </button>
        <input
          className="border-2 border-gray-700 m-4"
          type="text"
          placeholder="  postcode"
        />
        <nav>
          <button className={navBtnStyles}>
            <Link to="/">Home</Link>
          </button>
          <button className={navBtnStyles}>
            <Link to="/view-likes">View Likes</Link>
          </button>
          <button className={navBtnStyles}>
            <Link to="/contact-us">Contact Us</Link>
          </button>
        </nav>
      </header>
    </>
  );
}
