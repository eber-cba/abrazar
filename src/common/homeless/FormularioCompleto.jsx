import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import axios from "axios";
import {
  fetchPaises,
  fetchProvincias,
  fetchLocalidades,
  setGenero,
  setPaiz,
  setProvincia,
  setLocalidad,
} from "../../redux/regiones";

const FormularioCompleto = ({ handleInputChange }) => {
  const paises = useSelector((state) => state.regiones.paises);
  const paisSeleccionado = useSelector((state) => state.regiones.paiz);
  const provincias = useSelector((state) => state.regiones.provincias);
  const provinciaSeleccionada = useSelector(
    (state) => state.regiones.provincia
  );
  const localidades = useSelector((state) => state.regiones.localidades);
  const localidadSeleccionada = useSelector(
    (state) => state.regiones.localidad
  );

  const img = useInput("");
  const nombre = useInput("");
  const apellido = useInput("");
  const edad = useInput("");
  const apodo = useInput("");
  const genero = useSelector((state) => state.regiones.genero);
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
    if (paisSeleccionado) {
      dispatch(fetchProvincias(paisSeleccionado));
    }
  }, [paisSeleccionado, dispatch]);

  useEffect(() => {
    if (provinciaSeleccionada) {
      dispatch(fetchLocalidades(provinciaSeleccionada));
    }
  }, [provinciaSeleccionada, dispatch]);

  const handleChangeGenero = (event) => {
    dispatch(setGenero(event.target.value));
  };

  const handleChangePais = (event) => {
    dispatch(setPaiz(event.target.value));
  };

  const handleChangeProvincia = (event) => {
    dispatch(setProvincia(event.target.value));
  };

  const handleChangeLocalidad = (event) => {
    dispatch(setLocalidad(event.target.value));
  };

  return (
    <div>
      <label>
        Imagen de perfil:
        <input type='text' {...img} onChange={handleInputChange} />
      </label>
      <label>
        País:
        <select value={paisSeleccionado} onChange={handleChangePais}>
          <option></option>
          {paises.map((country, i) => (
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
        <select value={provinciaSeleccionada} onChange={handleChangeProvincia}>
          <option></option>
          {provincias.map((provincia, i) => (
            <option key={i} value={provincia.nombre}>
              {provincia.nombre}
            </option>
          ))}
        </select>
      </label>
      <label>
        Localidad:
        <select value={localidadSeleccionada} onChange={handleChangeLocalidad}>
          <option></option>
          {localidades.map((localidad, i) => (
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
