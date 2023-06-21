import { IDisplayValueFormatter } from '../../../shared/types';
import { StyledDisplayField } from './styles';

interface IDataFieldDisplayProps {
  value: any;
  formatter: IDisplayValueFormatter;
}

export default function DataFieldDisplay({
  value,
  formatter,
}: IDataFieldDisplayProps) {
  return (
    <StyledDisplayField $align={formatter.align}>
      {formatter.textBefore?.length ? (
        <span>{formatter.textBefore}</span>
      ) : (
        <></>
      )}
      {formatter.toStringFn ? formatter.toStringFn(value) : value}
      {formatter.textAfter?.length ? <span>{formatter.textAfter}</span> : <></>}
    </StyledDisplayField>
  );
}
