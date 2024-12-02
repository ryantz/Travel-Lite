import React, { useCallback, useState } from "react";
import LogPage from "../../log-sign-page/LogPage";
import SignPage from "../../log-sign-page/SignPage";
import "./logSign.css";

const LogSign = () => {
  //const [sClick, setsClick] = useState(false);
  //const [lClick, setlClick] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const toggleModal = useCallback((modalType) => {
    setActiveModal((current) => (current === modalType ? null : modalType));
  }, []);

  return (
    <>
      <div className="logsign-wrap">
        <button
          className="logsign-btns"
          id="sign-btn"
          onClick={() => toggleModal("signup")}
        >
          sign up
        </button>
        <button
          className="logsign-btns"
          id="log-btn"
          onClick={() => toggleModal("login")}
        >
          login
        </button>
      </div>
      {activeModal === "signup" && (
        <SignPage onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "login" && (
        <LogPage onClose={() => setActiveModal(null)} />
      )}
    </>
  );
};

export default LogSign;
