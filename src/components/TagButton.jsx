import React from "react";

const TagButton = ({ tag }) => {
  return (
    <button className="rounded-2xl bg-blue-200 hover:bg-blue-300 dark:bg-black dark:hover:bg-gray-400">
      <p className="text-[13px] m-2 ">{tag}</p>
    </button>
  );
};

export default TagButton;
