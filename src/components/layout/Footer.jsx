import { Link } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-primary">Urban Meth</h2>
            <p className="mt-4 text-gray-400">
              Urban Meth is a modern e-commerce platform where you can discover
              quality products with a smooth shopping experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/shop" className="hover:text-primary">
                  Shop
                </Link>
              </li>

              <li>
                <Link to="/cart" className="hover:text-primary">
                  Cart
                </Link>
              </li>

              <li>
                <Link to="/login" className="hover:text-primary">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>

            <p>Email: support@urbanmeth.com</p>
            <p>Phone: +880 1234-567890</p>
            <p>Dhaka, Bangladesh</p>

            {/* Social Links */}
            <div className="flex gap-4 mt-5 text-xl">
              <a href="#" className="hover:text-primary">
                <FaFacebookF />
              </a>

              <a href="#" className="hover:text-primary">
                <FaInstagram />
              </a>

              <a href="#" className="hover:text-primary">
                <FaLinkedinIn />
              </a>

              <a href="#" className="hover:text-primary">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Urban Meth. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;