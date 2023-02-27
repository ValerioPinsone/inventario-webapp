import Head from 'next/head'
import Image from 'next/image'
import React , { useState , useEffect} from "react";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

let products = [
  {
    id: 1,
    name: "Tubo Plastica",
    desc: "Tubo di plastica da 1.5m",
    quantity: 58,
  },
  {
    id: 2,
    name: "Bullone 30mm",
    desc: "Bullone da 30mm",
    quantity: 2,
  },
  {
    id: 3,
    name: "Guaina Doppio Strato",
    desc: "Guaina doppio strato da 1.5m",
    quantity: 3,
  },
  {
    id: 4,
    name: "Centralina 12V per cancelli",
    desc: "Centralina 12V per cancelli",
    quantity: 12,
  },
  {
    id: 5,
    name: "Cavo 2x1.5mm",
    desc: "Cavo 2x1.5mm",
    quantity: 78,
  },
  {
    id: 6,
    name: "Cavo 2x2.5mm",
    desc: "Cavo 2x2.5mm",
    quantity: 45,
  },
  {
    id: 7,
    name: "Cavo 2x4mm",
    desc: "Cavo 2x4mm",
    quantity: 1,
  },
  {
    id: 8,
    name: "Piattina 1x1",
    desc: "Piattina 1x1",
    quantity: 56,
  },
  {
    id: 9,
    name: "Piattina 1x2",
    desc: "Piattina 1x2",
    quantity: 34,
  },
  {
    id: 10,
    name: "Set Chiavi",
    desc: "Set Chiavi",
    quantity: 2,
  },
  {
    id: 11,
    name: "Cavo 2x6mm",
    desc: "Cavo 2x6mm",
    quantity: 12,
  },
  {
    id: 12,
    name: "Tubo PVC 50mm",
    desc: "Tubo PVC 50mm",
    quantity: 12,
  },
  {
    id: 13,
    name: "Tubo PVC 75mm",
    desc: "Tubo PVC 75mm",
    quantity: 0,
  },
  {
    id: 14,
    name: "Tubo PVC 100mm",
    desc: "Tubo PVC 100mm",
    quantity: 12,
  },
  {
    id: 15,
    name: "Plexiglass 1.5m",
    desc: "Plexiglass 1.5m",
    quantity: 12,
  },
  {
    id: 16,
    name: "Plexiglass 2m",
    desc: "Plexiglass 2m",
    quantity: 12,
  }
];

let productsFiltered = products;
let filtro = "prova";
export default function Home() {


  const [search, setSearch] = useState("");
  const callback = (payload: any) => {
    setSearch(payload)
  }

  useEffect(() => {
    filtro = search;
   /*  console.log(filtro); */
    //filter the products
/*     productsFiltered = products.filter((product) => {
      return product.name.toLowerCase().includes(filtro.toLowerCase());
    }); */
  }
  , [search]);


  return (
    <>
    
      <Head>
        <title>Inventario WebApp</title>
        <meta name="description" content="App Inventario" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Navbar callback={callback}/>
      <div className={styles.cardContainer}>

   
      
      
       {productsFiltered.map((products, filtro) => (
        
          <Card key={products.id} product={products}/>
        ))}
      </div>
    
    </>
  )
}
