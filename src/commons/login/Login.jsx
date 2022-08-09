import React from "react";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import useInput from "../../hooks/useInput";
import { useDispatch } from "react-redux";
import { login } from "../../redux/users";
import axios from "axios";

export default function Login({ openLogin, handleCloseLogin }) {
  const dispatch = useDispatch();
  const email = useInput("");
  const password = useInput("");
  let form = {
    email: email.value,
    password: password.value,
  };

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ form: form }))
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Dialog
        header="Loggin"
        visible={openLogin}
        onHide={handleCloseLogin}
        breakpoints={{ "960px": "75vw" }}
        style={{ width: "50vw" }}
      >
        <div className="container col-lg-8 col-md col-sm-12">
          <form onSubmit={handleSubmit} className="form">
            <div className="input-group mb-3 grupos">
              <label>
                Email
                <input
                  style={{ fontFamily: "roboto condensed" }}
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                  {...email}
                  required
                />
              </label>
            </div>
            <div className="input-group mb-3 grupos">
              <label>
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  {...password}
                  required
                />
                Contraseña
              </label>
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
