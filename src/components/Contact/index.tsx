import React, { useState } from "react";
import "./style.scss";
import LongArrow from "../Icons/LongArrow";
import MaterialSymbolsCallOutlineRounded from "../Icons/MaterialSymbolsCallOutlineRounded";
import Email from "../Icons/Email";
import MaterialSymbolsLocationOnOutlineRounded from "../Icons/MaterialSymbolsLocationOnOutlineRounded";
import InputCustom from "../InputCustom";

const Contact = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: any) => {
    if (e.target.value !== "") {
      e.currentTarget.classList.add("not-vide");
    } else {
      e.currentTarget.classList.remove("not-vide");
    }
    setValue(e.target.value);
  };
  return (
    <section id="contact" className="contact_wrapper">
      <div className="contact_container">
        <div>
          <h2 className="sixCaps">
            Wanna work with me? <LongArrow />
          </h2>
          <span>Or just say hello!</span>
          <div className="informations">
            <span>
              <MaterialSymbolsLocationOnOutlineRounded />
              Antananarivo, Madagascar
            </span>
            <a href="tel:0344568422">
              <MaterialSymbolsCallOutlineRounded />+ 261 34 85 888 66
            </a>
            <a href="mailto:mampirak@gmail.com">
              <Email />
              mampirak@gmail.com
            </a>
          </div>
        </div>
        <div className="contact_form">
          <form action="">
            <p>
              FOR BOOKINGS, COMMERCIAL OR GENERAL ENQUIRIES - Please use the
              contact form below.
            </p>
            <div className="input-wrapper">
              <InputCustom label="Name" name="name" />
              <InputCustom label="Lastname" name="lastname" />
              <InputCustom label="Email" name="email" />
              <InputCustom label="Subject" name="subject" />
              <div className="input-container">
                <textarea
                  name="message"
                  id="message-text"
                  value={value}
                  onChange={handleChange}
                  rows={6}
                ></textarea>
                <label htmlFor="message-text">Message</label>
              </div>
            </div>
            <button>SEND</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
