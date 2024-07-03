import { useContext } from "react";
import Accordian from "../accordian";
import LightDarkMode from "../light-dark-mode";
import RandomColor from "../random-color";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";
import TabTest from "../custom-tabs/tab-test";

export default function FeatureFlags() {
  const { enabledFlags, loading } = useContext(FeatureFlagsContext);
  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />
    },
    { key: "showTicTacToeBoard", component: <TicTacToe /> },
    { key: "showRandomColorGenerator", component: <RandomColor /> },
    { key: "showAccordian", component: <Accordian /> },
    { key: "showTreeView", component: <TreeView menus={menus} /> },
    { key: "showTabs", component: <TabTest /> },
  ];

  function checkEnableFlags(getCurrentKey: string) {
    return enabledFlags[getCurrentKey];
  }
  if (loading) return <h1>Loading Data</h1>;
  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map(
        (componentItem) =>
          checkEnableFlags(componentItem.key) && componentItem.component
      )}
    </div>
  );
}
