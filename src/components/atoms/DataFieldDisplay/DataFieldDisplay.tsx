export interface IDisplayValueFormatter {
  toString?: (value: any) => string;
  textBefore?: string | null;
  textAfter?: string | null;
  align?: 'left' | 'center' | 'right';
}

interface IDataFieldDisplayProps {
  value: any;
  formatter: IDisplayValueFormatter;
}

export default function DataFieldDisplay({
  value,
  formatter,
}: IDataFieldDisplayProps) {
  return (
    <>
      {formatter.textBefore?.length ? <span>formatter.textBefore</span> : <></>}
      {formatter.toString ? formatter.toString(value) : value}
      {formatter.textAfter?.length ? <span>formatter.textAfter</span> : <></>}
    </>
  );
}
