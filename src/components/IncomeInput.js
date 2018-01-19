import React from 'react';
import styled from 'styled-components';
import DollarFormat from './DollarFormat';
import Container from './InputContainer';
import Label from './Label';
import Tooltip from './Tooltip';
import NumericInput from './NumericInput';

const IncomeInput = props => {
  return (
    <Container>
      <Label htmlFor="income">Worker Wages <Tooltip /></Label>
      <NumericInput
        id="income"
        min="0"
        name="income"
        placeholder={DollarFormat(props.initialValue || 0)}
        step="0.01"
        type="text"
        onChange={e => props.update(e.target.value)}
      />
    </Container>
  );
};

export default IncomeInput;
