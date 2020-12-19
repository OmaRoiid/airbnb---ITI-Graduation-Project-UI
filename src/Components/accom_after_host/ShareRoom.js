import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function ShareRoom() {
  const Card = () => {
    return (
      <>
        <div
          className="_6ikqekk"
          style={{
            height: "64px",
            width: "96px",
            backgroundImage:
              "url(https://a0.muscache.com/pictures/acbbe4a6-18b3-4c73-a7f6-891dbdb4d97b.jpg)",
            backgroundSize: "cover",
          }}
        ></div>
      </>
    );
  };
  return (
    <section className="p-3">
      <RadioGroup
        row
        aria-label="position"
        name="position"
        defaultValue="top"
        style={{
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h1>How would you like to start?</h1>
        <div className="share-room">
          <Card />
          <FormControlLabel
            style={{ margin: "0" }}
            value="Create a new listing"
            control={<Radio color="primary" />}
            label="Create a new listing"
          />
        </div>
        <h3>Finish a listing in progress</h3>
        <div className="share-room">
          <Card />
          <FormControlLabel
            style={{ margin: "0" }}
            value="Entire home"
            control={<Radio color="primary" />}
            label="Entire home"
          />
        </div>
        <h3>Duplicate an existing listing</h3>
        <span>
          You’ll get to review the duplicated listing before publishing.
        </span>
        <div className="share-room">
          <br />
          <Card />
          <FormControlLabel
            style={{ margin: "0" }}
            value="Duplicate"
            control={<Radio color="primary" />}
            label="Entire home"
          />
        </div>
      </RadioGroup>
      <div className="text-center">
        <button className="btn btn-primary btn-lg ">Next</button>
      </div>
    </section>
  );
}

export default ShareRoom;
