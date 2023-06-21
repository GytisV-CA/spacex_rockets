import { IRocket } from '../../../shared/api/types';
import { IDisplayValueFormatter, ITableField } from '../../../shared/types';

const formatThousands = (val: number): string => {
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '); // https://stackoverflow.com/a/2901298
};

export const fieldFormatters: { [index: string]: IDisplayValueFormatter } = {
  text: {
    align: 'left',
  },
  meters: {
    toStringFn: (val) => (val as number).toString(),
    textAfter: 'm',
    align: 'right',
  },
  kilograms: {
    toStringFn: (val) => (val as number).toString(),
    textAfter: 'kg',
    align: 'right',
  },
  dollars: {
    toStringFn: (val) => formatThousands(val as number),
    textBefore: '$',
    align: 'right',
  },
};

export const getFieldsFromRocketDataItem = (datum?: IRocket): ITableField[] => {
  return [
    {
      slug: 'rocket_name',
      displayTitle: 'Rocket name',
      displayFormatter: fieldFormatters.text,
      value: datum?.rocket_name,
    },
    {
      slug: 'diameter',
      displayTitle: 'Diameter',
      displayFormatter: fieldFormatters.meters,
      value: datum?.diameter.meters,
    },
    {
      slug: 'height',
      displayTitle: 'Height',
      displayFormatter: fieldFormatters.meters,
      value: datum?.height.meters,
    },
    {
      slug: 'mass',
      displayTitle: 'Mass',
      displayFormatter: fieldFormatters.kilograms,
      value: datum?.mass.kg,
    },
    {
      slug: 'cost_per_launch',
      displayTitle: 'Cost per launch',
      displayFormatter: fieldFormatters.dollars,
      value: datum?.cost_per_launch,
    },
  ];
};

export const rocketSearchFunction = (
  datum: IRocket,
  searchString: string
): boolean => {
  return datum.rocket_name.toLowerCase().includes(searchString.toLowerCase());
};
