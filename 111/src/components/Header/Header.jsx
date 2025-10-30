import React from 'react';
import styles from './Header.module.css';

import Group2 from '../../assets/images/Group 2.png';
import Group5 from '../../assets/images/Group 5.png';
import bg from '../../assets/images/bg.png';

const Header = () => {
  return (
    <header className={styles.header} style={{ backgroundImage: `url(${bg})` }}>
      <div className={styles.overlay}>
        
        {/* === ФІКСОВАНА ВЕРХНЯ НАВІГАЦІЯ === */}
        <nav className={styles.fixedNavbar}>
          <div className={styles.logoBlock}>
            <img src={Group2} alt="Логотип" className={styles.logoImage} />
            <span className={styles.brand}>SPANISH cuisine</span>
          </div>

          <ul className={styles.navList}>
            <li><a href="/">Головна</a></li>
            <li><a href="/menu">Меню</a></li>
            <li><a href="#about">Про нас</a></li>
            <li><a href="#contact">Контакти</a></li>
            <li><a href="#reservation">Бронювання</a></li>
          </ul>
        </nav>

        <div className={styles.headerContent}>
          <img
            src={Group5}
            alt="Декоративний елемент"
            className={styles.group5Image}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
