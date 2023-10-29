import React, { useEffect, useState, useContext } from 'react'; // Import useContext
import styles from '../styles/Skill.module.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import SupbaseClient from './supbase_conn/clientcon';
import mystyles from './styles';
import { ThemeContext } from '@/pages'; // Import ThemeContext
import { thememde } from './modecontext';

const Skill = () => {
  const [isClient, setIsClient] = useState(false);
  const [myData, setData] = useState([]);

  async function fetchData() {
    const { data, error } = await SupbaseClient.from('Myframework').select('*');
    if (error) {
      alert('Error in fetching the data');
    } else {
      setData(data);
    }
  }

  useEffect(() => {
    fetchData();
    setIsClient(true);
  }, []);

  function getStyleForExperience(experience) {
    switch (experience) {
      case 'Junior':
        return styles.lvl;
      case 'Intermediate':
        return styles.int;
      case 'Advanced':
        return styles.beg;
      default:
        return '';
    }
  }

  const mode = thememde();// Get the mode from ThemeContext
  const applyStyle = (style, condition) => (condition ? style : null);
  const skillItems = myData.map((skill) => (
    <div key={skill.id} className={styles.bx} style={applyStyle(mystyles.navclr, mode)}>
      <img src={skill.Image} alt="" className={styles.im} width="100px" />
      <div className={styles.lang} style={applyStyle(mystyles.dbfontcolor, mode)}>{skill.Name}</div>
      <div className={`${styles.skill} ${getStyleForExperience(skill.Level)}`} style={applyStyle(mystyles.skilbord, mode)}>
        {skill.Level}
      </div>
    </div>
  ));

  if (!isClient) {
    return null;
  }

  const responsive = {
    0: { items: 1 },
    380: { items: 1 },
    512: { items: 1 },
    665: { items: 2 },
    767: { items: 3 },
    870: { items: 4 },
    1050: { items: 5 },
    1265: { items: 6 },
  };
  

  return (
    <div className={styles.skbg} id="Skill" style={applyStyle(mystyles.bgclr, mode)}>
      <div className={styles.myskil} style={applyStyle(mystyles.textoragcolor, mode)}>MY SKILLS PROGRESS SO FAR</div>
      <div className={styles.mysl} style={applyStyle(mystyles.dbfontcolor, mode)}>My Skills</div>
      <div className={styles.bxshow}>
        <AliceCarousel
          infinite
          disableButtonsControls
          autoPlay
          className={styles.asl}
          mouseTracking
          disableDotsControls
          autoPlayInterval={1000}
          responsive={responsive}
          items={skillItems}
        />
      </div>
    </div>
  );
};

export default Skill;
