import { styled } from 'styled-components';

export const StyledTable = styled.div`
  display: grid;
  row-gap: 3px;
`;

export const StyledTableRowWrapper = styled.div`
  display: contents;
`;

const StyledTableBlock = styled.div<{ $column: number }>`
  grid-column: ${(props) => props.$column};

  font-size: 14px;
  color: ${(props) => props.theme.text};

  padding-left: 4px;
  padding-right: 4px;

  &:first-child {
    padding-left: 29px;
    border-radius: 8px 0 0 8px;
  }

  &:last-child {
    padding-right: 46px;
    border-radius: 0 8px 8px 0;
  }
`;

export const StyledTableCell = styled(StyledTableBlock)<{
  $column: number;
  $row: number;
}>`
  grid-row: ${(props) => props.$row};

  line-height: 18px;
  padding-top: 18px;
  padding-bottom: 13px;

  background-color: ${(props) => props.theme.surface};
`;

export const StyledTableColHeader = styled(StyledTableBlock)<{
  $column: number;
  $align?: 'left' | 'center' | 'right';
}>`
  grid-row: 1;
  grid-column: ${(props) => props.$column};

  display: flex;
  flex-flow: row nowrap;
  justify-content: ${(props) =>
    props.$align === 'right'
      ? 'end'
      : props.$align === 'center'
      ? 'center'
      : 'start'};

  font-weight: 500;
  line-height: 20px;
  padding-bottom: 7px;
`;
