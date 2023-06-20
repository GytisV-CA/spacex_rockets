import { useRef } from 'react';
import { API } from '../../../shared/api';
import { IDisplayValueFormatter } from '../../atoms/DataFieldDisplay/DataFieldDisplay';
import DataDrivenSearchTable from '../../organisms/DataDrivenSearchTable';

export default function RocketsList() {
  const apiRef = useRef(API);

  console.log(apiRef.current);

  return (
    <DataDrivenSearchTable
      dataQuery={apiRef.current.getRockets}
      title='SpaceX rockets'
    />
  );
}
