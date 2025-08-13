const createSearchStore = () => {
  let groupId = $state('');

  /**
   * Update the groupId with the given value.
   * @param {string} value The value to update the groupId to
   */
  const setGroupId = (value: string) => {
    groupId = value;
  };

  return {
    get groupId() {
      return groupId;
    },
    get setGroupId() {
      return setGroupId;
    }
  };
};

export const searchStore = createSearchStore();
