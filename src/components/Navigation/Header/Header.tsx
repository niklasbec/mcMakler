import React, { useState } from "react";
import { ReactComponent as BurgerMenu } from "../../../images/svg/burger.svg";
import { ReactComponent as Message } from "../../../images/svg/message.svg";
import { ReactComponent as Support } from "../../../images/svg/support.svg";
import { ReactComponent as User } from "../../../images/svg/user.svg";
import { ReactComponent as Logout } from "../../../images/svg/logout.svg";
import Logo from "../../../images/svg/logo.svg";
import { motion as m } from "framer-motion";

const Header = () => {
  const [menuBool, setMenuBool] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuBool(!menuBool);
  };

  const burgerMenuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <div className="header">
      <BurgerMenu className="burger-menu-icon" onClick={toggleMenu} />
      <img src={Logo} className="logo" width="100px" />
      <Message className="notification-icon hidden-above-medium" />

      <div className="header-right hidden-below-medium">
          <div className="contact-support">
            <Support /> <p>Contact Support</p>
          </div>
          <Message className="notification-icon" />
          <User />
          <Logout />
      </div>

      <m.div
        animate={menuBool ? "open" : "closed"}
        transition={{ duration: 0.3 }}
        variants={burgerMenuVariants}
        className="menu-foldout"
      >
        <div className="menu-foldout-main">
          <BurgerMenu className="burger-menu-icon" onClick={toggleMenu} />
          <div className="menu-items">
            <div className="menu-item" onClick={toggleMenu}>
              <a className="nostyle" href="#projects">
                <Support /> <p>Contact Support</p>
              </a>
            </div>
            <div className="menu-item" onClick={toggleMenu}>
              <a className="nostyle" href="#medium">
                <User /> <p>Dashboard</p>
              </a>
            </div>
            <div className="menu-item" onClick={toggleMenu}>
              <a className="nostyle" href="mailto:niklasbeckerr@gmail.com">
                <Logout width="25px" /> <p>Logout</p>
              </a>
            </div>
          </div>
        </div>
        <div className="menu-foldout-rest" onClick={toggleMenu} />
      </m.div>
    </div>
  );
};

export default Header;
