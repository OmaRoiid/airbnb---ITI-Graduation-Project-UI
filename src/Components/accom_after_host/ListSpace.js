import React from "react";
import ListCountries from "./ListCountries";
import "./ListSpace.css";
import HostPlace from "./host_details/HostPlace";
import HostGuest from "./host_details/HostGuest";
import ChooseProprity from "./host_details/ChooseProprity";
import NumOfBed from "./host_details/NumOfBed";
import NumOfBedrooms from "./host_details/NumOfBedrooms";
import CityState from "./host_details/CityState";
import { useForm } from "react-hook-form";

function ListSpace() {
  // *****validation**********//
  const { register, handleSubmit } = useForm();

  const counter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  //*****print data in console*******
  const onSubmitHandler = data => {
    console.log(data);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-7 col-md-12 ">
          <div className="acco-container">
            <div className="acco-header">
              <h2>Hi, there! Let’s get started listing your space.</h2>
            </div>
            <div className="steps">
              <span>Step1</span>
              <br />
              <h3>What kind of place do you have?</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              {/* place-guest */}
              <div className="place-guest">
                <div className="host-place">
                  <HostPlace register={register} />
                </div>

                {/* host-guest */}
                <div className="host-guest">
                  <HostGuest counter={counter} register={register} />
                </div>
              </div>

              {/* Choose a property type */}
              <ChooseProprity register={register} />

              {/* bedrooms */}
              <div className="bedrooms">
                <NumOfBedrooms counter={counter} register={register} />
              </div>

              {/* Number of beds  */}
              <NumOfBed counter={counter} register={register} />

              {/* Location  */}
              <ListCountries register={register} />

              {/* City and State  */}
              <h5 className="pt-3">City & State</h5>
              <div className="city-state pt-2">
                <CityState register={register} />
              </div>

              {/* address */}
              <div className="place-guest">
                <input
                  type="text"
                  name="address"
                  placeholder="Street"
                  id="Adress"
                  ref={register({ required: true })}
                />
              </div>

              {/* Accomedation Details */}
              <h5 className="pt-3">Accomedation Details</h5>
              <div className="city-state pt-2">
                <div className="price-input">
                  <input
                    type="number"
                    name="price"
                    placeholder="Price Per Nigth $"
                    ref={register({ required: true })}
                  />
                </div>
              </div>
              <div className="place-guest">
                <input
                  type="text"
                  name="describtion"
                  placeholder="Describtion"
                  id="Describe"
                  ref={register({ required: true })}
                />
                <button className="btn btn-primary ml-1">
                  Upload You Place Image
                </button>
              </div>

              {/* Continue btn  */}
              <input
                type="submit"
                value="Continue"
                className="btn btn-primary"
              />
            </form>
          </div>
        </div>
        <div className="col-lg-5 d-md-none d-xl-block flower-img">
          <img
            src="https://a0.muscache.com/airbnb/static/packages/start.b12a70f6.png"
            alt="Flower pic"
          />
        </div>
      </div>
    </div>
  );
}

export default ListSpace;
