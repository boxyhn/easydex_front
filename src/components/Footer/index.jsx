import "./Footer.css";

import logo from "../../assets/images/lionlogo.png";
const Footer = () => {
  return (
    <footer className="layout footer p-10 bg-base-200 text-base-content">
      <div className="footer-logos">
        <div>
          <img src={logo} className="footer-logo" />
        </div>
        <p className="footer-real-title">
          EasyDex Co.
          <br />
          from Likelion_SNU
        </p>
      </div>
      <div className="sizedBox"></div>
      <div className="footer-routes">
        <div className="footer-route">
          <span className="footer-real-title">Services</span>
          <a className="footer-link link-hover" href="/dexlist">
            DexList
          </a>
          <a className="footer-link link-hover">Design</a>
          <a className="footer-link link-hover">Marketing</a>
          <a className="footer-link link-hover">Advertisement</a>
        </div>
        <div className="footer-route">
          <span className="footer-real-title">Company</span>
          <a className="footer-link link-hover">About us</a>
          <a className="footer-link link-hover">Contact</a>
        </div>
        <div className="footer-route">
          <span className="footer-real-title">Legal</span>
          <a className="footer-link link-hover">Terms of use</a>
          <a className="footer-link link-hover">Privacy policy</a>
          <a className="footer-link link-hover">Cookie policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
