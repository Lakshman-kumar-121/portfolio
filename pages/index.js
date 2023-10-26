
import '../styles/Home.module.css';
import HomeCont from '@/components/home';
import Aboutme from '@/components/aboutme';
import Skill from '@/components/skill';
import Mywork from '@/components/work';
import Contactme from '@/components/contactm';
import Menu from '@/components/sidemenu';

export default function Home() {
  return (
    <div>
      
      <HomeCont></HomeCont>
      
      <Aboutme></Aboutme>
      <Skill/>
      <Mywork/>
      <Contactme/>

    </div>
        
      
        
    
  )
}
