export const addItem = ({ name, crossedOut = false } = {}) => ({
  type: 'ADD_ITEM',
  itemToAdd: {
    name,
    crossedOut  
  }
});
