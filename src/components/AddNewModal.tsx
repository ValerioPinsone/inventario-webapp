import React , { useState } from "react";
import styles from '@/styles/Home.module.css'

/*post http call*/
const postProduct = (product: any) => {
    fetch('http://localhost:3001/products/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err.message);
    });
}


const AddNewModal: React.FC<any> = ({callback}) => {
    const handleCallback = () => callback(false);

    const handleNameChange = (event:any) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event:any) => {
        let quantity = event.target.value;
        if(quantity < 0) quantity = 0;
        setQuantity(quantity);
    };

    const handleDescriptionChange = (event:any) => {
        setDescription(event.target.value);
    };
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [description, setDescription] = useState("");

    return (
        <>
        <div className={styles.addNewModal}>
            <div className={styles.addNewModalContent}>
            <h1 className={styles.addNewModalTitle}>Aggiungi Nuovo Prodotto</h1>
            
            <hr className={styles.addNewModalHr}></hr>
            <div className={styles.addNewModalForm}>
                
                <label className={styles.addNewModalLabel}>Nome</label>
                <input onChange={handleNameChange} value={name} type="text" name="name" placeholder="Nome Prodotto" className={styles.addNewModalInputText}></input>
                <br></br>
                <label>Quantità</label>
                <input onChange={handleQuantityChange} value={quantity} type="number" name="quantity" placeholder="Quantità Prodotto" className={styles.addNewModalInputNumber}></input>
                <br></br>
                <label>Descrizione</label>
                <textarea onChange={handleDescriptionChange} value={description} name="description" placeholder="Descrizione Prodotto" className={styles.addNewModalInputTextArea}></textarea>


                <div className={styles.addNewModalButtonsContainer}>
                    <button className={styles.addNewModalButtonUndo} onClick={function(){
                        console.log("Annulla");
                        handleCallback();
                    }}>Annulla</button>

                    <button className={styles.addNewModalButtonAdd}onClick={function(){
                        console.log("Aggiungi ", name, quantity, description);
                        postProduct({name: name, quantity: quantity, description: description});
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
