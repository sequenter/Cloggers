const createSearchStore = () => {
  let groupId = $state('');
  let selectedPlayers: Array<string> = $state([]);

  /**
   * Updates groupId.
   * @param {string} value The value to update the groupId to
   */
  const setGroupId = (value: string) => {
    groupId = value;
    selectedPlayers = [];
  };

  /**
   * Updates selected players.
   * @param {Array<string>} value Selected players
   */
  const setSelectedPlayers = (value: Array<string>) => {
    selectedPlayers = value;
  };

  /**
   * Appends or removed a player depending if the player already exists within the selected players.
   * @param {string} value Player to toggle
   */
  const toggleSelectedPlayer = (value: string) => {
    selectedPlayers = selectedPlayers.includes(value)
      ? selectedPlayers.filter((selectedPlayer) => selectedPlayer !== value)
      : [...selectedPlayers, value];
  };

  /**
   * Reset selected players.
   */
  const resetSelectedPlayers = () => {
    selectedPlayers = [];
  };

  return {
    get groupId() {
      return groupId;
    },
    get selectedPlayers() {
      return selectedPlayers;
    },
    get resetSelectedPlayers() {
      return resetSelectedPlayers;
    },
    get setGroupId() {
      return setGroupId;
    },
    get setSelectedPlayers() {
      return setSelectedPlayers;
    },
    get toggleSelectedPlayer() {
      return toggleSelectedPlayer;
    }
  };
};

export const searchStore = createSearchStore();
