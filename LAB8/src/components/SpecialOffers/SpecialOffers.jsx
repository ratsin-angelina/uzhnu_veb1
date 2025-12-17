import React, { useState } from 'react';
import styles from './SpecialOffers.module.css';
import tapasi from '../../assets/images/tapasi.jpg'; 
import sangria from '../../assets/images/sangria.jpg';
import cusinie from '../../assets/images/cusinie.jpg'; 

const offersData = [
    {
        id: 1,
        title: "Вечір Тапасів",
        description: "Знижка 20% на всі асорті тапасів щосереди після 18:00. Ідеально для великої компанії!",
        image: tapasi 
    },
    {
        id: 2,
        title: "Келих Сангрії у подарунок",
        description: "При замовленні гарячої страви, отримуйте фірмовий келих Сангрії безкоштовно.",
        image: sangria
    },
    {
        id: 3,
        title: "Спеціальна пропозиція від Шефа",
        description: "Щодня нова унікальна страва, створена лише з локальних інгредієнтів. Спитайте свого офіціанта!",
        image: cusinie
    }
];

const SpecialOffers = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => 
            (prevIndex + 1) % offersData.length
        );
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => 
            (prevIndex - 1 + offersData.length) % offersData.length
        );
    };

    const activeOffer = offersData[activeIndex];

    return (
        <section className={styles.offersSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>СПЕЦІАЛЬНІ ПРОПОЗИЦІЇ</h2>
                
                <div className={styles.carousel}>
                    <button className={`${styles.navButton} ${styles.navLeft}`} onClick={prevSlide}>
                        {'<'}
                    </button>

                    <div className={styles.slideWindow}>
                        <div className={styles.slide} key={activeOffer.id}>
                            <div className={styles.offerContent}>
                                <h3 className={styles.offerTitle}>{activeOffer.title}</h3>
                                <p className={styles.offerDescription}>{activeOffer.description}</p>
                                <a href="#details" className={styles.detailsLink}>Детальніше →</a>
                            </div>
                            <div className={styles.offerImageContainer}>
                                <img 
                                    src={activeOffer.image} 
                                    alt={activeOffer.title} 
                                    className={styles.offerImage}
                                />
                            </div>
                        </div>
                    </div>

                    <button className={`${styles.navButton} ${styles.navRight}`} onClick={nextSlide}>
                        {'>'}
                    </button>
                </div>

                <div className={styles.dots}>
                    {offersData.map((_, index) => (
                        <span
                            key={index}
                            className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;