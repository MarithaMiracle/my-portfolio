import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button onClick={selectTab} className="group">
      <p
        className={`
          mr-3 font-semibold transition-all duration-300
          group-hover:text-[#eb94cf] dark:group-hover:text-[#03e9f4]
          group-hover:drop-shadow-[0_0_6px_#eb94cf] dark:group-hover:drop-shadow-[0_0_6px_#03e9f4]
        `}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className={`h-1 mt-2 mr-3 transition-all 
          ${active ? "bg-[#eb94cf] dark:bg-[#03e9f4]" : "bg-transparent"}
        `}
      />
    </button>
  );
};

export default TabButton;
