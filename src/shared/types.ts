export interface IDisplayValueFormatter {
  toStringFn?: (value: any) => string;
  textBefore?: string | null;
  textAfter?: string | null;
  align?: 'left' | 'center' | 'right';
}

export interface ITableField {
  slug: string;
  displayTitle: string;
  displayFormatter: IDisplayValueFormatter;
  value: any;
}

export interface IIdentifiableItem {
  id: string;
}
