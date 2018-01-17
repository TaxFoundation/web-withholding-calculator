import React from 'react';
import styled from 'styled-components';

const FilingStatusSelector = props => {
  const statuses = ['single', 'married'];
  return (
    <form onChange={e => props.update(e.target.value)}>
      {statuses.map(s => {
        return (
          <div key={`status-${s}`}>
            <label htmlFor={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</label>
            <input type="radio" name="filing-status" id={s} value={s} defaultChecked={s === props.initialValue} />
          </div>
        );
      })}
    </form>
  );
};

export default FilingStatusSelector;
