import { v4 as uuid } from 'uuid';

export const removeRecent = ({ id } = {}) => ({
  type: 'REMOVE_RECENT',
  itemToRemove: {
    id
  }
});
