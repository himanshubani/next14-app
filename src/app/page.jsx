import Image from 'next/image';
import styles from './home.module.css';

const Home = () => {
  return (
  <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Welcome to the home page</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nesciunt aliquam a dolor sapiente omnis recusandae totam soluta nemo est vitae saepe! Sed inventore, impedit praesentium fugiat adipisci id optio.</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn more</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image className={styles.brandImg} src="/brands.png" alt="brands" fill />
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image className={styles.heroImg} src="/hero.gif" alt="home" fill />
    </div>
  </div>
  )
};

export default Home; 