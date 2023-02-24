import React from "react";
import styles from '@/styles/Home.module.css'

const Card = () => {
    return (
        <div className={styles.card}>
            <h3>Card title</h3>
            <hr className={styles.hr}></hr>
            <button className={styles.cardButtonRed}>-</button>
            <button className={styles.cardButtonGreen}>+</button>
        </div>
    )
}

export default Card;