import React from 'react';
import styled from 'styled-components';
import config from '../config.json';

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVQ4T93TMQrCUAzG8V9x8QziiYSuXdzFC7h4AcELOPQAdXYovZCHEATlgQV5GFTe1ozJlz/kS1IpjKqw3wQBVyy++JI0y1GTe7DCBbMAckeNIQKk/BanALBB+16LtnDELoMcsM/BESDlz2heDR3WePwKSLo5eoxz3z6NNcFD+vu3ij14Aqz/DxGbKB7CAAAAAElFTkSuQmCC');
  background-repeat: no-repeat;
  background-position: 97% center;
  border: 1px solid #333333;
  border-radius: 4px;
  padding-right: 20px;
`;

const PayrollPeriodSelector = props => {
  return (
    <div>
      <label htmlFor="payroll-periods">Select Frequency of Paycheck</label>
      <Select
        defaultValue={props.initialValue}
        name="payroll-periods"
        id="payroll-periods"
        onChange={e => props.update(e.target.value)}
      >
        {config.yearlyPayrollPeriods.map(p => {
          return (
            <option
              key={`payroll-period-${p.type}`}
              value={p.type}
            >
              {`${p.type.charAt(0).toUpperCase() + p.type.slice(1)} (${
                p.value
              } time${p.value === 1 ? '' : 's'} per year)`}
            </option>
          );
        })}
      </Select>
    </div>
  );
};

export default PayrollPeriodSelector;
