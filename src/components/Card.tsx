import React , { useState } from "react";
import styles from '@/styles/Home.module.css'

//function to post increment to backend
const postQuantity = (id: number, q: number) => {
    fetch('http://localhost:3001/products/setquantity/' + id+ '/' + q)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err.message);
    });
}

const Card: React.FC<any> = ({product}) => {
    const [quantity, setQuantity] = useState(product.product_quantity);
    return (
        <>
        <div className={styles.card}>
        <div className={(quantity >3 ? styles.quantityBarBlue : styles.quantityBarRed)}></div>
        <div className={styles.quantity}>{quantity}</div>
        <div className={styles.center}>
            <h3>{product.product_name}</h3>
            </div>
            <hr className={styles.hr}></hr>
            <div className={styles.center}>
            <textarea className={styles.textarea} defaultValue={product.product_desc} readOnly></textarea>
            <button className={styles.cardButtonRed}  onClick={function(){
                if(quantity > 0){
                    setQuantity(quantity - 1);
                    postQuantity(product.product_id, quantity -1);
                }
            }} >-</button>
            <button className={styles.cardButtonGreen} onClick={function() {
                setQuantity(quantity + 1);
                postQuantity(product.product_id, quantity +1);
                }}>+</button>
        </div>
        </div>
        </>
    )
}

export default Card;