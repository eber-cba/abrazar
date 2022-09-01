import React from "react";
import { useSelector } from "react-redux";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

import "./perfilUser.css";
export default function PerfilUser() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <div className="bienvenida">
        <h1>Bienvenido {user.name}!</h1>
      </div>

      <div className="seleccion">
        <Link to={"/AddHomeless"}>
          <Button>Agregar Homeless</Button>
        </Link>
        <Button> Descargar excel</Button>
      </div>
    </div>
  );
}
