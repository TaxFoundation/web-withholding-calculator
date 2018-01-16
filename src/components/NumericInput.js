import styled from 'styled-components';

const NumericInput = styled.input`
  border: 1px solid #333333;
  border-radius: 4px;
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export default NumericInput;
