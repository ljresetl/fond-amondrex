import React from 'react';
import styles from './ValuesSection.module.css';

const ValuesSection: React.FC = () => {
  return (
    <section className={styles.ValuesSection}>
          <div className={styles.container}>
              
              <h2 id="values" className={styles.heading}>Цінності Фонду</h2>
        <img
          src="/values1.png"
          srcSet="/values1.png 1x, /values1@2x.png 2x"
          alt="Військові перед прапором"
          className={styles.photo}
        />

        <p className={styles.text}>
          Місія Фонду «Амондрекс» — підтримувати Збройні Сили України всім необхідним для ефективного виконання їхніх завдань та наближення Перемоги. Ми віримо, що сила України — у єдності, довірі та взаємній підтримці. Саме тому кожен наш проєкт спрямований на зміцнення обороноздатності країни та допомогу тим, хто стоїть на її захисті. Наші цінності — відповідальність, прозорість, довіра, патріотизм і віра у Перемогу. Ми працюємо чесно, відкрито й системно, аби кожна гривня донату перетворювалась на реальну допомогу нашим воїнам.</p>
        <img
          src="/values2.png"
          srcSet="/values2.png 1x, /values2@2x.png 2x"
          alt="Військові та цивільні біля авто"
          className={styles.photo}
        />
      </div>
    </section>
  );
};

export default ValuesSection;
