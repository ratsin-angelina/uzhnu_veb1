import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Menu.module.css";

import { useAuth } from "../hooks/useAuth";

import logo from "../assets/images/logo.png";
import bgImage from "../assets/images/restaurant.jpg";
import tapas from "../assets/images/tapas.jpg";
import paella from "../assets/images/paella.jpg";
import jamon from "../assets/images/jamon.jpg";
import desserts from "../assets/images/desserts.jpg";
import wine from "../assets/images/wine.jpg";

const Menu = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLoginRedirect = () => navigate("/login");
  const handleLogout = async () => {
    await logout();
  };

  return (
    <div
      className={styles.menuPage}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoBlock}>
            <img src={logo} alt="Spanish cuisine" className={styles.logo} />
            <span className={styles.brand}>SPANISH cuisine</span>
          </div>

          <nav className={styles.nav}>
            <a href="/">Головна</a>
            <a href="/menu" className={styles.active}>Меню</a>
            <a href="/review">Відгуки</a>
          </nav>

          <div className={styles.loginArea}>
            {user ? (
              <>
                <span>¡Hola, {user.email}!</span>
                <button onClick={handleLogout}>Вийти</button>
              </>
            ) : (
              <button onClick={handleLoginRedirect}>
                Залишити відгук
              </button>
            )}
          </div>
        </div>
      </header>

      <div className={styles.overlay}>
        <main className={styles.menuContainer}>
          <p className={styles.subtitle}>
            Справжній смак Іспанії — від хрустких тапас до ароматної паельї.
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <img src={tapas} alt="Tapas" />
              <div className={styles.cardBody}>
                <h3>Tapas (Закуски)</h3>
                <p>Крокети, Пататас Бравас, Оливки з анчоусами</p>
                <button>Додати</button>
              </div>
            </div>

            <div className={styles.card}>
              <img src={paella} alt="Paella" />
              <div className={styles.cardBody}>
                <h3>Paella (Паелья)</h3>
                <p>Паелья з морепродуктами, куркою або овочами</p>
                <button>Додати</button>
              </div>
            </div>

            <div className={styles.card}>
              <img src={jamon} alt="Jamón" />
              <div className={styles.cardBody}>
                <h3>Jamón & Carne</h3>
                <p>Іберійський хамон, стейк, курка в соусі Mojo</p>
                <button>Додати</button>
              </div>
            </div>

            <div className={styles.card}>
              <img src={desserts} alt="Postres" />
              <div className={styles.cardBody}>
                <h3>Postres (Десерти)</h3>
                <p>Чуррос, Тарта де Сантяго, Крем Каталана</p>
                <button>Додати</button>
              </div>
            </div>

            <div className={styles.card}>
              <img src={wine} alt="Vino" />
              <div className={styles.cardBody}>
                <h3>Vinos (Вина)</h3>
                <p>Rioja, Cava, Sangria — справжній дух Іспанії</p>
                <button>Додати</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Menu;
