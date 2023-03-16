import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl mb-8">
          Get in touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded-lg p-6 flex items-center">
            <FaEnvelope className="text-gray-500 mr-4" />
            <div>
              <h3 className="font-medium text-gray-900">Email</h3>
              <a href="mailto:example@email.com">
                <p className="text-indigo-600 hover:text-indigo-500 transition-colors duration-200">
                  example@email.com
                </p>
              </a>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6 flex items-center">
            <FaPhone className="text-gray-500 mr-4" />
            <div>
              <h3 className="font-medium text-gray-900">Phone</h3>
              <a href="tel:+1234567890">
                <p className="text-indigo-600 hover:text-indigo-500 transition-colors duration-200">
                  (123) 456-7890
                </p>
              </a>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6 flex items-center">
            <FaLinkedin className="text-gray-500 mr-4" />
            <div>
              <h3 className="font-medium text-gray-900">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/example/">
                <p className="text-indigo-600 hover:text-indigo-500 transition-colors duration-200">
                  linkedin.com/in/example
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
