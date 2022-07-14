import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import "./register.css";

export default function Register({ open, handleClose }) {
  return (
    <div>
      <Dialog
        header="Registro"
        visible={open}
        onHide={handleClose}
        breakpoints={{ "960px": "75vw" }}
        style={{ width: "50vw" }}
      >
        <div className="container col-lg-8 col-md col-sm-12">
          <form className="form" action="">
            <div className="input-group mb-3 grupos">
              <span className="p-float-label">
                <InputText id="nombre" />
                <label htmlFor="nombre">Nombre</label>
              </span>
            </div>
            <div className="input-group mb-3 grupos">
              <span className="p-float-label">
                <InputText id="mail" />
                <label htmlFor="mail">Email</label>
              </span>
            </div>
            <div className="input-group mb-3 grupos">
              <span className="p-float-label">
                <Password id="contraseña" promptLabel toggleMask />
                <label htmlFor="contraseña">Contraseña</label>
              </span>
            </div>
            <div className="input-group mb-3 grupos">
              <Button label="Guardar"/>
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
}
