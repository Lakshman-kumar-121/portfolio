import styles from '../styles/Menu.module.css';
import { AiOutlineClose } from 'react-icons/ai';

const Menu = (props) => {
    const a = props.showhide;
    const scrol = props.scrol;
    


    return (
        <div className={styles.bg}>
            <div className={styles.close}><AiOutlineClose className={styles.icons} onClick={a} /></div>
            <div className={`${styles.navs} ${styles.home}`} onClick={()=> scrol('Home')} >HOME</div>
            <div className={styles.navs} onClick={()=> scrol('About')} >ABOUT</div>
            <div className={styles.navs}  onClick={()=> scrol('Service')}>SERVICES</div>
            <div className={styles.navs} onClick={()=> scrol('Skill')} >SKILLS</div>
            <div className={styles.navs}onClick={()=> scrol('My work')} >MY WORK</div>
            <div className={styles.navs} onClick={()=> scrol('Contact')} >CONTACT</div>
        </div>
    );
}

export default Menu;
