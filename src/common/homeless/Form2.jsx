import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const Form2 = ({ onFormData }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onFormData(formData);
  };

  const handleSkip = () => {
    onFormData({ skipForm2: true });
  };

  return (
    <div>
      <div className='p-field p-grid'>
        <label
          htmlFor='email'
          className='p-col-fixed'
          style={{ width: "100px" }}
        >
          Email:
        </label>
        <div className='p-col'>
          <InputText
            id='email'
            name='email'
            onChange={handleChange}
            value={formData.email}
          />
        </div>
      </div>
      <div className='p-field p-grid'>
        <label
          htmlFor='phone'
          className='p-col-fixed'
          style={{ width: "100px" }}
        >
          Phone:
        </label>
        <div className='p-col'>
          <InputText
            id='phone'
            name='phone'
            onChange={handleChange}
            value={formData.phone}
          />
        </div>
      </div>
      <Button label='Submit' onClick={handleSubmit} />
      <Button label='Skip' onClick={handleSkip} />
    </div>
  );
};

export default Form2;
