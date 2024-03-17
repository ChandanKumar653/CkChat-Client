import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-gray-300 py-8"
      style={{ border: "1px solid transparent", borderTopLeftRadius: "50%" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p>
              This is a modern chat app which does not record or store any
              history. So you don't have to worry about privacy anymore.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/chat">Global Chat</Link>
              </li>
              <li>
                <Link to="/join-room">Join Room</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon className="text-white" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon className="text-white" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon className="text-white" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon className="text-white" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p style={{ fontSize: "0.9rem" }}>
              Email: chandankumar6204995@gmail.com
            </p>
            <p>Phone: 🇮🇳 +917992280550</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
