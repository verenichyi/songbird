import React from 'react';
import questionList from 'src/constants/header';
import styles from './styles.module.scss';

const Header = () => {
  const questions = questionList.map((question: string) => (
    <li className={styles.listItem}>{question}</li>
  ));

  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src={'https://birds-quiz.netlify.app/static/media/logo.4f82cd73.svg'}
        alt={'logo'}
      />
      <h5 className={styles.score}>Score: 0</h5>
      <ul className={styles.list}>{questions}</ul>
    </header>
  );
};

export default Header;
