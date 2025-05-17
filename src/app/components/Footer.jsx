import React from "react";

const Footer = () => {
  return (
    <footer className="footer border-t border-t-[#33353F] border-l-transparent border-r-transparent text-white z-10">
      <div className="container mx-auto px-4 sm:px-8 py-6 flex flex-col sm:flex-row justify-between items-center text-[#eb94cf] dark:text-[#03e9f4]">
        <span className="text-sm sm:text-base md:text-lg">Marito is the besto!</span>
        <p className="text-xs sm:text-sm md:text-base text-slate-400 mt-2 sm:mt-0">
          ©2025 | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
