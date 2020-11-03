import React, { useContext } from 'react';
import { ValueContext } from '../ValueContextProvider';

import './Input.css';

function Input() {
  const { updateForm } = useContext(ValueContext);

  // useEffect(() => {
  //   const input = document.querySelector('.input input');
  //   input.addEventListener('keyup', (e) => {
  //     const value = e.target.value;
  //     updateForm(value);
  //   });
  // }, [value, updateForm]);

  return (
    <div className="input">
      <input
        type="text"
        onKeyUp={(e) => {
          updateForm(e.target.value);
        }}
      />
    </div>
  );
}

export default Input;
