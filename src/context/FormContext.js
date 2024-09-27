import React, { createContext, useContext, useState } from 'react';

// Create the context
const FormContext = createContext();

// Create a provider component
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    fromCity: "",
    toCity: "",
    date: "",
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use the FormContext
export const useFormContext = () => {
  return useContext(FormContext);
};
