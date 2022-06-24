import React from 'react';
import { data, DataType, uploadingData } from '../../database';
import styles from './Portfolio.module.css';
import PortfolioList from './PortfolioList';

type CategoryType = {
  id: number;
  name: string;
  path: string;
};

const categoryList: CategoryType[] = [
  { id: 1, name: 'Show All', path: '/' },
  { id: 2, name: 'Design', path: '/' },
  { id: 3, name: 'Branding', path: '/' },
  { id: 4, name: 'Illustration', path: '/' },
  { id: 5, name: 'Motion', path: '/' },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = React.useState<
    string | 'Show All' | 'Design' | 'Branding' | 'Illustration' | 'Motion'
  >('Show All');
  const [portfolioData, setPortfolioData] = React.useState<DataType[]>(data);

  const dataRef = React.useRef<DataType[]>();
  const ref = (dataRef.current = portfolioData);

  const onActiveCategory = React.useCallback((category: string, e: React.SyntheticEvent) => {
    e.stopPropagation();
    switch (category) {
      case 'Show All': {
        const data = ref.filter((obj) => obj.category !== '');
        setPortfolioData(data);
        break;
      }

      case 'Design': {
        const data = ref.filter((obj) => obj.category === 'Design');
        setPortfolioData(data);
        break;
      }
      case 'Branding': {
        const data = ref.filter((obj) => obj.category === 'Branding');
        setPortfolioData(data);
        break;
      }
      case 'Illustration': {
        const data = ref.filter((obj) => obj.category === 'Illustration');
        setPortfolioData(data);
        break;
      }
      case 'Motion': {
        const data = ref.filter((obj) => obj.category === 'Motion');
        setPortfolioData(data);
        break;
      }
    }
    setActiveCategory(category);
  }, []);

  const loadMore = React.useCallback(() => {
    setPortfolioData((prev) => [...prev.concat(uploadingData)]);
  }, []);

  return (
    <div className={styles.portfolio}>
      <select
        value={activeCategory}
        onChange={(e) => onActiveCategory(e.target.value, e)}
        className={styles.select}
      >
        {categoryList.map((obj) => (
          <option value={obj.name} key={obj.id}>
            {obj.name}
          </option>
        ))}
      </select>
      <ul className={styles.categories}>
        {categoryList.map((obj) => (
          <li
            onClick={(e) => onActiveCategory(obj.name, e)}
            style={{ color: activeCategory === obj.name ? '#16CD53' : '' }}
            key={obj.id}
          >
            {obj.name}
          </li>
        ))}
      </ul>
      <PortfolioList onActiveCategory={onActiveCategory} portfolioData={portfolioData} />
      <div className={styles.loadMore}>
        {portfolioData.length <= 9 && (
          <button onClick={loadMore} className={styles.loadMoreBtn}>
            LOAD MORE
          </button>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
