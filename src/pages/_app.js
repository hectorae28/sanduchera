import '../global.css'
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

export default function MyApp({ Component, pageProps }) {
  const InitialState = useInitialState();
  return (
    <AppContext.Provider value={InitialState}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )
}
