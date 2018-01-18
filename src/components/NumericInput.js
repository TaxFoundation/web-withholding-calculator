import styled from 'styled-components';

const NumericInput = styled.input`
  -moz-appearance: textfield;
  border: 1px solid #333333;
  border-radius: 4px;
  font-size: ${props => props.theme.fontSize};
  margin: 0;
  padding: 4px 8px;
  text-align: right;
  width: 100%;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export default NumericInput;
