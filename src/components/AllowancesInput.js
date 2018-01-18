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
        placeholder={props.initialValue || 0}
        type="number"
        onChange={e => props.update(e.target.value)}
      />
    </Container>
  );
};

export default AllowancesInput;
