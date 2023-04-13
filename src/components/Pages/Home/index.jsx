import React from 'react';
import { Link } from 'react-router-dom';
import { TOKEN } from '../../../utils/constants';
import styles from './home.module.css';

export const Home = () => {
  const token = localStorage.getItem(TOKEN);

  return (
    <>
      <div className={styles.body}>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nam fugit, similique
            velit modi rerum ratione animi quaerat optio dolores ea architecto error aperiam odio
            molestiae ipsa praesentium eum officiis.
          </p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus temporibus quidem impedit
            adipisci ipsa fugiat, alias molestias quasi facere nam non veniam deleniti eligendi
            nihil dolore, rem deserunt placeat culpa?
          </p>
        </div>
        <div className={styles.bnt_col}>
          {token ? (
            ''
          ) : (
            <Link className={styles.btn} to="/signin">
              Войти
            </Link>
          )}
          {/* <Link className={styles.btn} to="/signin">
            Войти
          </Link> */}
        </div>
      </div>
    </>
  );
};
