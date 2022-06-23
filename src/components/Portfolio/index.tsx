import React from 'react';
import { data, DataType } from '../../database';
import styles from './Portfolio.module.css';
import PortfolioList from './PortfolioList';
import { log } from 'util';

type CategoryType = {
  id: number;
  name: string;
  path: string;
};

const CategoryList: CategoryType[] = [
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
  const [portfolioData, setPortfolioData] = React.useState<DataType[]>(data.slice(0, 9));
  const [loadingMore, setLoadingMore] = React.useState<boolean>(true);

  const onActiveCategory = React.useCallback((category: string, e: React.SyntheticEvent) => {
    e.stopPropagation();
    // const filteredCategory = [...portfolioData, ...portfolioData2].filter(
    //   (obj) => obj.category === category,
    // );
    const filteredCategory = [...portfolioData, ...portfolioData.slice(9, 18)].filter((obj) => {
      if (category === 'Show All') {
        return obj;
      } else if (category === obj.category) {
        return obj.category === category;
      }
    });
    setPortfolioData(filteredCategory);
    setActiveCategory(category);
  }, []);
  console.log(portfolioData.length);

  const loadMore = React.useCallback(() => {
    setPortfolioData(data.slice(0));
    setLoadingMore(false);
  }, []);

  console.log(activeCategory);

  return (
    <div className={styles.portfolio}>
      <ul className={styles.categories}>
        {CategoryList.map((obj) => (
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
        {loadingMore && (
          <button onClick={loadMore} className={styles.loadMoreBtn}>
            LOAD MORE
          </button>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
