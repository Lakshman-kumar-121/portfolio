import styles from '../styles/Menu.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import mystyles from './styles';
import useHover from './btnhover';
import { thememde } from './modecontext';

const Menu = (props) => {
    const a = props.showhide;
    const scrol = props.scrol;

    const mode = thememde();
    const applyStyle = (style, condition) => (condition ? style : null);


    
    return (
        <div className={styles.bg} style={applyStyle(mystyles.bgclr , mode)}   >
            <div className={styles.close}><AiOutlineClose className={styles.icons} onClick={a} style={applyStyle(mystyles.greencolor ,mode)} /></div>
            <div className={`${styles.navs} ${styles.home}`} onClick={()=> scrol('Home')} style={applyStyle(mystyles.textlightoragcolor,mode)} >HOME</div>
            <div className={styles.navs} onClick={()=> scrol('About')} style={applyStyle(mystyles.rgcolor,mode)} >ABOUT</div>
            <div className={styles.navs}  onClick={()=> scrol('Service')} style={applyStyle(mystyles.rgcolor,mode)}>SERVICES</div>
            <div className={styles.navs} onClick={()=> scrol('Skill')} style={applyStyle(mystyles.rgcolor,mode)} >SKILLS</div>
            <div className={styles.navs}onClick={()=> scrol('My work')}  style={applyStyle(mystyles.rgcolor,mode)}>MY WORK</div>
            <div className={styles.navs} onClick={()=> scrol('Contact')} style={applyStyle(mystyles.rgcolor,mode)}>CONTACT</div>
        </div>
    );
}

export default Menu;
