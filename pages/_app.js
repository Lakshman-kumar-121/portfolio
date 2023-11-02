import Layout from '@/components/layout'
import '../styles/globals.css'
import ModeContext from '@/components/modecontext';
import Aos from 'aos';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
         duration: 800,
         once: false,
       })
 }, [])
 
  return  <ModeContext> <Layout>
    <Component {...pageProps} />
  </Layout>
  </ModeContext>
}

export default MyApp