import Main from "@/components/sc";

import styles from '../styles/Home.module.css';
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineWhatsApp ,AiOutlineSend } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';
import Themeic from '@/components/theme';
import mystyles  from "./styles";
import { useState } from "react";
import useHover from "./btnhover";

const HomeCont = () => {
    const {hover , onhovertrue , onhoverfalse} = useHover();
    return (
        <div className={styles.bg} style={ mystyles.bgclr}  >
          <Main></Main>
          <Themeic></Themeic>
            <div className={styles.soft}style={ mystyles.textlightoragcolor} >SOFTWARE DEVELOPER</div>
            <div className={styles.hey} style={mystyles.dbfontcolor} >Hey! I Am </div>   
            <div className={styles.lak}  style={mystyles.textlightoragcolor} >Lakshman K </div>
            <div className={styles.dis} style={mystyles.rgcolor}  >A skilled software developer is a digital architect, orchestrating intricate code to build innovative applications that drive the modern world. They blend creativity and logic to solve complex problems, creating user-friendly software that transforms ideas into tangible, functional, and reliable digital experiences. They're the architects of our tech-driven future.</div>
            
            <button className={styles.hme}style={hover ?  mystyles.btnhover :mystyles.btn}  onMouseEnter={onhovertrue} onMouseLeave={onhoverfalse} >HIRE ME<AiOutlineSend className={styles.hmelog} fontSize={15} ></AiOutlineSend> </button>
            
            
            
            <div className={styles.flme} style={mystyles.rgcolor}  >Follow me:</div>
            <div className={styles.icons}>
            <a href="">  <AiOutlineTwitter className={styles.log} style={mystyles.dbfontcolor} />
            </a>       <a href=""><AiOutlineInstagram className={styles.log} style={mystyles.dbfontcolor}></AiOutlineInstagram></a>
            <a href=""><AiOutlineWhatsApp className={styles.log} style={mystyles.dbfontcolor}></AiOutlineWhatsApp></a>
            <a href="">
                <BiLogoLinkedin className={styles.log} style={mystyles.dbfontcolor}></BiLogoLinkedin>
            </a>       </div></div>
    );
}

export default HomeCont;