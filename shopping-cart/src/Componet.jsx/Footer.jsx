import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiContactsBook2Line } from "react-icons/ri";
import "./footer.css";

const  Footer= ()=> {
  return (
    <footer className="footer">
      <div className="footer-details">
        <div className="footer-icons">
          <a
            href="https://www.instagram.com/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.youtube.com/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
        <div className="footer-contact">
          <RiContactsBook2Line className="footer-icon" />
          <p className="footer-text">Contact us:</p>
          <p className="footer-text">Email: example@example.com</p>
          <p className="footer-text">Phone: +1234567890</p>
          <p className="footer-text">
            Address: 123 Example Street, City, Country
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
