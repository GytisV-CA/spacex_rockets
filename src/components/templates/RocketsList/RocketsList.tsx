import { useState, useEffect } from 'react';
import { API } from '../../../shared/api';
import { IRocket } from '../../../shared/api/types';

export default function RocketsList() {
  console.log('rendering RocketList');

  const [rockets, setRockets] = useState<null | IRocket[]>(null);
  const [loading, setLoading] = useState(true); //TODO: move loading & error logic to a less specific component (or move specificity to props)
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    console.log('useEffect');

    (async () => {
      try {
        const data = await (await API.getRockets()).json();
        setRockets(data);
        setLoading(false);
      } catch (error) {
        setError('something went wrong');
        setLoading(false);
      }
    })();

    return () => {
      // cleanup logic
    };
  }, []);

  return (
    <div>
      <h1>Rockets</h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        rockets?.map((rocket) => (
          <div key={`rocket_${rocket.id}`}>{rocket.rocket_name}</div>
        ))
      )}
    </div>
  );
}
