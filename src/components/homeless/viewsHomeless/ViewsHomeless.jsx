import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHomeless } from "../../../redux/homeless";
import { Card } from "primereact/card";

export default function ViewsHomeless() {
  const [homeless, setHomeless] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeless()).then(({ payload }) => setHomeless(payload));
  }, []);

  console.log("data =>", homeless);

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
            <p>
            usuario creador: {homeles.usuarios.name}

            </p>
          </Card>
        );
      })}
    </div>
  );
}
