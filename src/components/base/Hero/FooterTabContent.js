import React from "react";

const FooterTabContent = ({ id, activeTab, children }) => {
  return activeTab === id ? (
    <div className="content-tab">{children}</div>
  ) : null;
};

export default FooterTabContent;
