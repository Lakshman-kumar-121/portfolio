import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from '../styles/Work.module.css';
import { useEffect, useState, useContext } from 'react'; // Import useContext
import { BsLaptop } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import SupbaseClient from "./supbase_conn/clientcon";
import mystyles from './styles';
import { thememde } from "./modecontext";

const Mywork = () => {
  const responsive = {
    0: { items: 1 },
    380: { items: 1 },
    512: { items: 1 },
    665: { items: 2 },
    767: { items: 2 },
    870: { items: 2 },
    1050: { items: 3 },
    1265: { items: 3 },
  };

  const [isClient, setIsClient] = useState(false);
  const [myData, setMyData] = useState([]);
  const applyStyle = (style, condition) => (condition ? style : null);


  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await SupbaseClient
        .from("Myprojects")
        .select("*");
      if (error) {
        alert("Error fetching the data");
      } else {
        setMyData(data);
      }
    };

    fetchData();
    setIsClient(true);
  }, []);


  const mode = thememde(); // Get the mode from ThemeContext

  const skillItems = myData.map((skill) => (
    <div key={skill.id} className={styles.bx} style={applyStyle(mystyles.navclr, mode)}>
      <img src="img.png" alt="" className={styles.im} width='100px' />
      <div className={styles.langs} style={applyStyle(mystyles.textlightoragcolor, mode)}>{skill.Framework}</div>
      <div className={styles.head} style={applyStyle(mystyles.dbfontcolor, mode)}>{skill.Name}</div>
      <div className={styles.dis} style={applyStyle(mystyles.rgcolor, mode)}>{skill.Discription}</div>
      <div className={styles.code}>
        <div style={applyStyle(mystyles.rgcolor, mode)}>
          <BsLaptop className={styles.icon} />
          LIVE DEMO
        </div>
        <div style={applyStyle(mystyles.rgcolor, mode)}>
          <AiFillGithub className={styles.icon} />
          SOURCE CODE
        </div>
      </div>
    </div>
  ));

  const renderDotsItem = (isActive, index) => {
    const customDotClass = isActive.isActive
      ? `${styles.customdot} ${styles.active}`
      : `${styles.customdot} ${styles.inactive}`;
    return <div key={index} className={customDotClass}></div>;
  };
  
  if (!isClient) {
    return null;
  }

  return (
    <div className={styles.bgs} id="My work" style={applyStyle(mystyles.bgclr, mode)}>
      <div className={styles.myskil} style={applyStyle(mystyles.textoragcolor, mode)} data-aos-once="true"   data-aos="fade-up" data-aos-duration="500" >CHECK OUT MY PROJECTS</div>
      <div className={styles.mysl} style={applyStyle(mystyles.dbfontcolor, mode)} data-aos-once="true"   data-aos="fade-up" data-aos-duration="500" >My Work</div>
      <AliceCarousel
        infinite
        disableButtonsControls
        mouseTracking
        autoPlayInterval={1000}
        responsive={responsive}
        items={skillItems}
        renderDotsItem={renderDotsItem}
      />
    </div>
  );
}

export default Mywork;
