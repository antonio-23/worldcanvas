import Button from '../../components/Button/Button';
import PageNav from '../../components/PageNav/PageNav';
import styles from './Login.module.css';

function Login() {
  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor='email'>Email Adress</label>
          <input type='email' id='email' />
        </div>

        <div className={styles.row}>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' />
        </div>
        <div>
          <Button type='primary'>Login</Button>
        </div>
      </form>
    </main>
  );
}

export default Login;
