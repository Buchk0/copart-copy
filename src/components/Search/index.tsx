import React from 'react'
import styles from "./Search.module.scss";

const Search: React.FC = () => {
  return (
    <div className={styles.root}>
      <svg
        className={styles.searchIcon}
        xmlns="http://www.w3.org/2000/svg"
        height="512"
        viewBox="0 0 512 512"
        width="512">
        <title />
        <path d="M456.69,421.39,362.6,327.3a173.81,173.81,0,0,0,34.84-104.58C397.44,126.38,319.06,48,222.72,48S48,126.38,48,222.72s78.38,174.72,174.72,174.72A173.81,173.81,0,0,0,327.3,362.6l94.09,94.09a25,25,0,0,0,35.3-35.3ZM97.92,222.72a124.8,124.8,0,1,1,124.8,124.8A124.95,124.95,0,0,1,97.92,222.72Z" />
      </svg>
      <input 
      className={styles.input}
      type='text'
      placeholder='Search Inventory by Make, Model, VIN, and More..' />
      <button className={styles.findButton}>Search Inventory</button>
    </div>
  )
}

export default Search
