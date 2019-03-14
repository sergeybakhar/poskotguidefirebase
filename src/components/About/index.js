import React from 'react';
import styles from './About.module.scss';

const About = () => (
    <div className={styles.about}>
        <p>
            Главная задача проекта - собрать наиболее полный список интересных, необычных, странных, красивых мест и  достопримечательностей, которые есть на поселке Котовского.
       </p>
        <p>
            В настоящее время данный проект не является коммерческим.
       </p>
    </div>
);

export default About;