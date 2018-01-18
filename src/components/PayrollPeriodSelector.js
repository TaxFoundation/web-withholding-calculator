import React from 'react';
import styled from 'styled-components';
import Container from './InputContainer';
import Label from './Label';
import config from '../config.json';

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVQ4T93TMQrCUAzG8V9x8QziiYSuXdzFC7h4AcELOPQAdXYovZCHEATlgQV5GFTe1ozJlz/kS1IpjKqw3wQBVyy++JI0y1GTe7DCBbMAckeNIQKk/BanALBB+16LtnDELoMcsM/BESDlz2heDR3WePwKSLo5eoxz3z6NNcFD+vu3ij14Aqz/DxGbKB7CAAAAAElFTkSuQmCC');
  background-repeat: no-repeat;
  background-position: 98% center;
  border: 1px solid #333333;
  border-radius: 4px;
  font-size: ${props => props.theme.fontSize};
  padding: 4px 20px 4px 4px;
  width: 100%;
`;

const PayrollPeriodSelector = props => {
  return (
    <Container>
      <Label htmlFor="payroll-periods">Select Frequency of Paycheck</Label>
      <Select
        defaultValue={props.initialValue}
        name="payroll-periods"
        id="payroll-periods"
        onChange={e => props.update(e.target.value)}
      >
        {config.yearlyPayrollPeriods.map(p => {
          return (
            <option key={`payroll-period-${p.type}`} value={p.type}>
              {`${p.type.charAt(0).toUpperCase() + p.type.slice(1)} (${
                p.value
              } time${p.value === 1 ? '' : 's'} per year)`}
            </option>
          );
        })}
      </Select>
    </Container>
  );
};

export default PayrollPeriodSelector;
