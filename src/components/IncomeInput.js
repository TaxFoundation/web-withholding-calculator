import React from 'react';
import NumericInput from './NumericInput';

const IncomeInput = props => {
  return (
    <NumericInput
      placeholder={props.initialValue || 0}
      type="number"
      onChange={e => props.update(e.target.value)}
    />
  );
};

export default IncomeInput;
