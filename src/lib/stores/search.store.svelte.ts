const createSearchStore = () => {
  let groupId = $state('');

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
