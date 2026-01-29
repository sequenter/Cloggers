import { clsx } from 'clsx';

interface Props {
  className?: string;
  item: string;
  name: string;
}

const SpriteIcon = ({ className, item, name }: Props) => {
  return <div className={clsx(`sprite-icon id_${item}`, name === '???' && '!bg-[url(assets/icon/missing.png)]', className)}></div>;
};

export default SpriteIcon;
