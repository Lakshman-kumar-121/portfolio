import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from '../styles/Work.module.css';
import { useEffect, useState } from 'react';
import { BsLaptop } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { createClient } from "@supabase/supabase-js";
import SupbaseClient from "./supbase_conn/clientcon";

const Mywork = () => {
  const responsive = {
    0: { items: 1 },
    380: { items: 1 },
    512: { items: 2 },
    665: { items: 3 },
    767: { items: 3 },
    870: { items: 4 },
    1024: { items: 6 },
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
    <div key={skill.id} className={styles.bx}>
      <img src="img.png" alt="" className={styles.im} width='100px' />
      <div className={styles.langs}>{skill.Framework}</div>
      <div className={styles.head}>{skill.Name}</div>
      <div className={styles.dis}>{skill.Discription}</div>
      <div className={styles.code}><div><BsLaptop className={styles.icon}/> LIVE DEMO</div>
      <div> <AiFillGithub className={styles.icon}/>SOURCE CODE</div></div>
    </div>
  ));

  const renderDotsItem = (isActive, index) => {
    const customDotClass = isActive.isActive ? `${styles.customdot} ${styles.active}` : `${styles.customdot} ${styles.inactive}`;
    return <div key={index} className={customDotClass}></div>;
  };

  return (
    <div className={styles.bgs}>
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
