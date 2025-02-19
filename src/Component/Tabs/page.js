"use client";
import { useState } from "react";
import style from "./Tabs.module.css";

const Tabs = ({ tabsData, children, className,classNameB,classNameC }) => {
  const [activeTab, setActiveTab] = useState(tabsData[0]?.title || "");

  return (
    <div className={`${className} w-full`}>
      <div className={`${className} ${style.tabNames}  flex border-b`}>
        {tabsData.map((tab) => (
          <button
            key={tab.title}
            onClick={() => setActiveTab(tab.title)}
            className={`${
              activeTab === tab.title
                ? classNameB
                : classNameC
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div>{children?.[activeTab] || null}</div>
    </div>
  );
};

export default Tabs;
