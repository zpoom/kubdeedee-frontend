import React, { useState, FC } from "react";
import { Icon, Typography, Drawer, Divider } from "antd";
import { MENU_ITEMS } from "../const";

export default () => {
  const { Title } = Typography;
  const [showMenu, setShowMenu] = useState<boolean>(false);

  interface MenuItemPayload {
    icon: string;
    word: string;
  }

  const MenuItem: any = (menuItem: MenuItemPayload) => {
    return (
      <div className="menu-item">
        <Icon type={menuItem.icon} />
        {"  " + menuItem.word}
      </div>
    );
  };
  const Menu: FC = () => {
    return (
      <Drawer
        placement="right"
        closable={false}
        onClose={() => setShowMenu(false)}
        visible={showMenu}
        className="menu"
        width="25vw"
      >
        <Title level={2}>MENU</Title>
        <Divider></Divider>
        {MENU_ITEMS.map(item => {
          return <MenuItem icon={item.icon} word={item.word}></MenuItem>;
        })}
      </Drawer>
    );
  };
  return (
    <div className="navbar">
      <Title level={1} className="icon">
        KUBDEEDEE
        <Icon
          type="menu"
          className="nav-menu"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      </Title>
      <Menu></Menu>
    </div>
  );
};
