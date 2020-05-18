import { v4 as uuid } from 'uuid';

export const addItem = ({ name, crossedOut = false } = {}) => ({
  type: 'ADD_ITEM',
  itemToAdd: {
    name,
    crossedOut,
    key: uuid()
  }
});
