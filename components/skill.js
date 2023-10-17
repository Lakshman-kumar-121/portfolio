import React from 'react';
import { useEffect, useState } from 'react';
import styles from '../styles/Skill.module.css';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Skill = () => {
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
                    {
                        'lang' : 'Java', 
                        'image' : 'abc.png',
                        'experience' : 'Junior',
                            id : 6
                        } ,
                        {
                            'lang' : 'Java', 
                            'image' : 'abc.png',
                            'experience' : 'Intermidiate',
                                id : 7
                            } ,
                            {
                                'lang' : 'Java', 
                                'image' : 'abc.png',
                                'experience' : 'Junior',
                                    id : 8
                                } 
        // Add more skill objects here
    ];
    function getStyleForExperience(experience) {
        switch (experience) {
            case 'Junior':
                return styles.lvl;
            case 'Intermidiate':
                return styles.int;
            case 'Beginner':
                return styles.beg;
            default:
                return ''; 
        }
    }

    const skillItems = lan.map((skill) => (
        <div key={skill.id} className={styles.bx}>
            <img src="img.png" alt="" className={styles.im}  width='100px'/>
            <div className={styles.lang}>{skill.lang}</div>
            <div className={`${styles.skill} ${getStyleForExperience(skill.experience)}`}>{skill.experience}</div>
        </div>
    ));
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        
        return null;
    }
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
          items: 6,
        },
      };

    return (
        <div className={styles.skbg}>
            <div className={styles.myskil}>MY SKILLS PROGRESS SO FAR</div>
            <div className={styles.mysl}>My Skills</div>
            <div className={styles.bxshow}>
            <AliceCarousel
                infinite
                disableButtonsControls
                autoPlay
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
