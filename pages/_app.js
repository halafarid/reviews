import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css'

import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from './../redux/store'
import MainLayout from '../components/layouts/MainLayout'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  )
}

const makeStore = () => store

const wrapper = createWrapper(makeStore)
export default wrapper.withRedux(MyApp)