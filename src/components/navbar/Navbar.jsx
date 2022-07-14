import React, { useState } from "react";
import { Link } from "react-router-dom";
import Register from "../../commons/register/Register";
import "./navbar.css";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <a className="navbar-brand">Abraza</a>
            <div>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Iniciar sesion
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item">Logearse</a>
                  </li>
                  <li>
                    <span onClick={handleOpen} className="dropdown-item">
                      Registrarse
                    </span>
                    <Register open={open} handleClose={handleClose} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
