export interface IDragComponent {
  type: string;
  id: string;
  index?: number;
}

export interface IDragComponentFirstDrag extends IDragComponent {
  firstDrag: boolean;
}
