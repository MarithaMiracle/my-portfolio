import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white dark:border-[#03e9f4]"
    : "text-[#ADB7BE] border-slate-600 dark:hover:border-[#03e9f4] hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-3 sm:px-5 py-2 text-sm sm:text-base cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
