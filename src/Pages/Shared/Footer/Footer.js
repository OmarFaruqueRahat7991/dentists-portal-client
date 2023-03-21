import React from "react";
import { Link } from "react-router-dom";
import footer from '../../../assets/images/footer.png';


const Footer = () => {
  return (
    <footer className="my-20 h-[500px]  p-10 bg-neutral text-neutral-content bg-gray-300 text-black"
    style={{
        background: `url(${footer})`,
        backgroundSize: 'cover'
    }}
    >
      <div className="footer">
        <div className="text-black">
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div className="text-black">
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div className="text-black">
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </div>
      <div className="text-center   text-black mt-10  grid-flow-col">
    
        <p className="text-3xl">Copyright © 2022 - All right reserved</p>
        
      </div>
    </footer>
  );
};

export default Footer;
