    import Link from 'next/link';
    import styles from '../styles/Navbar.module.css';
    import { AiFillGithub ,AiOutlineMenu } from 'react-icons/ai';
    import { useState } from 'react';
    import Menu from './sidemenu';
    import mystles from './styles';
import useHover from './btnhover';
    const NavBar = () => {
        const {hover , onhovertrue , onhoverfalse} = useHover();


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
        }
        
        return (
            <div className={styles.navbar} style={mystles.navclr}>
                 
                <div className={styles.heading}><img src="developers.png" alt="" className={styles.imglog} /> <span className={styles.prodev} style={mystles. textoragcolor}> Pro.dev</span> </div>

                <div className={showside ? styles.shme : styles.hdme} >  <Menu showhide={setside} scrol={scrollToTop} /></div>
                <div className={styles.navs}>
                    <ul onClick={()=> scrollToTop('Home')}  style={mystles.textoragcolor}  className={styles.navicon} >HOME</ul>
                    <ul onClick={()=> scrollToTop('About')} style={mystles.rgcolor} className={styles.navicon}>ABOUT</ul>
                    <ul onClick={()=> scrollToTop('Service')} style={mystles.rgcolor}  className={styles.navicon}>SERVICES </ul>
                    <ul onClick={()=> scrollToTop('Skill')} style={mystles.rgcolor} className={styles.navicon}>SKILLS </ul>
                    <ul onClick={()=> scrollToTop('My work')}  style={mystles.rgcolor}className={styles.navicon}>MY WORK </ul>
                    <ul  onClick={()=> scrollToTop('Contact')}style={mystles.rgcolor} className={styles.navicon}>CONTACT </ul>
                    
                    <button   className={styles.ctnbtn} onMouseEnter={onhovertrue} onMouseLeave={onhoverfalse} style={hover? mystles.btnhover:   mystles.navbtn}>Contact Me</button>
                </div>
                
                <AiOutlineMenu onClick={setside} className={styles.menu}/>
            </div>
        );
    }

    export default NavBar;