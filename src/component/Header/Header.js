import React, { useState } from "react";
import logo from "./wood-logo.svg";
import logo2 from"./wood-logo2.png";
import "./HeaderStyle.scss";
import { Menu, Drawer } from "antd";
import {
  MenuOutlined,
  PhoneOutlined,
  CloseOutlined,
} from "@ant-design/icons";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function toggleDrawer() {
    setIsDrawerOpen(!isDrawerOpen);
  }

  function getItem(label, key, children) {
    return {
      key,
      label,
      children,
    };
  }

  const items = [
    getItem(
      <a className="link-for-res" href="/">
        Home
      </a>,
      "home"
    ),
    getItem(
      <a className="link-for-res" href="/about-us">
        About Us
      </a>,
      "about"
    ),
    getItem(<a className="link-for-res">Services</a>, "services", [
      getItem(
        <a className="link-for-sub" href="/flooring">
          Flooring
        </a>,
        "1"
      ),
      getItem(
        <a className="link-for-sub" href="/floor-raising">
          Floor Raising
        </a>,
        "2"
      ),
      getItem(
        <a className="link-for-sub" href="/carpet-flooring">
          Carpet Flooring
        </a>,
        "3"
      ),
      getItem(
        <a className="link-for-sub" href="/pvc-flooring">
          PVC Flooring
        </a>,
        "11"
      ),
      getItem(
        <a className="link-for-sub" href="/wood-flooring">
          Wood Flooring
        </a>,
        "4"
      ),
      getItem(
        <a className="link-for-sub" href="/all-services">
          All Services
        </a>,
        "5"
      ),
    ]),
    getItem(
      <a className="link-for-res" href="/Product">
        Product
      </a>,
      "product"
    ),
    getItem(
      <a className="link-for-res" href="/blog">
        Blog
      </a>,
      "blog"
    ),
    getItem(
      <a className="link-for-res" href="/contact">
        Contact
      </a>,
      "contact"
    ),
  ];

  return (
    <div className="header">
      <div className="header-content">
        <div className="container">
          <div className="row">
            <div className="logo col-2">
              <a href="/">
                <img src={logo} alt="Logo" />
              </a>
            </div>
            <div className="menu col-6">
            <div>
                <a className="link" href="/">
                  Home
                </a>
              </div>
              <div>
                <a className="link" href="/about-us">
                  About Us
                </a>
              </div>
              <div class="dropdown">
                <a class="link">Services</a>
                <div class="dropdown-content">
                  <div className="div-for-a">
                    <a href="/flooring" class="link-drop">
                      Flooring
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="/floor-raising" class="link-drop">
                      Floor Raising
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="/carpet-flooring" class="link-drop">
                      Carpet Flooring
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="pvc-flooring" class="link-drop">
                      PVC Flooring
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="wood-flooring" class="link-drop">
                      Wood Flooring
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="all-services" class="link-drop">
                      All Service
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <a className="link" href="/Product">
                  Product
                </a>
              </div>
              <div>
                <a className="link" href="/blog">
                  Blog
                </a>
              </div>
              <div>
                <a className="link" href="/contact">
                  Contact
                </a>
              </div>
              </div>
              <div className="phone d-flex col-3">
              <div className="icon" onClick={toggleDrawer}>
                {isDrawerOpen ? <CloseOutlined /> : <MenuOutlined />}
              </div>
              <div className="phone-number">
                <PhoneOutlined /> +1 (234) 567890
              </div>
              </div>
          </div>
        </div>
      </div>
      <div className="drawer" >
        <Drawer
          visible={isDrawerOpen}
          onClose={toggleDrawer}
          placement="left"
         >
          <div className="drawer-menu">
            <div className="drawer-header">
              <div className="drawer-logo">
                 <a href="/">
                  <img src={logo2} />
                 </a>
              </div>
              <div className="drawer-close" onClick={toggleDrawer}>
              <CloseOutlined />
              </div>
            </div>
              <Menu mode="vertical" theme="light" defaultSelectedKeys={["home"]}>
                 {items.map((item) => (
                  <Menu.SubMenu
                  key={item.key}
                  title={<span className="submenu-title">{item.label}</span>}
                  >
                  {item.children &&
                  item.children.map((child) => (
                  <Menu.Item key={child.key}>{child.label}</Menu.Item>
                  ))}
                  </Menu.SubMenu>
                ))}
              </Menu>
          </div>
          <div className="drawer-list">
            <a>@2023 wood</a>
          </div>
        </Drawer>
      </div>          
    </div>
    );
    }

export default Header; 
