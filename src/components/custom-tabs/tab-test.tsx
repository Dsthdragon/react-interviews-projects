import Tabs from "./tabs";

function RandomComponent() {
  return <h1>Outside</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: "tab 1",
      content: <h1> hello </h1>
    },
    {
      label: "tab 2",
      content: <h1> Bye </h1>
    },
    {
      label: "tab 3",
      content: <RandomComponent />
    }
  ];
  function handleChange(currentTabIndex: number) {
    console.log(currentTabIndex);
  }
  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
