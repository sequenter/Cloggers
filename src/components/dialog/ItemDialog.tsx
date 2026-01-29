import { ModeIcon, SpriteIcon } from '@components';
import { Dialog } from '@components/dialog/Dialog';

import { useGroup } from '@hooks/useGroup';

interface Props {
  item: string;
  name: string;
  playersCollected: Array<string>;
  playersNotCollected: Array<string>;
}

export const ItemDialog = ({ item, name, playersCollected, playersNotCollected }: Props) => {
  const { players } = useGroup();

  return (
    <Dialog
      title={name === '???' ? item : name}
      icon={
        <SpriteIcon
          item={item}
          name={name}
        />
      }
    >
      {playersCollected.length > 0 ? (
        <div className="flex flex-col w-full overflow-auto">
          <span className="sticky top-0 text-xl px-2 border-b-2 border-grey-50 text-white bg-primary-300">
            {`Collected (${playersCollected.length})`}
          </span>

          <ul className="text-xl w-full">
            {playersCollected
              .sort((a, b) => a.localeCompare(b))
              .map((player) => (
                <li
                  key={player}
                  className="flex items-center justify-between px-2 even:bg-primary-50"
                >
                  <span>{player}</span>

                  <ModeIcon gameMode={players[player].gameMode} />
                </li>
              ))}
          </ul>

          {playersNotCollected.length > 0 && (
            <details className="open:[&>summary]:border-b-2">
              <summary className="sticky top-0 text-xl px-2 cursor-pointer border-t-2 border-grey-50 bg-primary-300 text-white">
                {`Not collected (${playersNotCollected.length})`}
              </summary>

              <ul className="text-xl w-full">
                {playersNotCollected
                  .sort((a, b) => a.localeCompare(b))
                  .map((player) => (
                    <li
                      key={player}
                      className="flex items-center justify-between gap-2 px-2 even:bg-primary-50"
                    >
                      <span>{player}</span>

                      <ModeIcon gameMode={players[player].gameMode} />
                    </li>
                  ))}
              </ul>
            </details>
          )}
        </div>
      ) : (
        <span className="text-xl">Noone has collected this item!</span>
      )}
    </Dialog>
  );
};
