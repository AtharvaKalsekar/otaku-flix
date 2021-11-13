import React, { useState } from "react";
import Body from "./Body/Body";
import Header from "./Header/Header";
import "./Tabs.css";
import { Tab, TabType } from "./utils";

type Props = {
  tabs: Tab[];
};

const Tabs = ({ tabs }: Props) => {
  const [activeTab, setActiveTab] = useState<TabType>(tabs && tabs[0].type);

  const onClickHead = (tabType: TabType) => {
    setActiveTab(tabType);
  };

  const getHead = (tab: Tab): JSX.Element => {
    let isActive = activeTab === tab.type;
    let styleClass = isActive ? "item-active" : "item";
    return (
      <div className={styleClass} onClick={() => onClickHead(tab.type)}>
        {tab.title}
      </div>
    );
  };

  const getBody = (): JSX.Element => {
    let tab: Tab | undefined = tabs.find((tab) => activeTab === tab.type);
    return tab ? tab.body : <></>;
  };

  return (
    <div className="tabs">
      <div className="tab-list">
        {tabs.map((tab) => {
          return getHead(tab);
        })}
      </div>
      <div>{getBody()}</div>
    </div>
  );
};

export default Tabs;
