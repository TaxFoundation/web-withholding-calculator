import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #333333;
  border-radius: 4px;
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

const IncomeInput = props => {
  return <Input type="number" onChange={e => props.update(e.target.value)} />;
};

export default IncomeInput;
