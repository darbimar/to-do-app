import React from 'react';
import Button from '../Button/Button';
import styles from './Filter.module.scss';

type FilterProps = {
  filter: string;
  setFilter: (arg: string) => void;
};

const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {
  return (
    <div className={styles.wrapper}>
      <Button isActive={filter === 'All'} onClick={() => setFilter('All')}>
        All
      </Button>
      <Button isActive={filter === 'Active'} onClick={() => setFilter('Active')}>
        Active
      </Button>
      <Button isActive={filter === 'Completed'} onClick={() => setFilter('Completed')}>
        Completed
      </Button>
    </div>
  );
};

export default Filter;
