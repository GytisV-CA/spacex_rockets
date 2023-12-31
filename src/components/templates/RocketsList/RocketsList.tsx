import { API } from '../../../shared/api';
import DataDrivenSearchTable from '../../organisms/DataDrivenSearchTable';

export default function RocketsList() {
  return (
    <DataDrivenSearchTable
      dataQuery={() => API.getRockets()} //https://sentry.io/answers/bind-functions-in-components/
      title='SpaceX rockets'
    />
  );
}
