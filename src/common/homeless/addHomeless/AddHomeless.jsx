import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import useInput from "../../../hooks/useInput";
import "./addHomeless.css";
import { setHomeless } from "../../../redux/homeless";
export default function AddHomeless({ form, handleFormData, setForm }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const homelessData = useSelector((state) => state.homeless);

  const [formData, setFormData] = useState(form);

  const nombre = useInput(localStorage.getItem("nombre") || "");
  const apellido = useInput(localStorage.getItem("apellido") || "");

  const img = useInput("");
  const paiz = useInput("");

  const edad = useInput("");
  const apodo = useInput("");
  const [genero, setGenero] = useState("Prefiero no decirlo");
  const [countries, setCountries] = useState([]);
  const [provi, setProvi] = useState([]);
  const [locali, setLocali] = useState([]);
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
  const actualizarNombres = () => {
    // Ejemplo de cómo actualizar los valores de nombre y apellido
  };
  const updateFormState = () => {
    nombre.setValue(nombre);
    apellido.setValue(apellido);
  };

  // useEffect(updateFormState, [
  //   paiz.value,
  //   img.value,
  //   nombre.value,
  //   apellido.value,
  //   // ... (resto de los inputs)
  // ]);
  // console.log("¿ARGENTINA? =>", paises[9]);
  form = {
    nacionalidad: paiz.value,
    img: img.value,
    nombre: nombre.value,
    apellido: apellido.value,
    edad: edad.value,
    apodo: apodo.value,
    genero: genero,
    provincia: provincia.value,
    localidad: localidad.value,
    necesidadesUrgentes: necesidadUrgente.value,
    otrasNecesidades: otraNecesidad.value,
    sueños: sueños.value,
    trabajo: trabajo.value,
    educacion: educacion.value,
    problemasDeSalud: problemaDeSalud.value,
    medicamentos: medicamentos.value,
    usuariosId: user.id,
    telefono: telefono.value,
    datoExtra: datoExtra.value,

    // fotos: document.getElementById("fotoDePerfil").value // hacer condicional
  };
  console.log("Form en addhomeless => ", form);
  console.log(" en nombre", nombre);

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
                <input className='inputs' type='text' {...edad.value} />
              </label>
              <label>
                Apodo:
                <input className='inputs' type='text' {...apodo.value} />
              </label>

              <div>
                <label>
                  Sexo:
                  <label>
                    <input
                      id='radio-button'
                      name='genero'
                      type='radio'
                      value={genero.value}
                      onChange={() => setGenero("Masculino")}
                    />
                    Masculino
                  </label>
                  <label>
                    <input
                      id='radio-button'
                      name='genero'
                      type='radio'
                      value={genero.value}
                      onChange={() => setGenero("Femenino")}
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
                  {...necesidadUrgente.value}
                />
              </label>
              <label>
                Otras necesidades:
                <input
                  className='inputs'
                  type='text'
                  {...otraNecesidad.value}
                />
              </label>
              <label>
                Sueños:
                <input className='inputs' type='text' {...sueños.value} />
              </label>

              <label for='educacion'>Educacion:</label>

              <select name='educacion' id='educacion' {...educacion.value}>
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
                  {...problemaDeSalud.value}
                />
              </label>
              <label>
                ¿Toma medicamentos?:
                <input className='inputs' type='text' {...medicamentos.value} />
              </label>
              <label>
                ¿Trabajo?:
                <input className='inputs' type='text' {...trabajo.value} />
              </label>
              <label>
                Telefono:
                <input className='inputs' type='number' {...telefono.value} />
              </label>

              <div className='contacto'>
                <select name='contacto' id='contacto' {...contacto.value}>
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
                    {...nroDeContacto.value}
                  />
                </label>
              </div>

              <label htmlFor='situacion'>Situacion:</label>

              <select name='situacion' id='situacion' {...situacion.value}>
                <option>Urgente</option>
                <option>Moderada</option>
                <option>Estable</option>
              </select>

              <label>
                Dato Extra:
                <textarea
                  required
                  name='datoExtra'
                  {...datoExtra.value}
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
