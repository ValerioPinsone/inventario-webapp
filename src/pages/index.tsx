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
    name: "Product 1",
    quantity: 10,
  },
  {
    id: 2,
    name: "Product 2",
    quantity: 20,
  },
  {
    id: 3,
    name: "Product 3",
    quantity: 30,
  },
  {
    id: 4,
    name: "Product 4",
    quantity: 40,
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
          <Card product={products}/>
        ))}
      </div>
    
    </>
  )
}
