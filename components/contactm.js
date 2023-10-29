import styles from '../styles/Contact.module.css';
import {BiPhoneCall} from 'react-icons/bi';
import {HiOutlineMail ,HiLocationMarker} from 'react-icons/hi';
import SupbaseClient from './supbase_conn/clientcon';
import { useContext, useState } from 'react';
import mystyles from './styles';
import useHover from './btnhover';
import { ThemeContext } from '@/pages';
import { thememde } from './modecontext';
const Contactme = () => {
    const {hover , onhovertrue , onhoverfalse} = useHover();

    const mode = thememde();
    const [name , setname] = useState('');

    const [email , setmail] = useState('');

    const [subject, setsubject] = useState('');

    const [message, setmessage] = useState('');


    ;
async function sendmessage (){
    const dataToInsert = [
        { Name : name, Email : email , Subject : subject , Message: message  },
      ]
      setname('');
      setmail('');
      setsubject('');
      setmessage('');
      alert("Message sent");
    const {data , error} = await SupbaseClient.from("ContactMe").upsert(dataToInsert , {returning : 'minimal'});
    

}
const applyStyle = (style, condition) => (condition ? style : null);


    return ( 
        <div className={styles.cntbg} id='Contact' style={applyStyle(mystyles.bgclr, mode) }>
        <div className={styles.hd}>
            <div className={styles.fst} style={ applyStyle(mystyles.textoragcolor , mode)} >I Want To Hear From You</div>
            <div className={styles.cnt} style={applyStyle( mystyles.dbfontcolor , mode)} >Contact Me</div>
        </div>
        <div className={styles.ssec}>
    
            <div className={styles.log}>
                <div className={styles.onelogsec}>
                    <BiPhoneCall className={`${styles.clog} ${styles.call}`} />
                    <div>
                        <div className={styles.lhd} style={applyStyle( mystyles.dbfontcolor, mode)} >Call Me:</div>
                        <div className={styles.ds} style={applyStyle( mystyles.textlightoragcolor, mode)}>
                            +91 809 522 2577
                        </div>
                    </div>
    
                </div>
                <div className={styles.onelogsec }>
                <HiOutlineMail className={`${styles.clog} ${styles.mail}`} />
                    <div>
                        <div className={styles.lhd} style={applyStyle( mystyles.dbfontcolor, mode)}>Email Me:</div>
                        <div className={styles.ds} style={applyStyle( mystyles.textlightoragcolor, mode)} > Lakshmankumarr121@gmail.com</div>
                    </div>
                </div>

                <div className={styles.onelogsec}>
                    <HiLocationMarker className={`${styles.clog} ${styles.loc}`} />
                    <div>
                        <div className={styles.lhd} style={applyStyle( mystyles.dbfontcolor, mode)}>Location:</div>
                        <div className={styles.ds} style={applyStyle( mystyles.textlightoragcolor, mode)}> Karnataka , Banglore</div>
                    </div>
    
                </div>
            </div>
            <div className={styles.frm}>
                <input type="text" style={applyStyle( mystyles.navclr, mode)}  placeholder='Enter Your Name' value={name} onChange={(e)=>{
                    setname(e.target.value);
                }} className={styles.input}/><input type="text"  style={applyStyle( mystyles.navclr, mode)} value={email} onChange={(e)=>{
                    setmail(e.target.value);
                }}  placeholder='Enter Your Email' className={styles.input}/> <br />
                <input onChange={(e)=>{
                    setsubject(e.target.value);
                }}  type="text"className={`${styles.input} ${styles.sub}`}  style={applyStyle( mystyles.navclr, mode)} value={subject} placeholder='Enter Subject' height='20px' /> <br />
                <textarea  onChange={(e)=>{
                    setmessage(e.target.value);
                }} name="message"   style={applyStyle( mystyles.navclr, mode)} placeholder='Your Message' value={message} className={`${styles.input} ${styles.sub}`} rows="8" cols="50"></textarea> <br />
                <button className={styles.sendbtn} onMouseEnter={onhovertrue} onMouseLeave={onhoverfalse} style={hover?   applyStyle( mystyles.btnhover, mode) : applyStyle( mystyles.btn, mode)} onClick={()=>{sendmessage()}}>Send Message</button>
            </div>
        </div>
    </div>
     );
}
 
export default Contactme;