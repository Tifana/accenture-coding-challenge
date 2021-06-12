import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>ACCENTURE</h4>
            <ul className="list-unstyled">
              <li>030 8904740</li>
              <li>Friedrichstrasse 78</li>
              <li>10117 Berlin, Germany</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Stuff</h4>
            <ui className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>More Information</h4>
            <ui className="list-unstyled">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Linkedin</li>
            </ui>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
