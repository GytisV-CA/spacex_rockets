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
  gap: 36px;

  padding: 10px 17px 9px 24px;
  border-radius: 8px;

  min-width: 150px;

  background-color: ${(props) => props.theme.surface ?? 'none'};

  h1 {
    font-size: 24px;
    line-height: 24px;
    font-weight: 500;
    color: ${(props) => props.theme.heading};
  }

  label {
    font-size: 14px;
    line-height: 20px;
    font-weight: 300;
    color: ${(props) => props.theme.label};
  }
`;

export const StyledTablePlaceholder = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  line-height: 18px;
  padding-top: 18px;
  padding-bottom: 13px;
  padding-left: 29px;
  padding-right: 70px;
  border-radius: 8px;

  background-color: ${(props) => props.theme.surface ?? 'none'};
  color: ${(props) => props.theme.label};
  opacity: 0.75;
`;
