import React, { FC } from 'react';
import Link from 'next/link';

import { IconType } from 'react-icons';

import css from './HeaderNavLink.module.scss';

interface Props {
  hrefProp: string;
  Icon: IconType;
  text: string | number;
}
const HeaderNavLink: FC<Props> = ({ hrefProp, Icon, text }) => {
  return (
    <Link className={css.navLink} href={hrefProp}>
      <Icon className={css.navLinkIcon} />
      <p>{text}</p>
    </Link>
  );
};

export default HeaderNavLink;
