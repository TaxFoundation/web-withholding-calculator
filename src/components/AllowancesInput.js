import React from 'react';
import NumericInput from './NumericInput';

const AllowancesInput = props => {
  return (
    <div>
      <label htmlFor="allowances">Allowances</label>
      <NumericInput
        id="allowances"
        name="allowances"
        placeholder={props.initialValue || 0}
        type="number"
        onChange={e => props.update(e.target.value)}
      />
    </div>
  );
};

export default AllowancesInput;
