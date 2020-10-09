import styles from '../../styles/Header.module.sass'

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.bell} src='/img/Bell.svg' alt='Колокольчик'/>
      <div className={styles.user__wrapper}>
        <img className={styles.user__icon} src='/img/user_icon.png'/>
        <div>Иванова А.</div>
      </div>
    </div>
  );
};

export default Header;
