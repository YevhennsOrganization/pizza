import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import css from './Navigation.module.scss';
import { cn } from '@/helpers/combineClasses';

const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className={css.nav}>
      <Link
        className={cn(css.link, pathname === '/' ? css.active : '')}
        href={'/'}
      >
        Новинки
      </Link>
      <Link
        className={cn(css.link, pathname === '/pizzas' ? css.active : '')}
        href={'/pizzas'}
      >
        Піци
      </Link>
      <Link
        className={cn(css.link, pathname === '/appetizers' ? css.active : '')}
        href={'/appetizers'}
      >
        Закуски
      </Link>
      <Link
        className={cn(css.link, pathname === '/drinks' ? css.active : '')}
        href={'/drinks'}
      >
        Напої
      </Link>
      <Link
        className={cn(css.link, pathname === '/favorite' ? css.active : '')}
        href={'/favorite'}
      >
        Улюблене
      </Link>
    </nav>
  );
};

export default Navigation;
