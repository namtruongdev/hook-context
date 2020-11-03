import React, { createContext, useState } from 'react';

function ValueContextProvider({ children }) {
  const [value, updateValue] = useState({
    value: '',
  });

  const updateForm = (value) => {
    updateValue({
      value: value,
    });
  };

  return (
    <ValueContext.Provider value={{ ...value, updateForm }}>
      {children}
    </ValueContext.Provider>
  );
}

export const ValueContext = createContext();

export default ValueContextProvider;
