import React from "react";

const MostrarDatos = ({ datosFormulario }) => {
  return (
    <div>
      <h2>Datos ingresados:</h2>
      <p>Nombre: {datosFormulario.nombre}</p>
      <p>Opcional: {datosFormulario.opcional}</p>
      {/* Muestra más campos del formulario aquí */}
    </div>
  );
};

export default MostrarDatos;
