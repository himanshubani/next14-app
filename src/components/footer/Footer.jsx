import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Bani</div>
      <div className={styles.text}>
        Bani DEV &copy; all rights reserved 2024
      </div>
    </div>
  )
};
export default Footer;
