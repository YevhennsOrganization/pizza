import { FC } from 'react';

import css from './Loader.module.scss';

const Loader: FC = () => (
  <>
    <span className={css.loader} />
    <p>Прохання зачекати</p>
  </>
);
export default Loader;
