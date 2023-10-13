import styles from '../styles/Navbar.module.css';
import { AiFillGithub } from 'react-icons/ai';
const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.heading}><span className={styles.prodev}> Pro.dev</span></div>
            <div className={styles.navs}>
                <a href="" className={styles.navicon} >HOME</a>
                <a href="" className={styles.navicon}>ABOUT</a>
                <a href="" className={styles.navicon}>SERVICES</a>
                <a href="" className={styles.navicon}>SKILLS</a>
                <a href="" className={styles.navicon}>MY WORK</a>
                <a href="" className={styles.navicon}>CONTACT</a>
               <AiFillGithub color='white' ></AiFillGithub>
                <button className={styles.ctnbtn}>Contact Me</button>
            </div>
        </div>
    );
}

export default NavBar;