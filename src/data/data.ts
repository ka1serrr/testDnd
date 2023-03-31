type TData = {
  type: string;
  data: TDataItem;
}[];

type TDataItem = {
  value: number | string;
  text: string | number;
}[];

export const DATA = [
  {
    type: 'ints',
    data: [
      { value: '7', text: '7' },
      { value: '8', text: '8' },
      { value: '9', text: '9' },
      { value: '4', text: '4' },
      { value: '5', text: '5' },
      { value: '6', text: '6' },
      { value: '1', text: '1' },
      { value: '2', text: '2' },
      { value: '3', text: '3' },
      { value: '0', text: '0' },
      { value: '.', text: ',' },
    ],
  },
  {
    type: 'operations',
    data: [
      { value: '/', text: '/' },
      { value: '*', text: 'x' },
      { value: '-', text: '-' },
      { value: '+', text: '+' },
    ],
  },
  {
    type: 'equals',
    data: [{ value: '=', text: '=' }],
  },
];

export const INT_DATA: TDataItem = [
  { value: '7', text: '7' },
  { value: '8', text: '8' },
  { value: '9', text: '9' },
  { value: '4', text: '4' },
  { value: '5', text: '5' },
  { value: '6', text: '6' },
  { value: '1', text: '1' },
  { value: '2', text: '2' },
  { value: '3', text: '3' },
  { value: '0', text: '0' },
  { value: '.', text: ',' },
];

export const OPERATIONS: TDataItem = [
  { value: '/', text: '/' },
  { value: '*', text: 'x' },
  { value: '-', text: '-' },
  { value: '+', text: '+' },
];

export const EQUAl = { value: '=', text: '=' };
