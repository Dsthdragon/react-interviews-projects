import { useState } from "react";
import { SideMenuData } from "./data";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./style.css";

interface Props {
  item: SideMenuData;
}
export default function MenuItem({ item }: Props) {
  const [displayCurrentChildren, setDisplaCurrentChildren] = useState<
    Record<string, boolean>
  >({});

  function handleToggleChildren(getCurrentLabel: string): void {
    setDisplaCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
    });
    console.log(displayCurrentChildren);
  }

  return (
    <li >
      <div className="menu-item">
        <p>{item.label}</p>
        {item.children && (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        )}
      </div>
      {item.children && displayCurrentChildren[item.label] && (
        <MenuList list={item.children} />
      )}
    </li>
  );
}
