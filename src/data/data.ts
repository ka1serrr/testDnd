export type TData = {
  type: string;
  id: number;
  data: TDataItem;
}[];

export type TDataItem = {
  value: number | string;
  text: string | number;
}[];

export const DATA: TData = [
  {
    type: 'result',
    id: 14594589689,
    data: [{ value: '0', text: 0 }],
  },
  {
    type: 'operations',
    id: 1561616165,
    data: [
      { value: '/', text: '/' },
      { value: '*', text: 'x' },
      { value: '-', text: '-' },
      { value: '+', text: '+' },
    ],
  },
  {
    type: 'ints',
    id: 1561156236,
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
    type: 'equals',
    id: 11561642564261,
    data: [{ value: '=', text: '=' }],
  },
];

export const INTS: TDataItem = [
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

export const OPERTAIONS: TDataItem = [
  { value: '/', text: '/' },
  { value: '*', text: 'x' },
  { value: '-', text: '-' },
  { value: '+', text: '+' },
];

export const RESULT: TDataItem = [{ value: '0', text: 0 }];

export const EQUAL: TDataItem = [{ value: '=', text: '=' }];

export interface IFOrData {
  data: TDataItem;
}
