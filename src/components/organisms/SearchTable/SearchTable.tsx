import { useContext, useEffect, useState } from 'react';
import { DataTypeContext } from '../../../App';
import Input from '../../atoms/Input';
import Table from '../../molecules/Table';
import searchIcon from '../../../assets/icon-search.svg';
import {
  StyledSearchBox,
  StyledSearchTableContainer,
  StyledTablePlaceholder,
} from './styles';

export interface ISearchableItem {
  id: string;
}

interface ISearchTableProps {
  title?: string;
  data: ISearchableItem[];
}

export default function SearchTable({ title, data }: ISearchTableProps) {
  console.log('rendering SearchTable');

  const { searchFunction } = useContext(DataTypeContext);

  const [displayData, setDisplayData] = useState<ISearchableItem[]>(data);
  const [searchValue, setSearchValue] = useState('');

  // searchValue state changes on user input; this change triggers effect which sets displayData state
  useEffect(() => {
    console.log('useEffect SearchTable');
    setDisplayData(
      searchValue
        ? data.filter((datum) => searchFunction(datum, searchValue))
        : data
    );
  }, [searchValue, data, searchFunction]);

  return (
    <StyledSearchTableContainer>
      <StyledSearchBox>
        {title && <h1>{title}</h1>}
        <label>{`${displayData.length} Results`}</label>
        <Input
          type='text'
          value={searchValue}
          setValue={setSearchValue}
          placeholder='Search'
          icon={searchIcon}
          fullWidth
        />
      </StyledSearchBox>
      {displayData.length ? (
        <Table data={displayData} />
      ) : (
        <StyledTablePlaceholder>Nothing to see here</StyledTablePlaceholder>
      )}
    </StyledSearchTableContainer>
  );
}
