import styles from '@/styles/Home.module.css'

const Navbar = () => {
    return (
        <>
            <main className={styles.nav}>
                <input type="text" className={styles.searchArea}/>
            </main>
        </>

    )
}

export default Navbar;
