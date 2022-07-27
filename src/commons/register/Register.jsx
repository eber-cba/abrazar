import React from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import useInput from "../../hooks/useInput";
import { useDispatch } from "react-redux";
import { register } from "../../redux/users";
import axios from "axios";

import "./register.css";

export default function Register({ open, handleClose }) {
  const dispatch = useDispatch();

  const name = useInput("");
  const email = useInput("");
  const password = useInput("");

  //
  let form = {
    name: name.value,
    email: email.value,
    password: password.value,
  };
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ form: form }))
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

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
          <form onSubmit={handleSubmit} className="form">
            <div className="input-group mb-3 grupos">
              <span className="p-float-label">
                <InputText name="name" id="nombre" {...name} />
                <label htmlFor="nombre">Nombre</label>
              </span>
            </div>
            <div className="input-group mb-3 grupos">
              <span className="p-float-label">
                <InputText id="mail" name="email" {...email} />
                <label htmlFor="mail">Email</label>
              </span>
            </div>
            <div className="input-group mb-3 grupos">
              <span className="p-float-label">
                <Password
                  id="contraseña"
               
                  name="password"
                  {...password}
                />
                <label htmlFor="contraseña">Contraseña</label>
              </span>
            </div>
            <div className="input-group mb-3 grupos">
              <Button type="submit" label="Guardar" />
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
}
