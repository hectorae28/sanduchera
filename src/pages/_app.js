import Header from '../components/Header';
import Footer from '../components/Footer'
import '../global.css'
import "tw-elements/dist/css/tw-elements.min.css";
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
