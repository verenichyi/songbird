import React, { useMemo } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { nav } from 'src/constants/common';
import logo from 'src/assets/images/logo.png';
import styles from './styles.module.scss';

const Header = () => {
  const { score, currentLevel } = useSelector(
    (state: RootStateOrAny) => state.app
  );
  const questions = (
    <ul className={styles.list}>
      {useMemo(
        () =>
          nav.map((item: { id: number; title: string }) => (
            <li
              key={item.id}
              className={`${styles.listItem} ${
                currentLevel === item.id && styles.active
              }`}
            >
              {item.title}
            </li>
          )),
        [currentLevel]
      )}
    </ul>
  );

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt={'logo'} />
      <h5 className={styles.score}>Score: {score}</h5>
      {questions}
    </header>
  );
};

export default Header;
