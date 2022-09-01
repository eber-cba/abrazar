import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Button } from "primereact/button";
import { postHomeless } from "../../redux/homeless";
import useInput from "../../hooks/useInput";
import "./addHomeless.css";
export default function AddHomeless() {
  const dispatch = useDispatch();
  const img = useInput("");
  const paiz = useInput("");
  const nombre = useInput("");
  const apellido = useInput("");
  const edad = useInput("");
  const apodo = useInput("");
  const sexo = useInput("");
  const [countries, setCountries] = useState([]);
  const [provi, setProvi] = useState([]);
  const [locali, setLocali] = useState([]);
  const provincia = useInput("");
  const localidad = useInput("");
  const necesidadUrgente = useInput("");
  const otraNecesidad = useInput("");
  const sueños = useInput("");
  const trabaja = useInput("");
  const educacion = useInput("");
  const problemaDeSalud = useInput("");
  const medicamentos = useInput("");

  // const data = (axios
  //   .")
  //   .then((res)=> console.log(res.data))
  //   )

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
        `https://apis.datos.gob.ar/georef/api/departamentos?provincia=Cordoba`
      )
      .then((res) => setLocali(res.data));
  }, []);

 console.log("departament1", locali.departamentos.length =26);

  console.log("departament2",locali.departamentos);


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
  // const provincias= provi.provincias.sort(function (a, b) {

  //   if (a.nombre > b.nombre) {
  //     return 1;
  //   }
  //   if (a.nombre < b.nombre) {
  //     return -1;
  //   }
  //   // a must be equal to b
  //   return 0;
  // });

  console.log("¿ARGENTINA? =>", paises[9]);
  let form = {
    nacionalidad: paiz.value,
    img: img.value,
    nombre: nombre.value,
    apellido: apellido.value,
    edad: edad.value,
    apodo: apodo.value,
    sexo: sexo.value,
    provincia: provincia.value,
    localidad: localidad.value,
    necesidadUrgente: necesidadUrgente.value,
    otraNecesidad: otraNecesidad.value,
    sueños: sueños.value,
    trabaja: trabaja.value,
    educacion: educacion.value,
    problemaDeSalud: problemaDeSalud.value,
    medicamentos: medicamentos.value,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postHomeless({ form: form }))
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Ingresa una nueva persona</h2>
      <p>Recorda de completar la mayoria de los campos requeridos</p>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="imagenes">
              <label htmlFor="img">Subir imagen</label>
              <input id="img" type="file" {...img} />
            </div>
            <div className="section1">
              <label>
                Nombre:
                <input className="inputs" type="text" {...nombre} />
              </label>
              <label>
                Apellido:
                <input className="inputs" type="text" {...apellido} />
              </label>
              <label>
                edad:
                <input className="inputs" type="text" {...edad} />
              </label>
              <label>
                Apodo:
                <input className="inputs" type="text" {...apodo} />
              </label>

              <div>
                <label>
                  Sexo:
                  <label>
                    <input type="radio" name="sexo" {...sexo} /> F
                  </label>
                  <label>
                    <input type="radio" name="sexo" {...sexo} /> M
                  </label>
                </label>
              </div>
              <label>
                Pais:
                <select {...paiz} name="pais" id="pais">
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
                <select {...provincia} name="pais" id="pais">
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
                <select {...localidad} name="localidad" id="localidad">
                  <option></option>
               
                </select>
              </label>

              <label>
                Necesidad Urgente:
                <input className="inputs" type="text" {...necesidadUrgente} />
              </label>
              <label>
                Otras necesidades:
                <input className="inputs" type="text" {...otraNecesidad} />
              </label>
              <label>
                Sueños:
                <input className="inputs" type="text" {...sueños} />
              </label>

              <label for="educacion">Educacion:</label>

              <select name="educacion" id="educacion">
                <option {...educacion}>Primaria incompleta</option>
                <option {...educacion}>Secundaria incompleta</option>
                <option {...educacion}>Secundaria Completa</option>
                <option {...educacion}>Tecnicatura/Universidad</option>
              </select>
              <label>
                Problemas de salud:
                <input className="inputs" type="text" {...problemaDeSalud} />
              </label>
              <label>
                ¿Toma medicamentos?:
                <input className="inputs" type="text" {...medicamentos} />
              </label>
              <label>
                ¿Trabaja?:
                <input className="inputs" type="text" {...trabaja} />
              </label>
            </div>
            <div className="boton1">
              <Button>Añadir Vinculo</Button>
            </div>
            <div className="boton2">
              <Button>Ubicación</Button>
            </div>
            <div className="boton3">
              <Button type="submit">Guardar</Button>
            </div>
            <div className="boton4">
              <Button>Cancelar</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
