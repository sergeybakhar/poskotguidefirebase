import React from 'react';
import styles from './Contact.module.scss';
import { FacebookProvider, Comments } from 'react-facebook';

const Contact = () => (
    <div className={styles.contact}>
        <p className={styles.contact__description}>Любые отзывы, пожелания и рекомендации только приветствуются!</p>
        <div className={styles['contact__fb-comments']}>
            <FacebookProvider appId="1045257252264946" language='ru_RU'  >
                <Comments href="http://localhost:3000/" width='50%' numPosts='3' orderBy='reverse_time' />
            </FacebookProvider>
        </div>
    </div>
);

export default Contact;