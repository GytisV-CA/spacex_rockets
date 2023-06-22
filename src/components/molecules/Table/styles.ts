import { styled } from 'styled-components';
import { ISort } from './Table';

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
    padding-right: 70px;
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
  $sort: ISort['direction'];
  $nextSortDirection: ISort['direction'];
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

  line-height: 20px;
  padding-bottom: 7px;

  font-weight: ${(props) => (props.$sort === 'none' ? 500 : 800)};
  color: ${(props) => props.theme[props.$sort === 'none' ? 'text' : 'heading']};

  /* cursor: ${(props) => {
    switch (props.$nextSortDirection) {
      case 'asc':
        return 'n-resize';
      case 'desc':
        return 's-resize';
      default:
        return 'pointer';
    }
  }}; */

  cursor: pointer;

  /* https://stackoverflow.com/a/46373741 */
  &::after {
    margin-left: ${(props) => (props.$sort === 'none' ? 0 : '0.25em')};
    content: '${(props) => {
      switch (props.$sort) {
        case 'asc':
          return '▲';
        case 'desc':
          return '▼';
        default:
          return '';
      }
    }}';
  }
`;
