import React, { useContext } from "react";
import { PageContext } from "../../../Context/PageContext";
import "./homeBtn.css";
const HomeBtn = () => {
  const { goTo } = useContext(PageContext);
  return (
    <>
      <button className="home" onClick={() => goTo("landing")}>
        Travel-Lite!
      </button>
    </>
  );
};

export default HomeBtn;
