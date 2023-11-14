import Layout from '@/components/layout'
import '../styles/globals.css'
import ModeContext from '@/components/modecontext';
import Aos from 'aos';
import { useEffect  } from 'react';
import SupbaseClient from '@/components/supbase_conn/clientcon';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
         duration: 800,
         once: false,
       });
       uploaddata();




 }, []);
 async function uploaddata() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const ip = data.ip;

    const userAgent = navigator.userAgent;
    const dataToInsert = [{ Ip: ip, Browser: userAgent }];

    const { data: responseData, error } = await SupbaseClient.from("Device").upsert(dataToInsert, { returning: 'minimal' });
    
    // Handle the result of the upsert operation if needed
  } catch (error) {
    console.error('Error fetching or uploading data:', error);
  }
}

 
  return  <ModeContext> <Layout>
    <Component {...pageProps} />
  </Layout>
  </ModeContext>
}


export default MyApp