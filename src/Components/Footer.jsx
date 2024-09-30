import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
          
          {/* Company Information */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul>
              <li className="mb-2 hover:text-white cursor-pointer">About Us</li>
              <li className="mb-2 hover:text-white cursor-pointer">Careers</li>
              <li className="mb-2 hover:text-white cursor-pointer">Press</li>
              <li className="mb-2 hover:text-white cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul>
              <li className="mb-2 hover:text-white cursor-pointer">Help Center</li>
              <li className="mb-2 hover:text-white cursor-pointer">Safety Information</li>
              <li className="mb-2 hover:text-white cursor-pointer">Cancellation Options</li>
              <li className="mb-2 hover:text-white cursor-pointer">COVID-19 Response</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul>
              <li className="mb-2 hover:text-white cursor-pointer">Account Management</li>
              <li className="mb-2 hover:text-white cursor-pointer">Payments</li>
              <li className="mb-2 hover:text-white cursor-pointer">Order History</li>
              <li className="mb-2 hover:text-white cursor-pointer">Refund Policy</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="space-y-2">
              <a href="#" className="flex items-center hover:text-white">
              <i className="fa-brands fa-facebook pr-3"></i>
                Facebook
              </a>
              <a href="#" className="flex items-center  hover:text-white">
              <i class="fa-brands fa-twitter pr-3"></i>
                Twitter
              </a>
              <a href="#" className="flex items-center hover:text-white">
              <i class="fa-brands fa-instagram pr-3"></i>                Instagram
              </a>
              <a href="#" className="flex items-center hover:text-white">
              <i class="fa-brands fa-linkedin pr-3"></i>                LinkedIn
              </a>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-white font-bold mb-4">Subscribe</h4>
            <p className="mb-4">Get the latest updates and offers.</p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2 mb-2 sm:mb-0 sm:mr-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Subscribe
              </button>
            </form>
          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;
