import React from 'react';
import styles from './Portfolio.module.css';
import { DataType } from '../../database';

interface PortfolioListProps {
  portfolioData: DataType[];
  onActiveCategory: (category: string, e: React.SyntheticEvent) => void;
}

const PortfolioList: React.FC<PortfolioListProps> = ({ portfolioData, onActiveCategory }) => {
  const [activeCart, setActiveCart] = React.useState<number | null>(null);

  const onSelectActiveCart = (id: number) => {
    if (id !== activeCart) {
      setActiveCart(id);
    } else {
      setActiveCart(null);
    }
  };

  return (
    <div className={styles.portfolioList}>
      {portfolioData.map((obj) => (
        <div
          onClick={() => onSelectActiveCart(obj.id)}
          key={obj.id}
          style={{
            backgroundImage: `url('${obj.img}')`,
            outline: activeCart === obj.id ? '7px solid #4FE24A' : '',
          }}
          className={styles.portfolioItems}
        >
          <button onClick={(e) => onActiveCategory(obj.category, e)} className={styles.categoryBtn}>
            {obj.category}
          </button>
          <h1>{obj.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default PortfolioList;
