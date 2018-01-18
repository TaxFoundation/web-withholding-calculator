import React from 'react';
import Container from './InputContainer';
import Label from './Label';
import NumericInput from './NumericInput';

const AllowancesInput = props => {
  return (
    <Container>
      <Label htmlFor="allowances">Allowances</Label>
      <NumericInput
        id="allowances"
        name="allowances"
        max="100"
        min="0"
        placeholder={props.initialValue || 0}
        type="number"
        onChange={e => props.update(e.target.value)}
      />
    </Container>
  );
};

export default AllowancesInput;
