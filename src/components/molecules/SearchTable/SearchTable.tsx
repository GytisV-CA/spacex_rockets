import { useState } from 'react';

interface ISearchableItem {
  id: string;
  searchFunction: (searchValue: string) => boolean;
}

interface ISearchTableProps {
  title?: string;
  data: ISearchableItem[];
}

export default function SearchTable({ title = null, data }: ISearchTableProps) {
  const [displayData, setDisplayData] = useState<ISearchableItem[]>([]);
  const [searchValue, setSearchValue] = useState('');

  return <div>SearchTable</div>;
}
