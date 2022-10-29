import styled from "styled-components";

export const InputWrapper = styled.div``;
export const Label = styled.label`
  position: relative;
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 15px 20px;

  cursor: pointer;
`;
export const CheckBox = styled.span`
  position: relative;
  height: 20px;
  width: 20px;
  display: block;
  z-index: 1;
  background-color: red;
`;
export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  z-index: 0;

  &:checked + ${CheckBox} {
    background-color: green;
  }
`;

export const Title = styled.span`
  z-index: 1;
`;
