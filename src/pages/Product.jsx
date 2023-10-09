import PageNav from '../components/PageNav/PageNav';
import styles from './Product.module.css';

function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img src='img-2.jpg' alt='person walking in the mountains' />
        <div>
          <h2>About WorldCanvas</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Product;
