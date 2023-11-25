import React, { FC } from 'react';
import Link from 'next/link';
import css from './HeaderNavLink.module.scss';
import Icon from '@/UI/basic/Icon/Icon';

interface Props {
  hrefProp: string;
  text: string | number;
  svg: TypeIcon;
}
const HeaderNavLink: FC<Props> = ({ hrefProp, text, svg }) => {
  return (
    <Link className={css.navLink} href={hrefProp}>
      <Icon svg={svg} iconWidth={34} iconHeight={34} />
      <p>{text}</p>
    </Link>
  );
};

export default HeaderNavLink;
