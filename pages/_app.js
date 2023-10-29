import Layout from '@/components/layout'
import '../styles/globals.css'
import ModeContext from '@/components/modecontext';

function MyApp({ Component, pageProps }) {
  return  <ModeContext> <Layout>
    <Component {...pageProps} />
  </Layout>
  </ModeContext>
}

export default MyApp