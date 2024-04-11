import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Listing from "./components/Listing";
import axios from "axios";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/listings")
      .then((response) => setListings(response.data));
  }, []);

  const handleLike = () => {
    //TODO
    console.log("I was liked.");
  };
  const h1Styles = "text-3xl text-center";
  return (
    <>
      <h1 className={h1Styles}>Listings App</h1>
      <button>Show listings for </button>
      <input className="border-2 border-gray-700 m-4" type="text" />
      <Listing listings={listings} onlike={handleLike} />
      <p>{}</p>
    </>
  );
}

export default App;
