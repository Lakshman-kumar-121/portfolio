import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from '../styles/Work.module.css';
import { useEffect, useState } from 'react';
import { BsLaptop } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { createClient } from "@supabase/supabase-js";
import SupbaseClient from "./supbase_conn/clientcon";

import mystyles from './styles';

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

  if (!isClient) {
    return null;
  }

  const skillItems = myData.map((skill) => (
    <div key={skill.id} className={styles.bx} style={mystyles.navclr}>
      <img src="img.png" alt="" className={styles.im} width='100px' />
      <div className={styles.langs} style={mystyles.textlightoragcolor} >{skill.Framework}</div>
      <div className={styles.head} style={mystyles.dbfontcolor} >{skill.Name}</div>
      <div className={styles.dis} style={mystyles.rgcolor} >{skill.Discription}</div>
      <div className={styles.code} ><div style={mystyles.rgcolor}><BsLaptop className={styles.icon}  / > LIVE DEMO</div>
      <div > <AiFillGithub className={styles.icon}/>SOURCE CODE</div></div>
    </div>
  ));

  const renderDotsItem = (isActive, index) => {
    const customDotClass = isActive.isActive ? `${styles.customdot} ${styles.active}` : `${styles.customdot} ${styles.inactive}`;
    return <div key={index} className={customDotClass}></div>;
  };

  return (
    <div className={styles.bgs} id="My work" style={mystyles.bgclr}>
    <div className={styles.myskil} style={mystyles.textoragcolor} >CHECK OUT MY PROJECTS</div>
      <div className={styles.mysl} style={mystyles.dbfontcolor}>My Work</div>
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
