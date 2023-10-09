import styles from './Sidebar.module.css';
import Logo from '../Logo/Logo';
import AppNav from '../AppNav/AppNav';
import Footer from '../Footer';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Footer />
    </div>
  );
}

export default Sidebar;
