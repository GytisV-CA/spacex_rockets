import { useContext, useState } from 'react';
import { DataTypeContext } from '../../../App';
import { IIdentifiableItem, ITableField } from '../../../shared/types';
import {
  StyledTable,
  StyledTableColHeader,
  StyledTableRowWrapper,
  StyledTableCell,
} from './styles';
import DataFieldDisplay from '../../atoms/DataFieldDisplay';

interface ITableRowItemProps {
  fields: ITableField[];
  rowIndex: number;
}

function TableRowItem({ fields, rowIndex }: ITableRowItemProps) {
  return (
    <StyledTableRowWrapper>
      {fields.map((field, index) => (
        <StyledTableCell key={field.slug} $column={index + 1} $row={rowIndex}>
          <DataFieldDisplay
            value={field.value}
            formatter={field.displayFormatter}
          />
        </StyledTableCell>
      ))}
    </StyledTableRowWrapper>
  );
}

export interface ISort {
  field: string | null;
  direction: 'asc' | 'desc' | 'none';
}

export default function Table({ data }: { data: IIdentifiableItem[] }) {
  console.log('rendering Table');

  const { getFieldsFunction } = useContext(DataTypeContext);

  const [sort, setSort] = useState<ISort>({ field: null, direction: 'none' });

  const toggleSortDirection = (
    prev: ISort['direction']
  ): ISort['direction'] => {
    switch (prev) {
      case 'none':
        return 'asc';
      case 'asc':
        return 'desc';
      case 'desc':
        return 'none';
      default:
        return 'none';
    }
  };

  const sortByField = (fieldName: string) => {
    setSort((prev) => {
      if (prev.field === fieldName) {
        return {
          field: prev.field,
          direction: toggleSortDirection(prev.direction),
        };
      } else {
        return { field: fieldName, direction: 'asc' };
      }
    });

    //Sometimes you useEffect. Sometimes you don't. Why?
  };

  const toSorted = (
    fieldName: string | null,
    direction: ISort['direction'],
    data: IIdentifiableItem[]
  ): IIdentifiableItem[] => {
    if (direction === 'none' || fieldName === null) {
      return data;
    }

    const directionModifier = direction === 'asc' ? 1 : -1;

    const fieldsDef = getFieldsFunction();
    const fieldIndex = fieldsDef.findIndex((field) => field.slug === fieldName);
    //toSorted not campatible with TypeScript yet
    //need deep clone because react props are immutable
    return data.toSorted((item1, item2) => {
      const val1 = getFieldsFunction(item1)[fieldIndex].value;
      const val2 = getFieldsFunction(item2)[fieldIndex].value;
      return (val1 > val2 ? 1 : val1 < val2 ? -1 : 0) * directionModifier;
    });
  };

  return (
    <StyledTable>
      <StyledTableRowWrapper>
        {getFieldsFunction().map((field, index) => (
          <StyledTableColHeader
            key={`header_${field.slug}`}
            $column={index + 1}
            $align={field.displayFormatter.align}
            $sort={sort.field === field.slug ? sort.direction : 'none'}
            $nextSortDirection={toggleSortDirection(
              sort.field === field.slug ? sort.direction : 'none'
            )}
            onClick={() => sortByField(field.slug)}
          >
            {field.displayTitle}
          </StyledTableColHeader>
        ))}
      </StyledTableRowWrapper>
      {toSorted(sort.field, sort.direction, data).map((item, index) => (
        <TableRowItem
          key={`row_${item.id}`}
          fields={getFieldsFunction(item)}
          rowIndex={index + 2}
        />
      ))}
    </StyledTable>
  );
}
