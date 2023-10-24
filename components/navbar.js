import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { AiFillGithub ,AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
const NavBar = () => {

    const scrollToTop = (e) => {
        const sd = document.getElementById(e);
        if (sd){
            window.scrollTo({
                top: sd.offsetTop - 50,
                behavior: 'smooth',
              });
        }

      };

    const [showside , setshowside] = useState(false);
    const setside = ()=>{
        setshowside(!showside);
        alert(showside);
    }
    
    return (
        <div className={styles.navbar}>
            <div className={styles.heading}><span className={styles.prodev}> Pro.dev</span></div>
            <div className={styles.navs}>
                <ul onClick={()=> scrollToTop('Home')}   className={styles.navicon} >HOME</ul>
                <ul onClick={()=> scrollToTop('About')} className={styles.navicon}>ABOUT</ul>
                <ul onClick={()=> scrollToTop('Service')}  className={styles.navicon}>SERVICES </ul>
                <ul onClick={()=> scrollToTop('Skill')} className={styles.navicon}>SKILLS </ul>
                <ul onClick={()=> scrollToTop('My work')} className={styles.navicon}>MY WORK </ul>
                <ul  onClick={()=> scrollToTop('Contact')} className={styles.navicon}>CONTACT </ul>
                <AiFillGithub color='white'> </AiFillGithub>
                <button className={styles.ctnbtn}>Contact Me</button>
            </div>
            <AiOutlineMenu onClick={setside} className={styles.menu}/>
        </div>
    );
}

export default NavBar;