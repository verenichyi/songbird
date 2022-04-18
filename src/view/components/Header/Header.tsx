import React, { useMemo } from 'react';
import logo from 'src/assets/images/logo.png';
import { nav } from 'src/constants/common';
import styles from './styles.module.scss';

type Props = {
  score: number;
  currentLevel: number;
};

const Header = ({ score, currentLevel }: Props) => {
  const questions = useMemo(
    () => (
      <ul className={styles.list}>
        {nav.map((item: { id: number; title: string }) => {
          const isActive = currentLevel === item.id;

          return (
            <li
              key={item.id}
              className={`${styles.listItem} ${isActive && styles.active}`}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    ),
    [currentLevel]
  );

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
      <h5 className={styles.score}>Score: {score}</h5>
      {questions}
    </header>
  );
};

export default Header;
