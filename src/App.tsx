import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;
