import React, { useState } from "react";
import { Steps } from "primereact/steps";
import { Button } from "primereact/button";
import Form1 from "./addHomeless/AddHomeless";
import Form2 from "./Form2";
import Resumen from "./Resumen";

const MainComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [formData, setFormData] = useState({});
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

  const handleFormData = (data) => {
    if (data.skipForm2) {
      setActiveIndex(2);
    } else {
      setFormData({ ...formData, ...data });
      handleNext();
    }
  };

  return (
    <div>
      <Steps model={steps} activeIndex={activeIndex} />
      <div>
        {activeIndex === 0 && <Form1 onFormData={handleFormData} />}
        {activeIndex === 1 && <Form2 onFormData={handleFormData} />}
        {activeIndex === 2 && <Resumen formData={formData} />}
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
            <Button label='Finalizar' />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
