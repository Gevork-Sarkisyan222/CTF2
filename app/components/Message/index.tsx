import React from 'react';
import styles from './message.module.scss';

interface props {
  own?: boolean;
}

const Message: React.FC<props> = ({ own }) => {
  return (
    <div className={`${styles.message} ${own && styles.own}`}>
      <p>
        Привет, друг! Мне бы хотелось познакомиться с твоими знакомыми, которые занимаются звуком.
        Мы ищем профессионалов в этой области, и я уверен, что знакомые твои могут нам помочь. Если
        у тебя есть кто-то, кто работает в этой сфере, я бы очень обрадовался, если бы ты
        порекомендовал его или её. Это будет огромной помощью для нас. Спасибо за твоё время и
        поддержку! 2 Также, я бы хотел добавить, что знакомые твои могут быть не только
        профессионалами в области звука, но и людьми, которые знают таких людей. Если у тебя есть
        контакты в этой области, это тоже будет полезно. 2 Я понимаю, что это может быть немного
        неудобно, и я благодарю тебя за твоё время и помощь.
      </p>
      <span>16:50</span>
    </div>
  );
};

export default Message;
