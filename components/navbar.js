import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { AiFillGithub, AiOutlineMenu } from 'react-icons/ai';
import { useState, useContext } from 'react';
import Menu from './sidemenu';
import mystles from './styles';
import useHover from './btnhover';
import { ThemeContext } from '@/pages';
import { thememde } from './modecontext';

const NavBar = () => {
  const { hover, onhovertrue, onhoverfalse } = useHover();
  const { hover: nav1, onhovertrue: navhover1, onhoverfalse: navhoverfalse1 } = useHover();
  const { hover: nav2, onhovertrue: navhover2, onhoverfalse: navhoverfalse2 } = useHover();
  const { hover: nav3, onhovertrue: navhover3, onhoverfalse: navhoverfalse3 } = useHover();
  const { hover: nav4, onhovertrue: navhover4, onhoverfalse: navhoverfalse4 } = useHover();
  const { hover: nav5, onhovertrue: navhover5, onhoverfalse: navhoverfalse5 } = useHover();

const mode = thememde();

  const scrollToTop = (e) => {
    const sd = document.getElementById(e);

    if (sd) {
      window.scrollTo({
        top: sd.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  };

  const [showside, setshowside] = useState(false);
  const setside = () => {
    setshowside(!showside);
  };

  
  const applyStyle = (style, condition) => (condition ? style : null);

  return (
    <div className={styles.navbar} style={applyStyle(mystles.navclr, mode)}>
      <div className={styles.heading}>
        <img src="developers.png" alt="" className={styles.imglog} />
        <span         data-aos="fade-down" data-aos-duration="800" 
 className={styles.prodev} style={applyStyle(mystles.textoragcolor, mode)}>
          Pro.dev
        </span>
      </div>
      <div className={showside ? styles.shme : styles.hdme}  >
        <Menu showhide={setside} scrol={scrollToTop} />
      </div>
      <div className={styles.navs}>
        <ul data-aos="fade-down" data-aos-duration="800" onClick={() => scrollToTop('Home')} style={applyStyle(mystles.textoragcolor, mode)} className={styles.naviconhd}>
          HOME
        </ul>
        <ul
        data-aos="fade-down" data-aos-duration="1000"
        data-aos-delay="100"
          onClick={() => scrollToTop('About')}
          style={nav1 ? applyStyle(mystles.navhover, mode)  : mode? mystles.black :  mystles.whitecolor}
          onMouseEnter={navhover1}
          onMouseLeave={navhoverfalse1}
          className={styles.navicon}
        >
          ABOUT
        </ul>
        <ul
        data-aos="fade-down" data-aos-duration="1200"
        data-aos-delay="150"
          onClick={() => scrollToTop('Service')}
          style={nav2 ? applyStyle(mystles.navhover, mode)  : mode? mystles.black :  mystles.whitecolor}
          onMouseEnter={navhover2}
          onMouseLeave={navhoverfalse2}
          className={styles.navicon}
        >
          SERVICES
        </ul>
        <ul
        data-aos="fade-down" data-aos-duration="1300"
        data-aos-delay="200"
          onClick={() => scrollToTop('Skill')}
          style={nav3 ? applyStyle(mystles.navhover, mode)  : mode? mystles.black :  mystles.whitecolor}
          onMouseEnter={navhover3}
          onMouseLeave={navhoverfalse3}
          className={styles.navicon}
        >
          SKILLS
        </ul>
        <ul
        data-aos="fade-down" data-aos-duration="1400"
        data-aos-delay="250"
          onClick={() => scrollToTop('My work')}
          style={nav4 ? applyStyle(mystles.navhover, mode) : mode? mystles.black :  mystles.whitecolor}
          onMouseEnter={navhover4}
          onMouseLeave={navhoverfalse4}
          className={   styles.navicon  }
        >
          MY WORK
        </ul>
        <ul
        data-aos="fade-down" data-aos-duration="1500"
        data-aos-delay="300"
          onClick={() => scrollToTop('Contact')}
          style={nav5 ? applyStyle(mystles.navhover, mode) : mode? mystles.black :  mystles.whitecolor}
          onMouseEnter={navhover5}
          onMouseLeave={navhoverfalse5}
          className={styles.navicon}
        >
          CONTACT
        </ul>
        <button
          className={styles.ctnbtn}
          onMouseEnter={onhovertrue}
          onMouseLeave={onhoverfalse}
          style={hover ? applyStyle(mystles.btnhover, mode) : mystles.navbtn}
        >
          Contact Me
        </button>
      </div>
      <AiOutlineMenu onClick={setside} className={styles.menu} style={applyStyle( mystles.black ,mode )} />
    </div>
  );
};

export default NavBar;
