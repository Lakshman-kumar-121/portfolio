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
    'experience' : 'Junior',
        id : 1
    } ,
    {
        'lang' : 'Java', 
        'image' : 'abc.png',
        'experience' : 'Junior',
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
                'experience' : 'Junior',
                    id : 4
                } ,
                {
                    'lang' : 'Java', 
                    'image' : 'abc.png',
                    'experience' : 'Junior',
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
                            'experience' : 'Junior',
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

    const skillItems = lan.map((skill) => (
        <div key={skill.id}>
            <div>{skill.id}</div>
            
            {/* Add any additional information you want to display for each skill */}
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
          items: 4,
        },
      };

    return (
        <div className={styles.skbg}>
            <div className={styles.myskil}>MY SKILLS PROGRESS SO FAR</div>
            <div className={styles.mysl}>My Skills</div>
            <AliceCarousel
                infinite
                disableButtonsControls
                autoPlay
                mouseTracking
                autoPlayInterval={1000}
                responsive={responsive}
                items={skillItems}
            />
        </div>
    );
};

export default Skill;
