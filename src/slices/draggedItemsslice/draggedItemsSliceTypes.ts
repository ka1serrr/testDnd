import { IDragComponent } from '@/components/UI/DroppableComponent/DroppableComponent';

export interface IDraggedItemsSliceTypes extends Array<IDragComponent> {
  items: IDragComponent[];
}
