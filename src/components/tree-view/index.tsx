import { SideMenuData } from "./data";
import MenuList from "./menu-list";

interface Props {
  menus: SideMenuData[];
}
export default function TreeView({ menus }: Props) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}
