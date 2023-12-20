import React, { useState } from "react";
import { Steps } from "primereact/steps";
import { Button } from "primereact/button";
import Form1 from "./addHomeless/AddHomeless";
import Form2 from "./Form2";
import Resumen from "./Resumen";
import { useDispatch, useSelector } from "react-redux";
import { postHomeless, setHomeless } from "../../redux/homeless";
import { useNavigate } from "react-router-dom";
const MainComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [form, setForm] = useState({});
  const [contacto, setContacto] = useState({});
  const [nroDeContacto, setNroDeContacto] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const homeless = useSelector((state) => state.homeless);

  const steps = [
    { label: "Formulario 1" },
    { label: "Formulario 2 (Opcional)" },
    { label: "Resumen" },
  ];

  const handleNext = () => {
    if (activeIndex === 0) {
      localStorage.setItem("formDataStep1", JSON.stringify(form));
    } else if (activeIndex === 1) {
      localStorage.setItem("formDataStep2", JSON.stringify(form));
    }
    setActiveIndex((prevIndex) => prevIndex + 1);
  };

  const handleBack = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);
  };

  const handleFormData = (data) => {
    console.log("data stepts =>", data);
    setForm(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postHomeless({ form }))
      .then((data) => {
        console.log("data guardada?=>", data);
        // Limpiar el localStorage después de enviar los datos
        localStorage.removeItem("nombre");
        localStorage.removeItem("apellido");
        localStorage.removeItem("img");
        localStorage.removeItem("paiz");
        localStorage.removeItem("edad");
        localStorage.removeItem("apodo");
        localStorage.removeItem("genero");
        localStorage.removeItem("provincia");
        localStorage.removeItem("localidad");
        localStorage.removeItem("necesidadUrgente");
        localStorage.removeItem("otraNecesidad");
        localStorage.removeItem("sueños");
        localStorage.removeItem("trabajo");
        localStorage.removeItem("educacion");
        localStorage.removeItem("problemaDeSalud");
        localStorage.removeItem("medicamentos");
        localStorage.removeItem("telefono");
        localStorage.removeItem("datoExtra");
        localStorage.removeItem("situacion");
        localStorage.removeItem("contacto");
        localStorage.removeItem("nroDeContacto");
        // Agregar aquí la limpieza para otros campos que desees eliminar del localStorage

        // Restablecer el estado del formulario a un objeto vacío
        setForm({});
        // Cambiar al primer índice después de finalizar
        // setActiveIndex(0);
      })
      .catch((err) => console.log(err));
  };
  console.log("form stepper", form);
  return (
    <div>
      <Steps model={steps} activeIndex={activeIndex} />
      <div>
        {activeIndex === 0 && (
          <Form1
            setForm={setForm}
            handleFormData={handleFormData}
            form={form}
          />
        )}
        {activeIndex === 1 && (
          <Form2 contacto={contacto} nroDeContacto={nroDeContacto} />
        )}
        {activeIndex === 2 && <Resumen formData={form} />}
        <div>
          <Button
            disabled={activeIndex === 0}
            icon='pi pi-arrow-left'
            onClick={handleBack}
          />
          {activeIndex !== 2 ? (
            <Button
              label='Siguiente'
              icon='pi pi-arrow-right'
              onClick={handleNext}
            />
          ) : (
            <Button label='Finalizar' onClick={handleSubmit} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
