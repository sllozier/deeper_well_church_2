import React from "react";

const FooterTabItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li
      onClick={handleClick}
      className={activeTab === id ? "tab is-active" : ""}
    >
      <a>{title}</a>
    </li>
  );
};
export default FooterTabItem;
