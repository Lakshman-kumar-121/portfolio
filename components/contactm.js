import styles from '../styles/Contact.module.css';
import {BiPhoneCall} from 'react-icons/bi';
import {HiOutlineMail ,HiLocationMarker} from 'react-icons/hi';
import SupbaseClient from './supbase_conn/clientcon';
import { useState } from 'react';
const Contactme = () => {

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



    return ( 
        <div className={styles.cntbg} id='Contact'>
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
                <input type="text"  placeholder='Enter Your Name' value={name} onChange={(e)=>{
                    setname(e.target.value);
                }} className={styles.input}/><input type="text" value={email} onChange={(e)=>{
                    setmail(e.target.value);
                }}  placeholder='Enter Your Email' className={styles.input}/> <br />
                <input onChange={(e)=>{
                    setsubject(e.target.value);
                }}  type="text"className={`${styles.input} ${styles.sub}`} value={subject} placeholder='Enter Subject' height='20px' /> <br />
                <textarea  onChange={(e)=>{
                    setmessage(e.target.value);
                }} name="message"  placeholder='Your Message' value={message} className={`${styles.input} ${styles.sub}`} rows="8" cols="50"></textarea> <br />
                <button className={styles.sendbtn} onClick={()=>{sendmessage()}}>Send Message</button>
            </div>
        </div>
    </div>
     );
}
 
export default Contactme;