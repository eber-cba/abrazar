import React from "react";

const Result = ({ step, formData }) => {
  if (step !== 3) return null;

  const {
    paiz,
    img,
    nombre,
    apellido,
    edad,
    apodo,
    genero,
    provincia,
    localidad,
    necesidadUrgente,
    otraNecesidad,
    sueños,
    trabajo,
    educacion,
    problemaDeSalud,
    medicamentos,
    telefono,
    datoExtra,
    contacto,
  } = formData;

  return (
    <div>
      <p>Nacionalidad: {paiz.value}</p>
      <p>Imagen: {img.value}</p>
      <p>Nombre: {nombre.value}</p>
      <p>Apellido: {apellido.value}</p>
      <p>Edad: {edad.value}</p>
      <p>Apodo: {apodo.value}</p>
      <p>Género: {genero}</p>
      <p>Provincia: {provincia.value}</p>
      <p>Localidad: {localidad.value}</p>
      <p>Necesidad Urgente: {necesidadUrgente.value}</p>
      <p>Otras Necesidades: {otraNecesidad.value}</p>
      <p>Sueños: {sueños.value}</p>
      <p>Trabajo: {trabajo.value}</p>
      <p>Educación: {educacion.value}</p>
      <p>Problema de Salud: {problemaDeSalud.value}</p>
      <p>Medicamentos: {medicamentos.value}</p>
      <p>Teléfono: {telefono.value}</p>
      <p>Dato extra: {datoExtra.value}</p>
      <p>Nombre de contacto: {contacto.value}</p>
    </div>
  );
};

export default Result;
