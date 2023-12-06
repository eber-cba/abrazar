import React from "react";
import TextField from "@mui/material/TextField";
const FormularioPaso1 = ({ datosFormulario, handleInputChange }) => {
  return (
    <form>
      <TextField
        label='Nombre'
        name='nombre'
        value={datosFormulario.nombre}
        onChange={handleInputChange}
        margin='normal'
        required
      />
      {/* Agrega más campos del formulario aquí */}
    </form>
  );
};

export default FormularioPaso1;
