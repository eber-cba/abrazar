import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPaises,
  fetchProvincias,
  fetchLocalidades,
  setGenero,
} from "../../redux/regiones";
import useInput from "../../hooks/useInput";
import axios from "axios";

const FormularioCompleto = ({ handleInputChange }) => {
  const img = useInput("");
  const countries = useSelector((state) => state.regiones.paises);
  const paiz = useInput("");
  const nombre = useInput("");
  const apellido = useInput("");
  const edad = useInput("");
  const apodo = useInput("");
  const genero = useSelector((state) => state.regiones.genero);
  const provi = useSelector((state) => state.regiones.provincias);
  const locali = useSelector((state) => state.regiones.localidades);
  const provincia = useInput("");
  const localidad = useInput("");
  const necesidadUrgente = useInput("");
  const otraNecesidad = useInput("");
  const sueños = useInput("");
  const trabajo = useInput("");
  const educacion = useInput("");
  const problemaDeSalud = useInput("");
  const medicamentos = useInput("");
  const telefono = useInput("");
  const datoExtra = useInput("");
  const situacion = useInput("");
  const contacto = useInput("");
  const nroDeContacto = useInput("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPaises());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProvincias());
  }, [dispatch]);

  useEffect(() => {
    if (provincia.value) {
      dispatch(fetchLocalidades(provincia.value));
    }
  }, [provincia.value, dispatch]);

  const handleChangeGenero = (event) => {
    dispatch(setGenero(event.target.value));
  };

  return (
    <div>
      <label>
        Imagen de perfil:
        <input type='text' {...img} onChange={handleInputChange} />
      </label>
      <label>
        País:
        <select {...paiz} onChange={fetchPaises}>
          <option></option>
          {countries.map((country, i) => (
            <option key={i} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>
      </label>
      <label>
        Nombre:
        <input type='text' {...nombre} onChange={handleInputChange} />
      </label>
      <label>
        Apellido:
        <input type='text' {...apellido} onChange={handleInputChange} />
      </label>
      <label>
        Edad:
        <input type='text' {...edad} onChange={handleInputChange} />
      </label>
      <label>
        Apodo:
        <input type='text' {...apodo} onChange={handleInputChange} />
      </label>
      <label>
        Género:
        <select value={genero} onChange={handleChangeGenero}>
          <option value='Prefiero no decirlo'>Prefiero no decirlo</option>
          <option value='Masculino'>Masculino</option>
          <option value='Femenino'>Femenino</option>
        </select>
      </label>
      <label>
        Provincia:
        <select {...provincia} onChange={fetchProvincias}>
          <option></option>
          {provi.map((provincia, i) => (
            <option key={i} value={provincia.nombre}>
              {provincia.nombre}
            </option>
          ))}
        </select>
      </label>
      <label>
        Localidad:
        <select {...localidad} onChange={fetchLocalidades}>
          <option></option>
          {locali.map((localidad, i) => (
            <option key={i} value={localidad.nombre}>
              {localidad.nombre}
            </option>
          ))}
        </select>
      </label>
      <label>
        Necesidad Urgente:
        <input type='text' {...necesidadUrgente} onChange={handleInputChange} />
      </label>
      <label>
        Otras necesidades:
        <input type='text' {...otraNecesidad} onChange={handleInputChange} />
      </label>
      <label>
        Sueños:
        <input type='text' {...sueños} onChange={handleInputChange} />
      </label>
      <label>
        Trabajo:
        <input type='text' {...trabajo} onChange={handleInputChange} />
      </label>
      <label>
        Educación:
        <select {...educacion} onChange={handleInputChange}>
          <option value='Primaria incompleta'>Primaria incompleta</option>
          <option value='Secundaria incompleta'>Secundaria incompleta</option>
          <option value='Secundaria Completa'>Secundaria Completa</option>
          <option value='Tecnicatura/Universidad'>
            Tecnicatura/Universidad
          </option>
        </select>
      </label>
      <label>
        Problemas de Salud:
        <input type='text' {...problemaDeSalud} onChange={handleInputChange} />
      </label>
      <label>
        Medicamentos:
        <input type='text' {...medicamentos} onChange={handleInputChange} />
      </label>
      <label>
        Teléfono:
        <input type='text' {...telefono} onChange={handleInputChange} />
      </label>
      <label>
        Dato Extra:
        <input type='text' {...datoExtra} onChange={handleInputChange} />
      </label>
      <label>
        Situación:
        <input type='text' {...situacion} onChange={handleInputChange} />
      </label>
      <label>
        Contacto:
        <input type='text' {...contacto} onChange={handleInputChange} />
      </label>
      <label>
        Número de Contacto:
        <input type='text' {...nroDeContacto} onChange={handleInputChange} />
      </label>
    </div>
  );
};

export default FormularioCompleto;
