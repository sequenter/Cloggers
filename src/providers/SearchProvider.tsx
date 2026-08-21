import { SearchContext } from '@hooks/useSearch';

import { type ReactNode, useCallback, useState } from 'react';

interface Props {
  children: ReactNode;
}

export const SearchProvider = ({ children }: Props) => {
  const [groupId, setGroupId] = useState(() => new URLSearchParams(window.location.search).get('group') ?? '');
  const [selectedPlayers, setSelectedPlayers] = useState<Array<string>>([]);

  const isSelectedPlayer = useCallback(
    /**
     * Determines whether or not a given player is currently being filtered.
     * @param {string} player
     */
    (player: string) => !selectedPlayers.length || selectedPlayers.includes(player),
    [selectedPlayers]
  );

  /**
   * Appends or removes a player depending if the player is already selected.
   * @param {string} player Player to toggle
   */
  const toggleSelectedPlayer = (player: string) =>
    setSelectedPlayers((curr) => (curr.includes(player) ? curr.filter((currValue) => currValue !== player) : [...curr, player]));

  /**
   * Reset selected players.
   */
  const resetSelectedPlayers = () => setSelectedPlayers([]);

  return (
    <SearchContext.Provider
      value={{ groupId, selectedPlayers, isSelectedPlayer, setGroupId, resetSelectedPlayers, setSelectedPlayers, toggleSelectedPlayer }}
    >
      {children}
    </SearchContext.Provider>
  );
};
