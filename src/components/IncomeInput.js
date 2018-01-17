import React from 'react';
import NumericInput from './NumericInput';

const IncomeInput = props => {
  return (
    <div>
      <label htmlFor="income">Household Income</label>
      <NumericInput
        id="income"
        name="income"
        placeholder={props.initialValue || 0}
        type="number"
        onChange={e => props.update(e.target.value)}
      />
    </div>
  );
};

export default IncomeInput;
