import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <footer className="bg-dark text-center text-lg-start">
          {/* <!-- Copyright --> */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <a className="text-light" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
      </div>
    </>
  );
}
