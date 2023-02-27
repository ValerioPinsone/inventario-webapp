import styles from '@/styles/Home.module.css'
import React , { useState , useEffect } from "react";



const Navbar: React.FC<any> = ({callback}) => {

    /* const handleCallback = () => props(state) */
/*     const [search, setSearch] = useState("");

    const handleChange = (event: any) => {
    // 👇 Get input value from "event"
    setSearch(event.target.value);
    console.log(event.target.value);
    }; */

    
   
    const handleCallback = (p: any) => callback(p);

    const handleChange = (event: any) => {

        handleCallback(event.target.value);
 
    };
    return (
        <>
            <main className={styles.nav}>
                <input type="text" className={styles.searchArea} onChange={handleChange}/>
            </main>
        </>

    )
}

export default Navbar;
