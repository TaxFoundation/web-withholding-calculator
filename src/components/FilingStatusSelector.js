import React from 'react';
import styled from 'styled-components';
import Label from './Label';

const Form = styled.form`
  display: grid;
  grid-gap: 10px;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
`;

const Status = styled.div`
  grid-column: span 1;
  grid-row: 2 / 3;

  > input {
    display: none;
  }

  > input + label {
    background-color: ${props => props.theme.tfBlue};
    border: 1px solid ${props => props.theme.tfBlue};
    border-radius: 4px;
    color: #fff;
    display: block;
    padding: 4px 6px;
    text-align: center;
  }

  > input:checked + label {
    background-color: ${props => props.theme.tfBlueHighlight};
    border: 1px solid ${props => props.theme.tfBlueHighlight};
  }
`;

const FilingStatusSelector = props => {
  const statuses = ['single', 'married'];
  return (
    <Form onChange={e => props.update(e.target.value)}>
      <Label style={{ gridColumn: 'span 2', gridRow: '1 / 2' }}>
        Filing Status
      </Label>
      {statuses.map(s => {
        return (
          <Status key={`status-${s}`}>
            <input
              type="radio"
              name="filing-status"
              id={s}
              value={s}
              defaultChecked={s === props.initialValue}
            />
            <label htmlFor={s}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </label>
          </Status>
        );
      })}
    </Form>
  );
};

export default FilingStatusSelector;
