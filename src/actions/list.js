import { v4 as uuid } from 'uuid';

export const addItem = ({ name, crossedOut = false } = {}) => ({
  type: 'ADD_ITEM',
  itemToAdd: {
    name,
    crossedOut,
    id: uuid()
  }
});

export const removeById = ({ id } = {}) => ({
  type: 'REMOVE_ITEM',
  itemToRemove: {
    id
  }
});