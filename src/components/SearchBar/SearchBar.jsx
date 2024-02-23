import debounce from 'lodash/debounce';

import styles from './SearchBar.module.css';

function SearchBar({ onSearch }) {
  const handleSearch = (e) => {
    console.log(e.target.value);
    onSearch(e.target.value);
  };

  const delayedSearch = debounce(handleSearch, 500);

  return (
    <input
      type="text"
      className={styles.search}
      placeholder="Search your trip"
      onChange={(e) => {
        delayedSearch(e);
      }}
    />
  );
}

export default SearchBar;
