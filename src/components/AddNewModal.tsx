import React , { useState } from "react";
import styles from '@/styles/Home.module.css'

const AddNewModal: React.FC<any> = ({callback}) => {
    const handleCallback = () => callback(false);
    return (
        <>
        <div className={styles.addNewModal}>
            <div className={styles.addNewModalContent}>
            <h1 className={styles.addNewModalTitle}>Aggiungi Nuovo Prodotto</h1>
            
            <hr className={styles.addNewModalHr}></hr>
            <div className={styles.addNewModalForm}>
                
                <label className={styles.addNewModalLabel}>Nome</label>
                <input type="text" name="name" placeholder="Nome Prodotto" className={styles.addNewModalInputText}></input>
                <br></br>
                <label>Quantità</label>
                <input type="number" name="quantity" placeholder="Quantità Prodotto" className={styles.addNewModalInputNumber}></input>
                <br></br>
                <label>Descrizione</label>
                <input type="text" name="description" placeholder="Descrizione Prodotto" className={styles.addNewModalInputTextArea}></input>


                <div className={styles.addNewModalButtonsContainer}>
                    <button className={styles.addNewModalButtonUndo} onClick={function(){
                        handleCallback();
                    }}>Annulla</button>

                    <button className={styles.addNewModalButtonAdd}onClick={function(){
                        handleCallback();
                    }}>Aggiungi</button>
                </div>
                
            </div>
            </div>
        </div>
        
        </>
    )
}

export default AddNewModal;
