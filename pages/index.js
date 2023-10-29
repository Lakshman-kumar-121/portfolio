
import '../styles/Home.module.css';
import HomeCont from '@/components/home';
import Aboutme from '@/components/aboutme';
import Skill from '@/components/skill';
import Mywork from '@/components/work';
import Contactme from '@/components/contactm';
import Menu from '@/components/sidemenu';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
      <img  href="/developers.png" />
        <title>  
          Lakshman K</title>
      </Head>
      
      <HomeCont></HomeCont>
      
      <Aboutme></Aboutme>
      <Skill/>
      <Mywork/>
      <Contactme/>

    </div>
        
      
        
    
  )
}
