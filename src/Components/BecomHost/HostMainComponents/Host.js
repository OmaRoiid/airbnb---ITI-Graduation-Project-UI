import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import CardOne from "../hostCards/CardOne";
import CardTwo from "../hostCards/CardTwo";
import CardTree from "../hostCards/CardTree";
import CardFour from "../hostCards/CardFour";
import CardFive from "../hostCards/CardFive";

function Host({ navbar }) {
  const breakPoints = [
    { width: 767, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
  ];
  return (
    <>
      {" "}
      <div className="container-fluid">
        <div className="row mt-5 pb-5 test">
          <div className="col-xl-4 col-md-5 col-12">
            <div className="host-container">
              <h1 className="host-header">Host your home on Airbnb</h1>
              <div className="host-details">
                <p className="host-parg">
                  Join a vibrant community of hosts, create memorable
                  experiences for travelers, and <br></br> earn money to pursue
                  the things you love.
                </p>
              </div>
              <div
                className={
                  navbar ? "host-btn btn-trans fixed-top " : "host-btn "
                }
              >
                <Link to="/signup">
                  <button
                    className={
                      navbar
                        ? "getstarted-btn getstarted-trans "
                        : "getstarted-btn "
                    }
                  >
                    Get started
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-md-7 col-12">
            <Carousel breakPoints={breakPoints}>
              <CardOne />
              <CardTwo />
              <CardTree />
              <CardFour />
              <CardFive />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
export default Host;
