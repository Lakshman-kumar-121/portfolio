import styles from '../styles/Skill.module.css';


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
  
        
      </div>
    );
  };
  
  export default Skill;