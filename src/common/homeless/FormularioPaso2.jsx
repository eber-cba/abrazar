import React from "react";
import TextField from "@mui/material/TextField";
const FormularioPaso2 = ({ datosFormulario, handleInputChange }) => {
  return (
    <form>
      <TextField
        label='Opcional'
        name='opcional'
        value={datosFormulario.opcional}
        onChange={handleInputChange}
        margin='normal'
      />
      {/* Agrega más campos del formulario opcional aquí */}
    </form>
  );
};

export default FormularioPaso2;
