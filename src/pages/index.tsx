import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

let products = [
  {
    id: 1,
    name: "Tubo Plastica",
    quantity: 58,
  },
  {
    id: 2,
    name: "Bullone 30mm",
    quantity: 456,
  },
  {
    id: 3,
    name: "Guaina Doppio Strato",
    quantity: 356,
  },
  {
    id: 4,
    name: "Centralina 12V per cancelli",
    quantity: 12,
  },
  {
    id: 5,
    name: "Cavo 2x1.5mm",
    quantity: 78,
  },
  {
    id: 6,
    name: "Cavo 2x2.5mm",
    quantity: 45,
  },
  {
    id: 7,
    name: "Cavo 2x4mm",
    quantity: 23,
  }
];
export default function Home() {
  return (
    <>
    
      <Head>
        <title>Inventario WebApp</title>
        <meta name="description" content="App Inventario" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Navbar/>
      <div className={styles.cardContainer}>

       {products.map((products) => (
          <Card key={products.id} product={products}/>
        ))}
      </div>
    
    </>
  )
}
