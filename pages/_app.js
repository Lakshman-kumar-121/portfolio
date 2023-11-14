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

 async function uploaddata(){
let ip;
const userAgent = navigator.userAgent;

fetch('https://ipapi.co/json/')
.then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Network response was not ok');
  }
})
.then((data) => {
  ip = data.ip;
});
  
const dataToInsert = [
  { Ip : ip,Browser : userAgent },
]
  const {data , error} = await SupbaseClient.from("Device").upsert(dataToInsert , {returning : 'minimal'});
  

 }
 
  return  <ModeContext> <Layout>
    <Component {...pageProps} />
  </Layout>
  </ModeContext>
}


export default MyApp