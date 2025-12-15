import React from 'react';
import styles from './Footer.module.css';
import Group2 from '../../assets/images/Group 2.png'; 

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                
                <div className={styles.col}>
                    <img 
                        src={Group2} 
                        alt="Spanish Cuisine Logo" 
                        className={styles.footerLogo} 
                    />
                    <p className={styles.copy}>
                        &copy; {currentYear} Spanish Cuisine. <br/> Всі права захищені.
                    </p>
                </div>

                <div className={styles.col}>
                    <h4 className={styles.colTitle}>Навігація</h4>
                    <ul className={styles.navList}>
                        <li><a href="#menu" className={styles.navLink}>Меню</a></li>
                        <li><a href="#about" className={styles.navLink}>Про нас</a></li>
                        <li><a href="#delivery" className={styles.navLink}>Доставка</a></li>
                        <li><a href="#offers" className={styles.navLink}>Пропозиції</a></li>
                    </ul>
                </div>

                <div className={styles.col}>
                    <h4 className={styles.colTitle}>Контакти</h4>
                    <p>
                        <a href="tel:+380441234567" className={styles.contactLink}>+38 (044) 123 45 67</a>
                    </p>
                    <p>
                        <a href="mailto:info@spanishcuisine.ua" className={styles.contactLink}>info@spanishcuisine.ua</a>
                    </p>
                    
                    <h4 className={styles.colTitle} style={{marginTop: '20px'}}>
                        Бронювання
                    </h4>
                    <p>
                        <a href="#reservation" className={styles.reservationLink}>Забронювати столик →</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;