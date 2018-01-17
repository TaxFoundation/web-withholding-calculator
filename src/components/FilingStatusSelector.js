import React from 'react';
import styled from 'styled-components';

const Status = styled.div`
  display: inline-block;
`;

const Label = styled.label`
  background-color: ${props => props.theme.tfBlue};
  border: 1px solid ${props => props.theme.tfBlue};
  border-radius: 4px;
  color: #fff;
  padding: 4px;
`;

const Radio = styled.input`
  display: none;
`;

const FilingStatusSelector = props => {
  const statuses = ['single', 'married'];
  return (
    <form onChange={e => props.update(e.target.value)}>
      {statuses.map(s => {
        return (
          <Status key={`status-${s}`}>
            <Label htmlFor={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</Label>
            <Radio type="radio" name="filing-status" id={s} value={s} defaultChecked={s === props.initialValue} />
          </Status>
        );
      })}
    </form>
  );
};

export default FilingStatusSelector;
