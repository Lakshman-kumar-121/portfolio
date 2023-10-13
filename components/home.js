import styles from '../styles/Home.module.css';
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineWhatsApp ,AiOutlineSend } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';
const HomeCont = () => {
    return (
        <div className={styles.bg}>
            <div className={styles.soft}>SOFTWARE DEVELOPER</div>
            <div className={styles.hey} >Hey! I Am </div>
            <div className={styles.lak} >Lakshman K </div>
            <div className={styles.dis}>A skilled software developer is a digital architect, orchestrating intricate code to build innovative applications that drive the modern world. They blend creativity and logic to solve complex problems, creating user-friendly software that transforms ideas into tangible, functional, and reliable digital experiences. They're the architects of our tech-driven future.</div>
            <button class={styles.hme}>HIRE ME <AiOutlineSend fontSize={15} ></AiOutlineSend> </button>
            <div className={styles.flme}>Follow me:</div>
            <a href="">        <AiOutlineTwitter className={styles.log} />
            </a>        <a href=""><AiOutlineInstagram className={styles.log}></AiOutlineInstagram></a>
            <a href="">        <AiOutlineWhatsApp className={styles.log}></AiOutlineWhatsApp>
            </a>
            <a href="">
                <BiLogoLinkedin className={styles.log}></BiLogoLinkedin>
            </a>       </div>
    );
}

export default HomeCont;