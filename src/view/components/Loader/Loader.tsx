import React from 'react';
import { Oval } from 'react-loader-spinner';

import styles from './styles.module.scss';

const Loader = () => (
  <div className={styles.loader}>
    <Oval height={100} width={100} color={'blue'} />
  </div>
);

export default Loader;
