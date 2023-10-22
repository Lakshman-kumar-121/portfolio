import { saveAs } from 'file-saver';
import styles from '../styles/About.module.css';
import {BsDownload} from 'react-icons/bs';
const Aboutme = () => {
    const filesave = ()=>{
        saveAs("https://duxxzzedebybxrvnpwha.supabase.co/storage/v1/object/public/Resume/Latest.pdf?t=2023-10-21T13%3A31%3A42.663Z" , 
        "Lakshman_cv.pdf")
    }
    return (  
        <div className={styles.aboutme} id='About'>
            <div className={styles.divde}>
                <img className={styles.img} src="mailcong.svg" alt="" />
                <div className={styles.texts}>
                    <div className={styles.aboutus}>ABOUT ME</div>
                    <div className={styles.whyhme}>
                        WHY HIRE ME FOR YOUR NEXT PROJECT ?
                    </div>
                    <div className={styles.dis}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, perferendis repellendus modi repellat debitis, eum, similique molestias consequatur reiciendis quisquam neque dolorem aspernatur! Iusto minus aliquid suscipit quas optio voluptatem vitae dolores debitis corrupti, nihil pariatur officia asperiores unde, ea praesentium aspernatur delectus soluta atque est! Ex voluptate dolorum officiis.</div>
                    <div className={styles.dis}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequuntur eum corporis nemo ut excepturi, sint dolore assumenda inventore quo?</div>
                    <button className={styles.dwncv} onClick={()=>{filesave()}}>DOWNLOAD CV <BsDownload></BsDownload></button>
                </div>
                
            </div>
        </div>
    );
}
 
export default Aboutme;