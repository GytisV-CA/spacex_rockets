import { useState } from 'react';

export interface ISearchableItem {
  id: string;
}

interface ISearchTableProps {
  title?: string;
  data: ISearchableItem[];
  // searchFunction: (searchValue: string) => boolean;
}

export default function SearchTable({ title, data }: ISearchTableProps) {
  const [displayData, setDisplayData] = useState<ISearchableItem[]>(data);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div>
      {title && <h1>{title}</h1>}
      {displayData.map((item) => (
        <div>{item.id}</div>
      ))}
    </div>
  );
}
