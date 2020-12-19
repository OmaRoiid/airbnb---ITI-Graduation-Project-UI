import React from "react";
import "./Accommodation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AccommodationHeader from "./AccommodationHeader/AccommodationHeader";
import AccommodationHost from "./AccommodationHost/AccommodationHost";
import Footer from "./CustomFooter/CustomFooter";
const Accommodation = () => {
  return (
    <div className="acc">
      <AccommodationHeader />
      <AccommodationHost />
      <Footer />
    </div>
  );
};

export default Accommodation;
