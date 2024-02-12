import React from "react";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";

import ContactHeader from "../ContactHeader/ContactHeader";
import Button from "../Button/Button";
import styles from "./ContactSection.module.css";


const ContactSection = () => {
  return (
    <section className="container">
      <ContactHeader />

      <div className={styles.contact_body}>
        <div className={styles.contact_from}>
          <div className={styles.top_btns}>
            <Button
              btnText="VIA SUPPORT CHAT"
              icon={<MdMessage fontSize={"20px"} />}
            />
            <Button btnText="VIA CALL" icon={<MdCall fontSize={"20px"} />} />
          </div>
          <Button
            isOutline={true}
            btnText="VIA EMAIL FORM"
            icon={<MdMessage fontSize={"20px"} />}
          />


          <form>
              <div className={styles.input_controler}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name"  />
              </div>
              <div className={styles.input_controler}>
                <label htmlFor="email">E-Miil</label>
                <input type="email" name="email"  />
              </div>
              <div className={styles.input_controler}>
                <label htmlFor="text">TEXT</label>
                <textarea name="text" rows={8} />
              </div>
              <div style={{
                display:"flex",
                justifyContent:'end'
              }}>
              <Button
              btnText="SUBMIT"
            />
              </div>
          </form>
        </div>
        <div className="contact_img">
          <img src="../../public/images/Service 24_7-pana 1.svg" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
