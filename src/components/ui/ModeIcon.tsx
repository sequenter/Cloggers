import { gameModeIcon } from '@utils/icon';

import { clsx } from 'clsx';

interface Props {
  gameMode: number;
  minMode?: number;
}

const ModeIcon = ({ gameMode, minMode = 1 }: Props) => {
  const ironman = gameMode >= 1;

  return (
    gameMode >= minMode && (
      <div className={clsx('flex items-center justify-center', ironman && 'bg-black border-2 border-grey-50 w-6 h-6')}>
        <img
          className={clsx(ironman ? 'w-4 h-4' : 'w-6 h-6')}
          alt="IM"
          src={gameModeIcon[gameMode]}
        />
      </div>
    )
  );
};

export default ModeIcon;
