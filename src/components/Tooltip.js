import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  background-color: #ccc;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  float: right;
  font-family: monospace;
  height: 1rem;
  text-align: center;
  width: 1rem;
`;

const Tooltip = props => {
  return (
    <Span>i</Span>
  );
};

export default Tooltip;