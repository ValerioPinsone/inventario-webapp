import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

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
        <Card/>
        <Card/>
        <Card/>
      </div>
    
    </>
  )
}
