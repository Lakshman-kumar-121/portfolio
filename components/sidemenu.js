import styles from '../styles/Menu.module.css';
import { AiOutlineClose } from 'react-icons/ai';

const Menu = (props) => {
    const a = props.showhide;
    const scrol = props.scrol;
    const scrollToTop = (e) => {
        const sd = document.getElementById(e);
        window.scrollTo({
            top: 200,
            behavior: 'smooth',
        });
        if (true){
            
        }

    };


    return (
        <div className={styles.bg}>
            <div className={styles.close}><AiOutlineClose className={styles.icons} onClick={a} /></div>
            <div className={`${styles.navs} ${styles.home}`} onClick={() => { scrollToTop('Skill') }}>HOME</div>
            <div className={styles.navs}>ABOUT</div>
            <div className={styles.navs}>SERVICES</div>
            <div className={styles.navs}>SKILLS</div>
            <div className={styles.navs}>MY WORK</div>
            <div className={styles.navs}>CONTACT</div>
        </div>
    );
}

export default Menu;
