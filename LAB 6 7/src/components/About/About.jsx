// src/components/About/About.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './About.module.css';

import food1 from '../../assets/images/food1.png';
import food2 from '../../assets/images/food2.png';
import menuImg from '../../assets/images/menu.png';
import interiorImg from '../../assets/images/interior.png';

const About = () => {
  const navigate = useNavigate(); // хук для навігації

  const goToMenu = () => {
    navigate('/menu'); // перенаправлення на сторінку меню
  };

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.title}>ПРО НАС</h2>

        <div className={styles.content}>
          <div className={styles.gallery}>
            <img src={food1} alt="food" />
            <img src={food2} alt="food" />
          </div>

          <div className={styles.text}>
            <p>
              <strong>SPANISH cuisine</strong> — це маленька Іспанія в самому серці України.
              Ми створили місце, де кожна страва розповідає свою історію і дарує справжні
              середземноморські відчуття.
            </p>
            <p>
              Наш ресторан — це не просто про їжу, а про атмосферу. Тут можна відчути тепло
              середземноморських вечорів, насолодитися келихом доброго вина та провести час
              у колі друзів чи близьких.
            </p>
            <p>
              Ми хочемо, щоб кожен гість, переступивши наш поріг, відчув себе так, ніби він
              опинився в одній із затишних таверн Барселони чи Мадрида.
            </p>
          </div>
        </div>

        <div className={styles.cards}>
          {/* Картка з переходом */}
          <div className={styles.card} onClick={goToMenu}>
            <img src={menuImg} alt="menu" />
            <div className={styles.overlay}>НАШЕ МЕНЮ</div>
          </div>

          <div className={styles.card}>
            <img src={interiorImg} alt="interior" />
            <div className={styles.overlay}>ІНТЕР’ЄР ТА ЗАЛИ ДЛЯ КОМПАНІЙ</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
