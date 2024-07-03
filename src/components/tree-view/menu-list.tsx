import { SideMenuData } from "./data";
import MenuItem from "./menu-item";
import "./style.css";

interface Props {
  list: SideMenuData[];
}

export default function MenuList({ list = [] }: Props) {
  return (
    <ul className="menu-list-container">
      {list.length && list.map((listItem) => <MenuItem item={listItem} />)}
    </ul>
  );
}
