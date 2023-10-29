import React, { useEffect, useState } from 'react';
import styles from '../styles/Skill.module.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import SupbaseClient from './supbase_conn/clientcon';
import mystyles from './styles';
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

  const skillItems = myData.map((skill) => (
    <div key={skill.id} className={styles.bx} style={mystyles.navclr} >
      <img src={skill.Image} alt="" className={styles.im} width="100px" />
      <div className={styles.lang} style={mystyles.dbfontcolor}  >{skill.Name}</div>
      <div className={`${styles.skill} ${getStyleForExperience(skill.Level)}`}  style={mystyles.skilbord} >{skill.Level}</div>
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
    <div className={styles.skbg} id="Skill" style={mystyles.bgclr}>
      <div className={styles.myskil} style={mystyles.textoragcolor} >MY SKILLS PROGRESS SO FAR</div>
      <div className={styles.mysl} style={mystyles.dbfontcolor}>My Skills</div>
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
