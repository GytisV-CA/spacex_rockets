import { useState, useEffect } from 'react';
import SearchTable from '../SearchTable';
import { ISearchableItem } from '../SearchTable/SearchTable';

interface IDataDrivenSearchTableProps {
  dataQuery: () => Promise<Response>;
  title?: string;
}

export default function DataDrivenSearchTable({
  dataQuery,
  title,
}: IDataDrivenSearchTableProps) {
  console.log('rendering DataDrivenSearchTable');

  const [data, setData] = useState<null | ISearchableItem[]>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    console.log('useEffect DataDrivenSearchTable');

    (async () => {
      try {
        const data = await (await dataQuery()).json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);

        setError('something went wrong');
        setLoading(false);
      }
    })();

    return () => {
      // cleanup logic
    };
  }, [dataQuery]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : data?.length ? (
        <SearchTable data={data} title={title} />
      ) : (
        <p>no data</p>
      )}
    </div>
  );
}
