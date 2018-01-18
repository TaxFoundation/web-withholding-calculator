import React from 'react';
import styled from 'styled-components';
import Label from './Label';
import NumericInput from './NumericInput';

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template: 2fr / 1fr;
`;

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
