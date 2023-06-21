import { createContext } from 'react';
import { IDisplayValueFormatter, ITableField } from './shared/types.ts';
import ThemeProvider from './shared/theme/ThemeProvider.tsx';
import RocketsList from './components/templates/RocketsList';
import {
  fieldFormatters,
  getFieldsFromRocketDataItem,
  rocketSearchFunction,
} from './components/templates/RocketsList/RocketsContext.ts';
import { IRocket } from './shared/api/types.ts';

//using context to pass through props to deeply nested components

interface IDataTypeContext {
  fieldFormatters: { [index: string]: IDisplayValueFormatter };
  getFieldsFunction: <T>(datum?: T) => ITableField[];
  searchFunction: <T>(datum: T, searchString: string) => boolean;
}

export const DataTypeContext = createContext<IDataTypeContext>({
  fieldFormatters: {},
  getFieldsFunction: () => [],
  searchFunction: () => false,
});

const RocketsContext: IDataTypeContext = {
  fieldFormatters: fieldFormatters,
  getFieldsFunction: (datum) => getFieldsFromRocketDataItem(datum as IRocket),
  searchFunction: (datum, searchString) =>
    rocketSearchFunction(datum as IRocket, searchString),
};

function App() {
  return (
    <ThemeProvider>
      <div>
        <DataTypeContext.Provider value={RocketsContext}>
          <RocketsList />
        </DataTypeContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
