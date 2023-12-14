import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import useInput from "../../../hooks/useInput";
import "./addHomeless.css";
export default function AddHomeless({ form, handleFormData, setForm }) {
  const user = useSelector((state) => state.user);

  const nombre = useInput(form.nombre || "");
  const apellido = useInput(form.apellido || "");
  const img = useInput(form.img || "");
  const paiz = useInput(form.paiz || "");
  const edad = useInput(form.edad || "");
  const apodo = useInput(form.apodo || "");
  const [genero, setGenero] = useState(form.genero || "Prefiero no decirlo");
  const [countries, setCountries] = useState([]);
  const [provi, setProvi] = useState([]);
  const [locali, setLocali] = useState([]);
  const provincia = useInput(form.provincia || "");
  const localidad = useInput(form.localidad || "");
  const necesidadUrgente = useInput(form.necesidadUrgente || "");
  const otraNecesidad = useInput(form.otraNecesidad || "");
  const sueños = useInput(form.sueños || "");
  const trabajo = useInput(form.trabajo || "");
  const educacion = useInput(form.educacion || "");
  const problemaDeSalud = useInput(form.problemaDeSalud || "");
  const medicamentos = useInput(form.medicamentos || "");
  const telefono = useInput(form.telefono || "");
  const datoExtra = useInput(form.datoExtra || "");
  const situacion = useInput(form.situacion || "");
  const contacto = useInput(form.contacto || "");
  const nroDeContacto = useInput(form.nroDeContacto || "");

  const formFields = [
    { key: "nombre", value: nombre.value },
    { key: "apellido", value: apellido.value },
    { key: "img", value: img.value },
    { key: "paiz", value: paiz.value },
    { key: "edad", value: edad.value },
    { key: "apodo", value: apodo.value },
    { key: "genero", value: genero },
    { key: "provincia", value: provincia.value },
    { key: "localidad", value: localidad.value },
    { key: "necesidadUrgente", value: necesidadUrgente.value },
    { key: "otraNecesidad", value: otraNecesidad.value },
    { key: "sueños", value: sueños.value },
    { key: "trabajo", value: trabajo.value },
    { key: "educacion", value: educacion.value },
    { key: "problemaDeSalud", value: problemaDeSalud.value },
    { key: "medicamentos", value: medicamentos.value },
    { key: "telefono", value: telefono.value },
    { key: "datoExtra", value: datoExtra.value },
    { key: "situacion", value: situacion.value },
    { key: "contacto", value: contacto.value },
    { key: "nroDeContacto", value: nroDeContacto.value },
    // ... y así sucesivamente para cada campo de useInput
  ];
  useEffect(
    () => {
      const updatedForm = {};
      formFields.forEach((field) => {
        updatedForm[field.key] = field.value;
      });
      setForm(updatedForm);
    },
    formFields.map((field) => field.value)
  );
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data));
  }, []);

  useEffect(() => {
    axios
      .get("https://apis.datos.gob.ar/georef/api/provincias")
      .then((res) => setProvi(res.data.provincias));
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://apis.datos.gob.ar/georef/api/departamentos?provincia=${provincia.value}&max=1000`
      )
      .then((res) => setLocali(res.data.departamentos));
  }, [provincia.value]);

  const paises = countries.sort(function (a, b) {
    if (a.name.common > b.name.common) {
      return 1;
    }
    if (a.name.common < b.name.common) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  useEffect(() => {
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("apellido", apellido.value);
    localStorage.setItem("img", img.value);
    localStorage.setItem("paiz", paiz.value);
    localStorage.setItem("edad", edad.value);
    localStorage.setItem("apodo", apodo.value);
    localStorage.setItem("genero", genero);
    localStorage.setItem("provincia", provincia.value);
    localStorage.setItem("localidad", localidad.value);
    localStorage.setItem("necesidadUrgente", necesidadUrgente.value);
    localStorage.setItem("otraNecesidad", otraNecesidad.value);
    localStorage.setItem("sueños", sueños.value);
    localStorage.setItem("trabajo", trabajo.value);
    localStorage.setItem("educacion", educacion.value);
    localStorage.setItem("problemaDeSalud", problemaDeSalud.value);
    localStorage.setItem("medicamentos", medicamentos.value);
    localStorage.setItem("telefono", telefono.value);
    localStorage.setItem("datoExtra", datoExtra.value);
    localStorage.setItem("situacion", situacion.value);
    localStorage.setItem("contacto", contacto.value);
    localStorage.setItem("nroDeContacto", nroDeContacto.value);
  }, [
    nombre,
    apellido,
    img,
    paiz,
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
    situacion,
    contacto,
    nroDeContacto,
  ]);

  // console.log("¿ARGENTINA? =>", paises[9]);

  /**
   * agregar-=>
   * contactoDeEmergencia
   * *datoExtra[listo]
   * *fotos[listo]
   * *genero[listo]
   * *necesidadesUrgentes[listo]
   * *otrasNecesidades[listo]
   * *probelmasDeSalud[listo]
   * situacion
   * *telefono[listo]
   * *trabajo[listo]
   * *educacion[listo]
   */

  return (
    <div>
      <h2>Ingresa una nueva persona</h2>
      <p>Recorda de completar la mayoria de los campos requeridos</p>

      <div className='form'>
        <form>
          <div className='container'>
            <div className='imagenes'>
              <label htmlFor='fotoDePerfil' className='label'>
                <p>IMAGEN DE PERFIL</p>
                <input
                  accept='image/*'
                  id='fotoDePerfil'
                  multiple
                  type='file'
                  name='fotoDePerfil'
                />
                <button variant='contained' component='span'>
                  Cargar
                </button>
              </label>
            </div>
            <div className='section1'>
              <label>
                Nombre:
                <input
                  className='inputs'
                  type='text'
                  value={nombre.value}
                  onChange={nombre.onChange}
                />
              </label>
              <label>
                Apellido:
                <input
                  className='inputs'
                  type='text'
                  value={apellido.value}
                  onChange={apellido.onChange}
                />
              </label>
              <label>
                edad:
                <input
                  className='inputs'
                  type='text'
                  value={edad.value}
                  onChange={edad.onChange}
                />
              </label>
              <label>
                Apodo:
                <input
                  className='inputs'
                  type='text'
                  value={apodo.value}
                  onChange={apodo.onChange}
                />
              </label>

              <div>
                <label>
                  Sexo:
                  <label>
                    <input
                      id='radio-button'
                      name='genero'
                      type='radio'
                      value='Masculino'
                      checked={genero === "Masculino"}
                      onChange={() => {
                        localStorage.setItem("genero", "Masculino");
                        setGenero("Masculino");
                      }}
                    />
                    Masculino
                  </label>
                  <label>
                    <input
                      id='radio-button'
                      name='genero'
                      type='radio'
                      value='Femenino'
                      checked={genero === "Femenino"}
                      onChange={() => {
                        localStorage.setItem("genero", "Femenino");
                        setGenero("Femenino");
                      }}
                    />
                    Femenino
                  </label>
                </label>
              </div>
              <label>
                Pais:
                <select {...paiz} name='pais' id='pais'>
                  <option></option>
                  {paises.map((pais, i) => (
                    <option key={i} value={pais.name.common}>
                      {pais.name.common}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Provincia:
                <select {...provincia} name='pais' id='pais'>
                  <option></option>
                  {provi.map((provinci, i) => (
                    <option key={i} value={provinci.nombre}>
                      {provinci.nombre}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Localidad:
                <select {...localidad} name='localidad' id='localidad'>
                  <option></option>
                  {locali.map((localid, i) => (
                    <option key={i} value={localid.nombre}>
                      {localid.nombre}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Necesidad Urgente:
                <input
                  className='inputs'
                  type='text'
                  value={necesidadUrgente.value}
                  onChange={necesidadUrgente.onChange}
                />
              </label>
              <label>
                Otras necesidades:
                <input
                  className='inputs'
                  type='text'
                  value={otraNecesidad.value}
                  onChange={otraNecesidad.onChange}
                />
              </label>
              <label>
                Sueños:
                <input
                  className='inputs'
                  type='text'
                  value={sueños.value}
                  onChange={sueños.onChange}
                />
              </label>

              <label for='educacion'>Educacion:</label>

              <select
                name='educacion'
                id='educacion'
                value={educacion.value}
                onChange={educacion.onChange}
              >
                <option>Primaria incompleta</option>
                <option>Secundaria incompleta</option>
                <option>Secundaria Completa</option>
                <option>Tecnicatura/Universidad</option>
              </select>
              <label>
                Problemas de salud:
                <input
                  className='inputs'
                  type='text'
                  value={problemaDeSalud.value}
                  onChange={problemaDeSalud.onChange}
                />
              </label>
              <label>
                ¿Toma medicamentos?:
                <input
                  className='inputs'
                  type='text'
                  value={medicamentos.value}
                  onChange={medicamentos.onChange}
                />
              </label>
              <label>
                ¿Trabajo?:
                <input
                  className='inputs'
                  type='text'
                  value={trabajo.value}
                  onChange={trabajo.onChange}
                />
              </label>
              <label>
                Telefono:
                <input
                  className='inputs'
                  type='number'
                  value={telefono.value}
                  onChange={telefono.onChange}
                />
              </label>

              <div className='contacto'>
                <select
                  name='contacto'
                  id='contacto'
                  value={contacto.value}
                  onChange={contacto.onChange}
                >
                  <option>Familiar</option>
                  <option>Pareja</option>
                  <option>Amigx</option>
                  <option>Conocidx</option>
                  <option>Otro</option>
                </select>
                <label>
                  Contacto de emergencia:
                  <input
                    className='inputs'
                    type='number'
                    value={nroDeContacto.value}
                    onChange={nroDeContacto.onChange}
                  />
                </label>
              </div>

              <label htmlFor='situacion'>Situacion:</label>

              <select
                name='situacion'
                id='situacion'
                value={situacion.value}
                onChange={situacion.onChange}
              >
                <option>Urgente</option>
                <option>Moderada</option>
                <option>Estable</option>
              </select>

              <label>
                Dato Extra:
                <textarea
                  required
                  name='datoExtra'
                  value={datoExtra.value}
                  onChange={datoExtra.onChange}
                ></textarea>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
/**
 * *AGREGAR
 *
 * Un usuarix deberia poder ""seguir"" a un homeless.
 * averiguar como hacer para saber cuantos usuarios seguidores tiene un homeless
 * se deberia ver en la vista general de homeless un boton a cada uno que diga "seguir"
 *
 * en base a la cantidad de seguidores que tenga un homeless se le medira su situacion
 * por ejemplo;
 * + de 5  = estable
 * < o = a 3 = moderado
 * 3< = urgente
 *
 * Al momento de creacion siempre tendra como valor por defecto como "urgente" ya que de seguidor tiene solamente uno que es el usarix quien lo creo.
 *
 *
 */
