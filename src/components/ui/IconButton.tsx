import { Icon } from '@components';

import { clsx } from 'clsx';

interface Props {
  className?: string;
  disabled?: boolean;
  image?: boolean;
  path: string;
  title: string;
  onClick: Runnable;
}

const IconButton = ({ className, disabled = false, image = false, path, title, onClick }: Props) => {
  return (
    <button
      className={clsx(
        'flex items-center justify-center w-6 h-6 border-2 border-black bg-linear-to-r from-button-start-stop to-button-end-stop',
        disabled && 'opacity-50',
        className
      )}
      disabled={disabled}
      title={title}
      onClick={onClick}
    >
      {image ? (
        <img
          className="w-4 h-4"
          alt={title}
          draggable={false}
          src={path}
        />
      ) : (
        <Icon
          className="w-6 h-6 text-black"
          title={title}
          path={path}
        />
      )}
    </button>
  );
};

export default IconButton;
