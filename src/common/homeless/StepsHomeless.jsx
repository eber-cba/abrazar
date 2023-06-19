import React, { useState } from "react";
import { Steps } from "primereact/steps";
import { Button } from "primereact/button";
import Form1 from "./addHomeless/AddHomeless";
import Form2 from "./Form2";
import Resumen from "./Resumen";
import { useDispatch, useSelector } from "react-redux";
import { postHomeless, setHomeless } from "../../redux/homeless";
import { postContactoEmergencia } from "../../redux/contactoEmergencia";

const MainComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [form, setForm] = useState({});
  const [contacto, setContacto] = useState({});
  const [nroDeContacto, setNroDeContacto] = useState({});
  const dispatch = useDispatch();
  const homeless = useSelector((state) => state.homeless);

  console.log("homeless =>", homeless);

  const steps = [
    { label: "Formulario 1" },
    { label: "Formulario 2 (Opcional)" },
    { label: "Resumen" },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
  };

  const handleBack = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);
  };

  console.log("form en padre=>", form);
  const handleFormData = (data) => {
    setForm(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postHomeless({ form }))
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

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