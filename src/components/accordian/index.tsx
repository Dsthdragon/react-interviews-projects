import { useState } from "react";
import data from "./data";
import "./style.css";

function Accordian() {
  const [selected, setSelected] = useState<number>(-1);
  const [enableMultiSelection, setEnableMultiSelection] = useState<boolean>(false);
  const [multiple, setMultiple] = useState<number[]>([]);
  function handleSingleSelection(getCurrentId: number): void {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? -1 : getCurrentId);
  }

  function handleMultipleSelection(getCurrentId: number): void {
    const cpyMultiple = [...multiple];
    const index = cpyMultiple.indexOf(getCurrentId);
    if (index > -1) {
      cpyMultiple.splice(index, 1);
    } else {
      cpyMultiple.push(getCurrentId);
    }
    setMultiple(cpyMultiple);
  }
  console.log(multiple);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection ? "Disable" : "Enable"} Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={() =>
                  enableMultiSelection
                    ? handleMultipleSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {(enableMultiSelection
                ? multiple.includes(dataItem.id)
                : selected === dataItem.id) && (
                <div className="content">
                  <hr />
                  {dataItem.answer}
                </div>
              )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
export default Accordian;
