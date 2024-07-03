import { ReactNode, useState } from "react";
import "./tabs.css";
interface TabContent {
  label: string;
  content: ReactNode;
}

interface Props {
  tabsContent: TabContent[];
  onChange: (currentTabIndex: number) => void;
}
export default function Tabs({ tabsContent, onChange }: Props) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  function handleOnClick(getCurrentIndex: number) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }
  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            key={tabItem.label}
            onClick={() => handleOnClick(index)}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
