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
        {/* <h5 className={styles.quantity}>QTY: {product.quantity}</h5> */}
        
        <div className={styles.card}>
        <div className={styles.quantityBarRed}></div>
        <div className={styles.quantity}>{product.quantity}</div>
        <div className={styles.center}>
            <h3>{product.name}</h3>
            </div>
            <hr className={styles.hr}></hr>
           
            

            
            <div className={styles.center}>
            <textarea className={styles.textarea} defaultValue={product.desc} readOnly></textarea>
            <button className={styles.cardButtonRed}>-</button>
            <button className={styles.cardButtonGreen}>+</button>
        </div>
        </div>
        </>
    )
}

export default Card;