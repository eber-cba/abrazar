import React from "react";
import { useSelector } from "react-redux";

const Resumen = ({ form }) => {
  const contact = useSelector((state) => state.contact);

  console.log("formRESUMEN =>", form);
  console.log("contact =>", contact);

  return <div className='Resumen'></div>;
};

export default Resumen;
