import React from 'react';
import Label from './Label';
import NumericInput from './NumericInput';

const IncomeInput = props => {
  return (
    <div>
      <Label htmlFor="income">Household Income</Label>
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
