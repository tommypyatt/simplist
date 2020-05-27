import { v4 as uuid } from 'uuid';

export const addItem = ({ name, crossedOut = false } = {}) => ({
  type: 'ADD_ITEM',
  itemToAdd: {
    name,
    crossedOut,
    id: uuid()
  }
});

export const reAddItem = ({ name, id, crossedOut = false } = {}) => ({
  type: 'ADD_ITEM',
  itemToAdd: {
    name,
    id,
    crossedOut
  }
});

export const removeById = ({ id } = {}) => ({
  type: 'REMOVE_ITEM',
  itemToRemove: {
    id
  }
});

export const setCheckedById = ({ id, checked } = {}) => {
  const type = checked ? 'CHECK_ITEM' : 'UNCHECK_ITEM';

  return {
    type,
    itemToAdjust: {
      id
    }
  };
};

export const clear = () => ({
  type: 'REMOVE_ALL'
});
