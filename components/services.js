import  styles from '../styles/Services.module.css';
import mystyles from './styles';
import { thememde } from './modecontext';
const Services = () => {
  const mode = thememde();
  const applyStyle = (style, condition) => (condition ? style : null);
    return (  
        <div className={styles.skbg} id="Service" style={applyStyle(mystyles.bgclr, mode)} >
        <div className={styles.myskil} style={applyStyle(mystyles.textoragcolor, mode)} data-aos="fade-up" data-aos-duration="800"  >WHAT SERVICE I OFFER YOU </div>
        <div className={styles.mysl}  style={applyStyle(mystyles.dbfontcolor, mode)}  data-aos="fade-up" data-aos-duration="800">Services</div>
        <div className={styles.bxshow} style={applyStyle(mystyles.borderblack, mode)} data-aos="fade-in" data-aos-duration="800">
          <div className={styles.outrbox} >
            <div className={styles.svicehd} style={applyStyle(mystyles.textoragcolor, mode)} >Frontend tools</div>
            <div className={styles.svice}style={applyStyle(mystyles.rgcolor, mode)} >Reactjs</div>
            < div className={styles.svice} style={applyStyle(mystyles.rgcolor, mode)}>Nextjs</div>
            < div className={styles.svice} style={applyStyle(mystyles.rgcolor, mode)}>Flutter</div>
          </div>
          <div className={styles.hline}style={applyStyle(mystyles.blackline, mode)}></div>
          
         
          <div className={styles.outrbox}>
            <div className={styles.svicehd} style={applyStyle(mystyles.textoragcolor, mode)} >Platforms</div>
            <div className={styles.svice}style={applyStyle(mystyles.rgcolor, mode)}>Firebase</div>
            <div className={styles.svice}style={applyStyle(mystyles.rgcolor, mode)}>Supabase</div>
            <div className={styles.svice}style={applyStyle(mystyles.rgcolor, mode)}>Vercel</div>
            <div className={styles.svice}style={applyStyle(mystyles.rgcolor, mode)}>Mongo</div>
            <div className={styles.svice}style={applyStyle(mystyles.rgcolor, mode)}>Wordpress</div>
          </div>
          <div className={styles.hline}style={applyStyle(mystyles.blackline, mode)}></div>
          <div className={styles.outrbox}>
            <div  className={styles.svicehd} style={applyStyle(mystyles.textoragcolor, mode)} >Backend & Database</div>
            <div className={styles.svice}style={applyStyle(mystyles.rgcolor, mode)}>Nodejs</div>
            <div className={styles.svice}style={applyStyle(mystyles.rgcolor, mode)}>Sql DB</div>
            <div className={styles.svice} style={applyStyle(mystyles.rgcolor, mode)}>Nosql DB</div>
          </div>
          <div className={styles.hline}style={applyStyle(mystyles.blackline, mode)}></div>
          <div className={styles.outrbox}>
            <div className={styles.svicehd} style={applyStyle(mystyles.textoragcolor, mode)} >Animation & Game dev</div>
            <div className={styles.svice}style={applyStyle(mystyles.rgcolor, mode)}>Godot</div>
            <div className={styles.svice}style={applyStyle(mystyles.rgcolor, mode)}>Blender</div>
            <div className={styles.svice}style={applyStyle(mystyles.rgcolor, mode)}>Gimp</div>
            <div className={styles.svice}style={applyStyle(mystyles.rgcolor, mode)}>Photoshop</div>
          </div>
          

         
        </div>
      </div>
     );
}
 
export default Services;