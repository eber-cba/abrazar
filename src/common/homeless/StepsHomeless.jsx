import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@mui/material";
import FormularioPaso1 from "./FormularioPaso1";
import FormularioPaso2 from "./FormularioPaso2";
import MostrarDatos from "./MostrarDatos";
import { useNavigate } from "react-router-dom";
import FormularioCompleto from "./FormularioCompleto";

const SteperComponente = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "eber",
    opcional: "",
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDatosFormulario((prevDatosFormulario) => ({
      ...prevDatosFormulario,
      [name]: value,
    }));
  };
  const handleFinalizar = () => {
    const confirmarSalir = window.confirm("¿Desea salir?");
    if (confirmarSalir) {
      // Redireccionar a la página de inicio
      navigate("/");
    } else {
      // Reiniciar el Stepper
      setActiveStep(0);
      setDatosFormulario({
        nombre: "",
        opcional: "",
      });
    }
  };

  const getFormComponent = (step) => {
    switch (step) {
      case 0:
        return <FormularioCompleto handleInputChange={handleInputChange} />;
      case 1:
        return (
          <FormularioPaso2
            datosFormulario={datosFormulario}
            handleInputChange={handleInputChange}
          />
        );
      default:
        return null;
    }
  };

  const isLastStep = activeStep === 2;

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        <Step>
          <StepLabel>Paso 1</StepLabel>
        </Step>
        <Step>
          <StepLabel>Paso 2</StepLabel>
        </Step>
        <Step>
          <StepLabel>Paso 3</StepLabel>
        </Step>
      </Stepper>
      <div>
        {getFormComponent(activeStep)}
        {activeStep === 2 ? (
          <MostrarDatos datosFormulario={datosFormulario} />
        ) : null}
        <div>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Atrás
          </Button>
          {isLastStep ? (
            <Button
              variant='contained'
              color='primary'
              onClick={handleFinalizar}
            >
              Finalizar
            </Button>
          ) : (
            <Button variant='contained' color='primary' onClick={handleNext}>
              Siguiente
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SteperComponente;
