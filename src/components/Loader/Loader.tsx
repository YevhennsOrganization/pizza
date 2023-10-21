import { FC, HTMLProps } from 'react';

import css from './Loader.module.scss';

const Loader: FC<HTMLProps<HTMLSpanElement>> = () => <span className={css.loader}></span>;
export default Loader;
