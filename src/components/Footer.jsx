import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-4">
      <div className="flex flex-col justify-center items-center py-3">
        {" "}  
        <div className="border-t border-blue-500 w-2/4 mb-4"></div>
      </div>


      <div className="flex justify-center gap-6 text-blue-700">
        {/* Facebook Icon */}
        <a
          href="https://web.facebook.com/julker.nayeen.karim/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaFacebook size={24} />
        </a>
        {/* GitHub Icon */}
        <a
          href="https://github.com/jnkarim"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub size={24} />
        </a>
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/julker-nayeen-karim-1ba51628a/e"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <div className="text-center mt-4">
        <p>
          Contact:{" "}
          <a href="mailto:julkernkarim@gmail.com" className="text-[#10B981]">
            julkernkarim@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
