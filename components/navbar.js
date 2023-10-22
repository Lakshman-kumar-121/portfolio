import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { AiFillGithub } from 'react-icons/ai';
const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.heading}><span className={styles.prodev}> Pro.dev</span></div>
            <div className={styles.navs}>
                <Link href='/'   className={styles.navicon} >HOME</Link>
                <Link href='/about' className={styles.navicon}>ABOUT</Link>
                <Link href='/' className={styles.navicon}>SERVICES </Link>
                <Link href='/skills'   className={styles.navicon}>SKILLS </Link>
                <Link href='/mywork'  className={styles.navicon}>MY WORK </Link>
                <Link href='/contact'   className={styles.navicon}>CONTACT </Link>
                <AiFillGithub color='white'> </AiFillGithub>
                <button className={styles.ctnbtn}>Contact Me</button>
            </div>
        </div>
    );
}

export default NavBar;