import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import nav from 'src/constants/header';
import logo from 'src/assets/images/logo.png';
import styles from './styles.module.scss';

const Header = () => {
  const { score, currentLevel } = useSelector(
    (state: RootStateOrAny) => state.app
  );
  const questions = nav.map((item: { id: number; title: string }) => (
    <li
      key={item.id}
      className={`${styles.listItem} ${
        currentLevel === item.id ? styles.active : ''
      }`}
    >
      {item.title}
    </li>
  ));

  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src={logo}
        alt={'logo'}
      />
      <h5 className={styles.score}>Score: {score}</h5>
      <ul className={styles.list}>{questions}</ul>
    </header>
  );
};

export default Header;
