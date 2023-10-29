import Main from "@/components/sc";

import styles from '../styles/Home.module.css';
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineSend } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';
import Themeic from '@/components/theme';
import mystyles from "./styles";
import { useContext, useState } from "react";
import useHover from "./btnhover";
import { thememde } from "./modecontext";

const HomeCont = () => {
    const { hover, onhovertrue, onhoverfalse } = useHover();
    const mode = thememde();

    // Define a function to conditionally apply styles
    const applyStyle = (style, condition) => (condition ? style : null);

    return (
        <div className={styles.bg} style={applyStyle(mystyles.bgclr, mode)}>
            <Main></Main>
            <Themeic></Themeic>
            <div className={styles.soft} style={applyStyle(mystyles.textlightoragcolor, mode)}>SOFTWARE DEVELOPER</div>
            <div className={styles.hey} style={applyStyle(mystyles.dbfontcolor, mode)}>Hey! I Am </div>
            <div className={styles.lak} style={applyStyle(mystyles.textlightoragcolor, mode)}>Lakshman K </div>
            <div className={styles.dis} style={applyStyle(mystyles.rgcolor, mode)}>
                A skilled software developer is a digital architect, orchestrating intricate code to build innovative applications that drive the modern world. They blend creativity and logic to solve complex problems, creating user-friendly software that transforms ideas into tangible, functional, and reliable digital experiences. They're the architects of our tech-driven future.
            </div>

            <button className={styles.hme} style={hover ? applyStyle(mystyles.btnhover, mode) : applyStyle(mystyles.btn, mode)} onMouseEnter={onhovertrue} onMouseLeave={onhoverfalse}>HIRE ME<AiOutlineSend className={styles.hmelog} fontSize={15}></AiOutlineSend> </button>

            <div className={styles.flme} style={applyStyle(mystyles.rgcolor, mode)}>Follow me:</div>
            <div className={styles.icons}>
                <a href=""> <AiOutlineTwitter className={styles.log} style={applyStyle(mystyles.dbfontcolor, mode)} /></a>
                <a href=""><AiOutlineInstagram className={styles.log} style={applyStyle(mystyles.dbfontcolor, mode)}></AiOutlineInstagram></a>
                <a href=""><AiOutlineWhatsApp className={styles.log} style={applyStyle(mystyles.dbfontcolor, mode)}></AiOutlineWhatsApp></a>
                <a href="">
                    <BiLogoLinkedin className={styles.log} style={applyStyle(mystyles.dbfontcolor, mode)}></BiLogoLinkedin>
                </a>
            </div>
        </div>
    );
}

export default HomeCont;
