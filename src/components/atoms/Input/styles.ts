import { styled } from 'styled-components';

export const StyledInputWrapper = styled.div`
  position: relative;
  flex: 1 1 108px;
`;

export const StyledInput = styled.input<{
  $fullWidth: boolean;
  $hasIcon: boolean;
}>`
  width: ${(props) => (props.$fullWidth ? '100%' : 'initial')};

  font-size: 16px;
  line-height: 16px;
  font-weight: 400px;

  padding: 9px;
  border: none;
  outline: none;
  border-radius: 19px;

  padding-left: ${(props) => (props.$hasIcon ? '42px' : '20px')};

  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.input};

  &::placeholder {
    color: ${(props) => props.theme.placeholder};
  }

  &:hover {
    background-color: ${(props) => props.theme.inputHover};
  }

  &:focus {
    background-color: ${(props) => props.theme.inputFocus};
  }
`;

export const StyledIcon = styled.img`
  width: 14px;
  height: 14px;

  position: absolute;
  left: 15px;
  top: 11px;
`;
