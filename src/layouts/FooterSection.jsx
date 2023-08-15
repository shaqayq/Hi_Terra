import React from "react";
import "../style/layout/footer.css";
import logo from "../images/logo.jpeg";
import {TfiEmail} from 'react-icons/tfi'
import {BsTelephoneX , BsApple ,BsAndroid} from 'react-icons/bs'

export default function FooterSection() {
  return (
    <>
      <hr />

      <div className="footer">
  
        <div id="footer-logo">
          <img src={logo} alt="logo" />
          <p>
            It is a long established fact that from will be distracted by the
            readable from when looking.
          </p>
         
          <p id="footer-txt">
            <i><TfiEmail/></i>
          
         saasup@gmail.com
            <br />
            mail@saasup.com
          </p>
          <p  id="footer-txt">
          <i><BsTelephoneX/></i> +987 6541 3654
            <br />
            +001 6547 6589
          </p>
        </div>

        <div id="footer-pages">
          <h1 id='footer-heading'>Pages</h1>
          <hr />
          <ul className="footer-list">
            <li>Home</li>
            <li>About us</li>
          </ul>
        </div>

        <div id="footer-feature">
          <h1 id='footer-heading'>Feature</h1>
          <hr />
          <ul className="footer-list">
            <li>Inventory System</li>
            <li>Soil Analysis</li>
          </ul>
        </div>
        <div id="footer-message">
          <h6>Download</h6>
          <p><b>Its suitabel to all devices and screens.</b></p>
          <p>
          It is a long established fact
           that a reader will be distracted layout.
          </p>
          <div id='apps'>
            <button id="apple"><BsApple/>App Store</button>
            <button id="android"><BsAndroid/>Play Store</button>

          </div>
        </div>
      </div>
    </>
  );
}
