/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black w-full">
      <footer className="footer max-w-7xl mx-auto text-white p-4 md:p-10">
        <aside>
          <img   className="w-32 bg-white px-4 py-2 rounded-sm" src="/trade-hub.png" alt="" />
          <p>
            Providing reliable service since 2006
          </p>
        </aside>
        <nav>
          <h6 className="footer-title ">Address</h6>
          <p>Somewhere, no-where</p>
          <p>(Near the planet pluto)</p>
          <h6 className="footer-title ">Phone</h6>
          <a href="tel:+88017xxxxxxx">+88017xxxxxxx</a>
          <a href="tel:+88019xxxxxxx">+88019xxxxxxx</a>
        </nav>

        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="flex gap-2">
            <a  href="https://web.facebook.com/profile.php?id=devjunyaed" className="link link-hover text-3xl text-blue-700 bg-white p-1 rounded-full"><FaFacebook /></a>
            <a href="https://web.facebook.com/messages/e2ee/t/devjunayed" className="link link-hover text-3xl text-violet-800 bg-white p-1 rounded-full"><FaFacebookMessenger /></a>
            <a href="https://wa.me/+88019xxxxxxx" className="link link-hover p-1 rounded-full text-3xl text-green-500 bg-white "><FaSquareWhatsapp /></a>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center border-t border-white bg-black text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Tradehub
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
