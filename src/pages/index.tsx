import Head from 'next/head'
import Image from 'next/image'
import React , { useState , useEffect} from "react";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import AddNewModal from '@/components/AddNewModal'

const inter = Inter({ subsets: ['latin'] })

let filtro = "prova";
/* let addNewModal = false; */
export default function Home() {
  

  const [addNewModal, setAddNewModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const callback = (payload: any) => {
    setSearch(payload)
  }

  const callBackSetAddNewModal = (payload: any) => {
    setAddNewModal(payload)
  }


  useEffect(() => {
    filtro = search; //filtro tornato dalla searchbar (da usare in nella chiamata be)
   /*  console.log(filtro); */
    //filter the products
/*     productsFiltered = products.filter((product) => {
      return product.name.toLowerCase().includes(filtro.toLowerCase());
    });
 */

    
    fetch('http://localhost:3001/products/' + filtro)
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setProducts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
  }
  , [search]);


  return (
    <>
    
      <Head>
        <title>Inventario WebApp</title>
        <meta name="description" content="App Inventario" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
      </Head>
     <Navbar callback={callback}/>
      {/* {addNewModal && <AddNewModal/>} */}
      {addNewModal ? <AddNewModal callback={callBackSetAddNewModal}/> : null}

 {/* <AddNewModal/> */}
      <div className={styles.buttonContainer}>
        <button className={styles.buttonAddNew} onClick={function(){ 
          setAddNewModal(!addNewModal);
          
          console.log(addNewModal);
          }}><span className={["material-icons", styles.addicon].join(' ')}>add_circle</span>Aggiungi Nuovo</button>
      </div>
     
      <div className={styles.cardContainer}>

      
       {products.map((products:any) => (
         
          <Card key={products.product_id} product={products}/>
        ))}
      </div>
    
    </>
  )
}
