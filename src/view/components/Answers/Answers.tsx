import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Bird } from 'src/constants/types';
import useActions from 'src/hooks/useActions';
import actions from 'src/redux/action-creators';
import styles from './styles.module.scss';

const Answers = ({ birds }: { birds: Bird[] }) => {
  const { questionBirdID } = useSelector((state: RootStateOrAny) => state.app);
  const { setDescriptionBirdID, setIsButtonDisabled, setIsMatch } =
    useActions(actions);

  const handleClick = (id: number) => {
    setDescriptionBirdID(id);

    if (questionBirdID === id) {
      setIsButtonDisabled(false);
      setIsMatch(true);
    }
  };

  const list = birds.map((item: Bird) => (
    <li key={item.id} className={styles.answer}>
      <button
        onClick={() => handleClick(item.id)}
        type={'button'}
        className={styles.btn}
      >
        <span className={`${styles.indicator} ${styles.default}`} />
        {item.name}
      </button>
    </li>
  ));

  return (
    <section className={styles.answers}>
      <ul>{list}</ul>
    </section>
  );
};

export default Answers;
