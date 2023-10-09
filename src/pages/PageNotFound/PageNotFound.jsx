import styles from './PageNotFound.module.css';

function PageNotFound() {
  return (
    <div className={styles.svg}>
      <img src='/404.svg' alt='Page not found image' />
      <h1>Page not found</h1>
    </div>
  );
}

export default PageNotFound;
