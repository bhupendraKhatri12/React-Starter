import React, { useState } from 'react';
import './tabs.css'

const Tab = ({ label, activeTab, onClick }) => {
  const isActive = activeTab === label;
  const tabClass = isActive ? 'tab active' : 'tab';

  return (
    <div className={tabClass} onClick={() => onClick(label)}>
      {label}
    </div>
  );
};

const TabContent = ({ activeTab }) => {
  const contentMap = {
    tab1: <div><h1>What is Lorem Ipsum?</h1><br/>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>,
    tab2:  <div><h1>What is Lorem Tab 2?</h1><br/>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>,
    tab3: <div><h1>What is Lorem Tab 3</h1><br/>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>,
  };

  const content = contentMap[activeTab];

  return <div className="tab-content">{content}</div>;
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabLabel) => {
    setActiveTab(tabLabel);
  };

  return (
    <div>
      <div className="tabs">
        <Tab label="tab1" activeTab={activeTab} onClick={handleTabClick} />
        <Tab label="tab2" activeTab={activeTab} onClick={handleTabClick} />
        <Tab label="tab3" activeTab={activeTab} onClick={handleTabClick} />
      </div>
      <TabContent activeTab={activeTab} />
    </div>
  );
};

export default Tabs;
