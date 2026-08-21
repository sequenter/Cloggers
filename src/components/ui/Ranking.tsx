import { ModeIcon, Select } from '@components';

import { useGroup } from '@hooks/useGroup';
import { useSearch } from '@hooks/useSearch';

import { clsx } from 'clsx';
import { useCallback, useMemo, useState } from 'react';

const Ranking = () => {
  const [filter, setFilter] = useState(-1);

  const { selectedPlayers, resetSelectedPlayers, setSelectedPlayers, toggleSelectedPlayer } = useSearch();
  const { players } = useGroup();

  const rankings = useMemo(
    /**
     * Filter players by their synced status and sort them by their amount of collections.
     */
    () => {
      return Object.values(players)
        .filter(({ isSynced }) => isSynced)
        .sort((a, b) => b.totalItemsCollected - a.totalItemsCollected);
    },
    [players]
  );

  const onFilter = useCallback(
    /**
     * On filter select change, filter players by their game mode.
     */
    (value: number) => {
      if (value === -1) {
        resetSelectedPlayers();
      } else {
        setSelectedPlayers(rankings.filter(({ gameMode }) => gameMode === value).map(({ name }) => name));
      }

      setFilter(value);
    },
    [rankings, resetSelectedPlayers, setSelectedPlayers]
  );

  return (
    <div className="flex flex-col gap-2 p-2 border-2 border-black bg-grey-100">
      <div className="relative flex flex-col items-center justify-center p-2 border-2 border-grey-50 bg-primary-100">
        <span className="font-bold text-2xl">Group Rankings</span>

        <div className="flex items-center md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2">
          <Select
            label="Filter:"
            options={[
              { name: 'All', value: -1 },
              { name: 'Normal', value: 0 },
              { name: 'Ironman', value: 1 },
              { name: 'Hardcore Ironman', value: 3 },
              { name: 'Ultimate Ironman', value: 2 }
            ]}
            value={filter}
            onChange={onFilter}
          />
        </div>
      </div>

      <div className="flex p-2 border-2 gap-2 overflow-x-scroll overflow-y-hidden whitespace-nowrap border-grey-50 bg-primary-100">
        {rankings.length > 0 ? (
          rankings.map(({ gameMode, name, totalItemsCollected }, i) => (
            <button
              key={name}
              className={clsx(
                'flex items-center border-2 border-grey-50',
                selectedPlayers.includes(name) ? 'bg-selected' : 'bg-primary-300'
              )}
              onClick={() => toggleSelectedPlayer(name)}
            >
              {i < 3 && (
                <span
                  className={clsx(
                    'text-2xl px-2 border-r-2 font-bold text-shadow-none bg-linear-to-r text-black border-grey-50',
                    i === 0 && 'from-yellow-200 to-yellow-500',
                    i === 1 && 'from-gray-200 to-gray-500',
                    i === 2 && 'from-amber-800 to-amber-950'
                  )}
                >
                  {i + 1}
                </span>
              )}

              <div className="flex items-center justify-between gap-2 px-2 w-full">
                <span className="text-xl">{`${i > 2 ? `${i + 1}.` : ''} ${name}`}</span>

                <div className="flex items-center gap-2">
                  <ModeIcon gameMode={gameMode} />

                  <span className="text-xl text-white">{totalItemsCollected}</span>
                </div>
              </div>
            </button>
          ))
        ) : (
          <div className="flex items-center justify-center w-full">
            <span className="text-lg">Search for a group to view rankings</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ranking;
