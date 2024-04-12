import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Listing from "./components/Listing";
import axios from "axios";
import Header from "./components/Header";
import Likes from "./components/Likes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import { hardCodedListings } from "./components/PropertyService";

function App() {
  ////////FOR DEV 🔽
  // const [listings, setListings] = useState([]);
  const [listings, setListings] = useState(hardCodedListings);

  ////// FOR PRODUCTION 🔼
  const [showListings, setShowListings] = useState(false);
  const [likes, setLikes] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/listings")
  //     .then((response) => setListings(response.data));
  // }, []);
  ////// FOR PRODUCTION comment out useEffect 🔼

  // 1. lifting state up one level to parent
  const handleShowListings = () => {
    setShowListings(true);
  };

  // 2. lifting state up two levels to grandparent
  const handleLike = (listing) => {
    //TODO
    console.log("I was liked.");
    setLikes([listing, ...likes]);
  };
  //testing likes working:
  useEffect(() => {
    console.log(likes);
  }, [likes]);

  return (
    <>
      <BrowserRouter>
        <Header title="Listings App" onShowListings={handleShowListings} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showListings && (
                  <Listing listings={listings} onLike={handleLike} />
                )}
              </>
            }
          />
          <Route
            path="/view-likes"
            element={
              <>
                <Likes likes={likes} />
              </>
            }
          />
          <Route
            path="/contact-us"
            element={
              <>
                <ContactForm />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
