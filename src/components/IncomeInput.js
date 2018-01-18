import React from 'react';
import styled from 'styled-components';
import { format } from 'd3-format';
import Container from './InputContainer';
import Label from './Label';
import NumericInput from './NumericInput';

const dollarFormat = format('$,');

const IncomeInput = props => {
  return (
    <Container>
      <Label htmlFor="income">Worker Wages</Label>
      <NumericInput
        id="income"
        min="0"
        name="income"
        placeholder={dollarFormat(props.initialValue || 0)}
        step="0.01"
        type="text"
        onChange={e => props.update(e.target.value)}
      />
    </Container>
  );
};

export default IncomeInput;
