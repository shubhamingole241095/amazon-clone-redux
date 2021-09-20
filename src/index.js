import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from './store';

ReactDOM.render(
  <App />,
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
