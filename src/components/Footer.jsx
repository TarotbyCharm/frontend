import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Heart } from "lucide-react";
import { fullLogo } from "@/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/40 backdrop-blur-lg border-t border-purple-500/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-serif text-white">
              <img src={fullLogo} className="h-12" alt="TarotByCharm" />
            </Link>
            <p className="text-gray-300 text-sm">
              Unlock the mysteries of your destiny through mystical tarot
              readings.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-purple-300 hover:text-purple-200 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-purple-300 hover:text-purple-200 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-purple-300 hover:text-purple-200 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-purple-300 hover:text-purple-200 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-purple-300 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-purple-300 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-purple-300 transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-purple-300 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-serif text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/free-reading"
                  className="text-gray-300 hover:text-purple-300 transition-colors text-sm"
                >
                  Free Reading
                </Link>
              </li>
              <li>
                <Link
                  to="/services/love-reading"
                  className="text-gray-300 hover:text-purple-300 transition-colors text-sm"
                >
                  Love Reading
                </Link>
              </li>
              <li>
                <Link
                  to="/services/career-reading"
                  className="text-gray-300 hover:text-purple-300 transition-colors text-sm"
                >
                  Career Reading
                </Link>
              </li>
              <li>
                <Link
                  to="/services/spiritual-guidance"
                  className="text-gray-300 hover:text-purple-300 transition-colors text-sm"
                >
                  Spiritual Guidance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">
                Email: contact@tarotbycharm.com
              </li>
              <li className="text-gray-300 text-sm">
                Phone: +1 (555) 123-4567
              </li>
              <li className="text-gray-300 text-sm">
                Hours: Mon-Fri 9am-6pm EST
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} TarotByCharm. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-purple-300 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-purple-300 transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-purple-400" /> by
              TarotByCharm
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
