import { clsx } from 'clsx';

interface Props {
  className?: string;
  item: string;
  name: string;
}

const SpriteIcon = ({ className, item, name }: Props) => {
  return <div className={clsx(`sprite-icon`, name === '???' ? '!bg-[url(assets/icon/missing.png)]' : `id_${item}`, className)}></div>;
};

export default SpriteIcon;
