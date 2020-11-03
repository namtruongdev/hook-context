import React, { useContext } from 'react';
import { ValueContext } from '../ValueContextProvider';

function Result() {
  const { value } = useContext(ValueContext);
  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
}

export default Result;
