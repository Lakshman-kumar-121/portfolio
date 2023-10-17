import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from '../styles/Work.module.css';
import { useEffect, useState } from 'react';
import {BsLaptop } from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';

const Mywork = () => {
  let lan = [
    {'lang' : 'Javascript', 
    'image' : 'abc.png',
    'experience' : 'Junior',
    id : 0
},{
'lang' : 'Java', 
'image' : 'abc.png',
'experience' : 'Intermidiate',
    id : 1
} ,
{
    'lang' : 'Java', 
    'image' : 'abc.png',
    'experience' : 'Beginner',
        id : 2
    }  ,
    {
        'lang' : 'Java', 
        'image' : 'abc.png',
        'experience' : 'Junior',
            id : 3
        } ,
        {
            'lang' : 'Java', 
            'image' : 'abc.png',
            'experience' : 'Intermidiate',
                id : 4
            } ,
            {
                'lang' : 'Java', 
                'image' : 'abc.png',
                'experience' : 'Beginner',
                    id : 5
                } ,
  ];

  var responsive = {
    0: {
      items: 1,
    },
    380: {
      items: 1,
    },
    512: {
      items: 2,
    },
    665: {
      items: 3,
    },
    767: {
      items: 3,
    },
    870: {
      items: 4,
    },
    1024: {
      items: 6,
    },
    1265: {
      items: 3,
    }}
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const skillItems = lan.map((skill) => (
    <div key={skill.id} className={styles.bx}>
      <img src="img.png" alt="" className={styles.im} width='100px' />
      <div className={styles.langs}>Django | Python | Java</div>
      <div className={styles.head}>Pharmacy might system</div>
      <div className={styles.dis}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias labore voluptate hic  neque </div>
      <div className={styles.code}><div><BsLaptop className={styles.icon}/> LIVE DEMO</div>
      <div> <AiFillGithub className={styles.icon}/>SOURCE CODE</div></div>
    </div>
  ));

  const setsa = (isActive, index) => {

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
        renderDotsItem={setsa}
      />
    </div>
  );
}

export default Mywork;
