import React from "react";
import styles from '@/styles/Home.module.css'

interface Prodotto {
    id: number;
    name: string;
    quantity: number;
}

interface ParentCompProps {
    childComp?: React.ReactNode;
  }

const Card: React.FC<any> = ({product}) => {
    return (
        <>
        <div className={styles.card}>
        <div className={styles.center}>
            <h3>{product.name}</h3>
            </div>
            <hr className={styles.hr}></hr>
           
            <h5 className={styles.quantity}>QTY: {product.quantity}</h5>
            <div className={styles.center}>
            <button className={styles.cardButtonRed}>-</button>
            <button className={styles.cardButtonGreen}>+</button>
        </div>
        </div>
        </>
    )
}

export default Card;