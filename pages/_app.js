import { Provider } from 'react-redux'
import store from '../redux/store'
import '../styles/globals.css'
import Amplify from 'aws-amplify';
import config from '../src/aws-exports'

Amplify.configure(config);

function MyApp({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}

export default MyApp
