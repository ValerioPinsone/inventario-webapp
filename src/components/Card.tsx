import React , { useState } from "react";
import styles from '@/styles/Home.module.css'

const Card: React.FC<any> = ({product}) => {
    const [quantity, setQuantity] = useState(product.quantity);
    return (
        <>
        <div className={styles.card}>
        <div className={(quantity >3 ? styles.quantityBarBlue : styles.quantityBarRed)}></div>
        <div className={styles.quantity}>{quantity}</div>
        <div className={styles.center}>
            <h3>{product.name}</h3>
            </div>
            <hr className={styles.hr}></hr>
            <div className={styles.center}>
            <textarea className={styles.textarea} defaultValue={product.desc} readOnly></textarea>
            <button className={styles.cardButtonRed}  onClick={function(){
                if(quantity > 0){
                    setQuantity(quantity - 1);
                }
            }} >-</button>
            <button className={styles.cardButtonGreen} onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        </div>
        </>
    )
}

export default Card;