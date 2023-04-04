import constructor from './imgs/constructor.svg';
import runTime from './imgs/runTime.svg';

interface IModeBtnsData {
  img: string;
  title: string;
}

export const data: IModeBtnsData[] = [
  { img: runTime, title: 'Runtime' },
  { img: constructor, title: 'Constructor' },
];
