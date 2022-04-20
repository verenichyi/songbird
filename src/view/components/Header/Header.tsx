import React, { useMemo } from 'react';
import logo from 'src/assets/images/logo.png';
import styles from './styles.module.scss';

interface NavItem {
  id: number;
  title: string;
}

type Props = {
  score: number;
  currentLevel: number;
  nav: NavItem[];
};

const Header = ({ score, currentLevel, nav = [] }: Props) => {
  const questions = useMemo(
    () => (
      <ul className={styles.list}>
        {nav.map((item: NavItem) => {
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
    [currentLevel, nav]
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
