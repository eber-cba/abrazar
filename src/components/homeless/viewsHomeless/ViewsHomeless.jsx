import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHomeless } from "../../../redux/homeless";

import { Card } from "primereact/card";
import axios from "axios";

export default function ViewsHomeless() {
  const [homeless, setHomeless] = useState([]);
  const [seguir, setSeguir] = useState(true);
  const [homelesId, setHomelesId] = useState();
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeless()).then(({ payload }) => {
      setHomeless(payload);
    });
  }, []);

  return (
    <div>
      {homeless.map((homeles) => {
        return (
          <Card
            key={homeles.id}
            title={homeles.nombre}
            style={{ width: "25rem", marginBottom: "2em" }}
          >
            <p className="m-0" style={{ lineHeight: "1.5" }}>
              genero: {homeles.genero}
            </p>
            <p>usuario creador: {homeles.usuarios.name}</p>
            <p> id de homeless = {homeles.id}</p>
          </Card>
        );
      })}
    </div>
  );
}
