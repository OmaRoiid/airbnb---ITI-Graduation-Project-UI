import React, { useState, useEffect } from "react";
import "./Header.css";
import HeaderCenter from "./Header-center/HeaderCenter";
import HeaderRight from "./Header-right/HeaderRight";
import DatePicker from "./Header-center/DatePicker";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     const top = window.scrollY < 100;

  //     if (top !== isTop) {
  //       setIsTop(top);
  //     }
  //   });
  // }, [isTop]);

  const showdate = (search) => {
    setShowSearch(search);
  };
  const startDate = (start) => {
    setStart(start);
  };
  const endDate = (end) => {
    setEnd(end);
  };

  return (
    <>
      <div className="row">
        <div className="header2">
          <div className="header2__icon col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <img
              src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
              alt=""
            />
          </div>
          <HeaderCenter
            show={showdate}
            startValue={start}
            endValue={end}
          />
          <HeaderRight className="col-3 mt-5" />
          {showSearch && <DatePicker startDate={startDate} endDate={endDate} />}
        </div>
      </div>
    </>
  );
};

export default Header;
