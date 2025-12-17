import React from "react";
import styles from "./Delivery.module.css";
import deliveryBg from '../../assets/images/bg.png'; 
const Delivery = () => {
  return (
    <section
      className={styles.delivery}
      style={{ backgroundImage: `url(${deliveryBg})` }}
      id="delivery"
    >
      <div className={styles.container}>
        <h2 className={styles.title}>ДОСТАВКА ДОДОМУ</h2>
        <p className={styles.subtitle}>
          Ми приймаємо замовлення на доставку та самовивіз
        </p>

        <div className={styles.infoBox}>
          <p>
            <strong>Працюємо:</strong> <br />
            Пн–Пт 11:00–21:00 <br />
            Сб–Нд 11:00–19:00
          </p>

          <p>
            <strong>Замовлення оформляється за номером:</strong> <br />
            +38 (XXX) XXX-XX-XX
          </p>

          <p>
            <strong>Номер для бронювання столів:</strong> <br />
            +38 (XXX) XXX-XX-XX
          </p>

          <a href="#payment-methods" className={styles.orderLink}>
            Замовити онлайн
          </a>

          <p>
            <strong>Вартість:</strong> <br />
            Доставка — 120 грн.{" "}
            <span className={styles.highlight}>Безкоштовно</span> від 500 грн у
            межах міста.
          </p>

          <p>
            <strong>Час доставки:</strong> <br />
            Протягом однієї години.
          </p>

          <p>
            <strong>Оплата:</strong> <br />
            Кур'єру після отримання замовлення.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
