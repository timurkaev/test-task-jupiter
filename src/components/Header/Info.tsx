import React from 'react';
import styles from './Header.module.css';

const Info = () => {
  return (
    <div className={styles.headerInfo}>
      <h1>Portfolio</h1>
      <div>
        Agency provides a full service range including technical skills, design, business
        understanding.
      </div>
    </div>
  );
};

export default Info;
