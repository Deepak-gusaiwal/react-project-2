import React, { useState } from "react";
import styles from "./Contact.module.css";
import Button from "../Button/Button";
import { MdMessage, MdCall } from "react-icons/md";

const Contact = () => {


  const onSubmit = (event) => {
    event.preventDefault();
console.log(event.target[0].value)
console.log(event.target[1].value)
console.log(event.target[2].value)
  };
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactTop}>
        <h1>CONTACT US</h1>
        <p>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>

      <div className={styles.contactBottom}>
        <div className={styles.contactForm}>
          <div className={styles.formWrapper}>
            <div className={styles.buttonBox}>
              <Button
                onClick={() => {
                  alert("via support chat");
                }}
                icon={<MdMessage fontSize="24px" />}
                text="VIA SUPPORT CHAT"
              />
              <Button
                onClick={() => {
                  alert("via call");
                }}
                icon={<MdCall fontSize="24px" />}
                text="VIA CALL"
              />
            </div>
            <Button
              onClick={() => {
                alert("via email form");
              }}
              isOutline={true}
              icon={<MdMessage fontSize="24px" />}
              text="VIA EMAIL FORM"
            />
            <form onSubmit={(e)=>{onSubmit(e)}} style={styles.form}>
              <div className={styles.formControl}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
              </div>
              <div className={styles.formControl}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className={styles.formControl}>
                <label htmlFor="message">TEXT</label>
                <textarea name="" id="message" cols="30" rows="8"></textarea>
              </div>
              <div>
                <Button
                  text="Submit"
                />
              </div>
            </form>
          </div>
        </div>

        <div className={styles.contactImgBox}>
          <img
            src="/img/Service 24_7-pana 1.svg"
            alt="Service 24_7-pana 1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
