import { useState } from "react";
import Modal from "../modal/Modal";
import "./Navbar.css";

const Navbar = () => {
  //state show
  const [show, setShow] = useState(false);

  return (
    <>
      {/*ternary opration*/}

      {show === true ? <Modal /> : null}
      <nav className="navbar">
        <h3 className="brand">K_F</h3>
        <div className="menu">
          <a href="" className="menu_item">
            home
          </a>
          <a href="" className="menu_item">
            about
          </a>
          <a href="" className="menu_item">
            contact
          </a>
          <a href="" className="menu_item">
            gallery
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
