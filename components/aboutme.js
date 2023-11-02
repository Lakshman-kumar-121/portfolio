import { saveAs } from 'file-saver';
import styles from '../styles/About.module.css';
import { BsDownload } from 'react-icons/bs';
import mystyles from './styles';
import useHover from './btnhover';
import { useContext } from 'react';
import { ThemeContext } from '@/pages';
import { thememde } from './modecontext';

const Aboutme = () => {
    const { hover, onhovertrue, onhoverfalse } = useHover();

    const mode = thememde();

    const filesave = () => {
        saveAs("https://duxxzzedebybxrvnpwha.supabase.co/storage/v1/object/public/Resume/Latest.pdf?t=2023-10-21T13%3A31%3A42.663Z", "Lakshman_cv.pdf");
    }

    const applyStyle = (style, condition) => (condition ? style : null);

    return (
        <div className={styles.aboutme} id='About' style={applyStyle(mystyles.bgclr, mode)}>
            <div className={styles.divde}  >
                <img className={styles.img} src="mailcong.svg" alt=""  data-aos-once="true" data-aos="slide-right" data-aos-duration="500" />
                <div className={styles.texts} >
                    <div className={styles.aboutus} data-aos-once="true"   data-aos="fade-up" data-aos-duration="500"    style={applyStyle(mystyles.textlightoragcolor, mode)}>ABOUT ME</div>
                    <div className={styles.whyhme}  data-aos-once="true"  data-aos="slide-left" data-aos-duration="500"    style={applyStyle(mystyles.dbfontcolor, mode)}>WHY HIRE ME FOR YOUR NEXT PROJECT ?</div>
                    <div className={styles.dis } data-aos-once="true"  data-aos="slide-left" data-aos-duration="500"  style={applyStyle(mystyles.rgcolor, mode)}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, perferendis repellendus modi repellat debitis, eum, similique molestias consequatur reiciendis quisquam neque dolorem aspernatur! Iusto minus aliquid suscipit quas optio voluptatem vitae dolores debitis corrupti, nihil pariatur officia asperiores unde, ea praesentium aspernatur delectus soluta atque est! Ex voluptate dolorum officiis.</div>
                    <div className={styles.dis}data-aos-once="true"   data-aos="slide-left" data-aos-duration="500"  style={applyStyle(mystyles.rgcolor, mode)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequuntur eum corporis nemo ut excepturi, sint dolore assumenda inventore quo?</div>
                    <button className={styles.dwncv} data-aos-once="true"  data-aos="fade-up" data-aos-duration="500"  onMouseEnter={onhovertrue} onMouseLeave={onhoverfalse} onClick={() => { filesave() }} style={hover ? applyStyle(mystyles.btnhover, mode) : applyStyle(mystyles.btnwithwhite, mode)}>DOWNLOAD CV <BsDownload></BsDownload></button>
                </div>
            </div>
        </div>
    );
}

export default Aboutme;6