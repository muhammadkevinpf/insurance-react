import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { showConfirm } from "../../util/insurance";
const { SubMenu } = Menu;

function NavDesktop() {
  const getPathName = window.location.pathname.split("/")[1];

  const dashboardNav = () =>
    getPathName !== "dashboard" ? (
      <SubMenu title="Produk">
        <Menu.ItemGroup title="Kesehatan">
          <Menu.Item key="kesehatan:1">
            <Link to="/kesehatan/regular">Regular</Link>
          </Menu.Item>
          <Menu.Item key="kesehatan:2">
            <Link to="/kesehatan/premium">Premium</Link>
          </Menu.Item>
          <Menu.Item key="kesehatan:3">
            <Link to="/kesehatan/vip">VIP</Link>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Pendidikan">
          <Menu.Item key="pendidikan:1" onClick={() => showConfirm("regular")}>
            Regular
          </Menu.Item>
          <Menu.Item key="pendididkan:2" onClick={() => showConfirm("premium")}>
            Premium
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    ) : (
      <SubMenu title="Produk">
        <Menu.Item key="kesehatan">
          <Link to="/dashboard/kesehatan">Kesehatan</Link>
        </Menu.Item>
        <Menu.Item key="pendidikan">
          <Link to="/dashboard/pendidikan">Pendidikan</Link>
        </Menu.Item>
      </SubMenu>
    );

  return (
    <nav className="navbar-container">
      <div className="nav-logo">
        <span>
          <strong>IN</strong>surance
        </span>
      </div>

      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        {dashboardNav()}
        <Menu.Item key="dashboard">
          <Link to="/dashboard/kesehatan">Dashboard</Link>
        </Menu.Item>
      </Menu>
    </nav>
  );
}

export default NavDesktop;
