import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Menu as="nav" pointing secondary>
      <Menu.Item name="Services" as={NavLink} to="/services" />
      <Menu.Item name="Staff" as={NavLink} to="/staff" />
    </Menu>
  );
}
export default Header;
