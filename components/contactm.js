import styles from '../styles/Contact.module.css';
import {BiPhoneCall} from 'react-icons/bi';
import {HiOutlineMail ,HiLocationMarker} from 'react-icons/hi';
const Contactme = () => {
    return ( 
        <div className={styles.cntbg}>
        <div className={styles.hd}>
            <div className={styles.fst}>I Want To Hear From You</div>
            <div className={styles.cnt}>Contact Me</div>
        </div>
        <div className={styles.ssec}>
    
            <div className={styles.log}>
                <div className={styles.onelogsec}>
                    <BiPhoneCall className={`${styles.clog} ${styles.call}`} />
                    <div>
                        <div className={styles.lhd}>Call Me:</div>
                        <div className={styles.ds}>
                            +91 809 522 2577
                        </div>
                    </div>
    
                </div>
                <div className={styles.onelogsec }>
                <HiOutlineMail className={`${styles.clog} ${styles.mail}`} />
                    <div>
                        <div className={styles.lhd}>Email Me:</div>
                        <div className={styles.ds}> Lakshmankumarr121@gmail.com</div>
                    </div>
                </div>

                <div className={styles.onelogsec}>
                    <HiLocationMarker className={`${styles.clog} ${styles.loc}`} />
                    <div>
                        <div className={styles.lhd}>Location:</div>
                        <div className={styles.ds}> Karnataka , Banglore</div>
                    </div>
    
                </div>
    
    
    
            </div>
            <div className={styles.frm}>
                <input type="text"  placeholder='Enter Your Name' className={styles.input}/><input type="text"  placeholder='Enter Your Email' className={styles.input}/> <br />
                <input type="text"className={`${styles.input} ${styles.sub}`} placeholder='Enter Subject' height='20px' /> <br />
                <textarea name="message"  placeholder='Your Message' className={`${styles.input} ${styles.sub}`} rows="8" cols="50"></textarea> <br />
                <button className={styles.sendbtn}>Send Message</button>
            </div>
        </div>
    </div>
     );
}
 
export default Contactme;