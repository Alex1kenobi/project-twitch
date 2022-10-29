import React, { useState, useContext } from "react";
/* import { Context } from "../store/appContext"; */
import "../../styles/user-profile.css";
/* 
import { MdLocationPin, MdEmail } from "react-icons/md"; */

export const UserProfile = () => {
/*   const { actions, store } = useContext(Context); */
  const [info, setInfo] = useState({
    email: store.currentuser.email,
    password: "",
    confirmPassword: "",
    name: store.currentuser.name,
  });
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-us">
      <div className="contact-title">
        <h1>Client Zone</h1>
      </div>
      <div className="contact-box">
        {/* Form */}
        <div className="contact contact-form">
          <h3>Your profile</h3>
          <form>
            <div className="formBox">
              <div className="row50">
                <div className="inputBox">
                  <span>First Name</span>
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    defaultValue={store.currentuser.name}
                    onChange={(e) => {
                      setInfo({ ...info, name: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="row50">
                <div className="inputBox">
                  <span>Email</span>
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                    autoComplete="off"
                    defaultValue={store.currentuser.email}
                    onChange={(e) => {
                        setInfo({ ...info, email: e.target.value });
                      }}
                  />
                </div>
              </div>

              <div className="row100">
                <div className="inputBox">
                  <span>Preguntas</span>
                  <textarea
                    placeholder="Write your message here..."
                    className="form-control"
                  ></textarea>
                </div>
              </div>

              <div className="row100">
                <div className="inputBox">
                  <input
                    type="button"
                    value="Save Changes"
                    onClick={() => actions.changeUser(info)}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
