import React from "react";
import styles from "./Contact.module.css";
import Button from "../Button/Button";
import { MdMessage, MdCall } from "react-icons/md";

const Contact = () => {
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
              icon={<MdMessage fontSize="24px" />}
              text="VIA SUPPORT CHAT"
            />
            <Button icon={<MdCall fontSize="24px" />} text="VIA CALL" />
          </div>
          <Button
            isOutline={true}
            icon={<MdMessage fontSize="24px" />}
            text="VIA EMAIL FORM"
          />
          </div>

          <form style={styles.form}>
            <div className="formController">
                <label htmlFor="name">Name</label>
            <input type="text"  id="name" placeholder="Name"/>
            </div>
          </form>
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
