import styles from './AppLayout.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Map from '../../components/Map/Map';
import User from '../../components/User/User';

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
