import styles from '../styles/Skill.module.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

  
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Skill = () => {
    let lan = [{'lang' : 'Javascript', 
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
    ];

    const responsive = {
        0: {
          items: 1,
        },
        380: {
          items: 4,
        },
        
       
      };
    
    const items = lan?.map((details4) => {
        return (
          <div className="mylang" title={details4.lang_name} key={details4.id}>
            {details4.id}
            <br />
            <br />
          </div>
        );
      });
    return (
      <div className={styles.skbg}>
        <div className={styles.myskil}>MY SKILLS PROGRESS SO FAR</div>
        <div className={styles.mysl}>My Skills</div>
  
        <AliceCarousel items={items}
        infinite
        
        autoPlay
        disableButtonsControls
        disableDotsControls
        mouseTracking
                autoPlayInterval={1000}
                
                responsive={responsive}
        />
      </div>
    );
  };
  
  export default Skill;