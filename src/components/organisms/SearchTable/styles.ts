import { styled } from 'styled-components';

export const StyledSearchTableContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 52px;

  min-width: fit-content;
`;

export const StyledSearchBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 20px;

  padding: 10px 17px 9px 24px;
  border-radius: 8px;

  min-width: 150px;

  background-color: ${(props) => props.theme.surface ?? 'none'};

  h1 {
    font-size: 24px;
    line-height: 24px;
    font-weight: 500;
  }

  label {
    font-size: 14px;
    line-height: 20px;
    font-weight: 300;
    color: ${(props) => props.theme.label};
  }
`;
