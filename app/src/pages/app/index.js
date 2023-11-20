import { Provider } from 'react-redux';
import RouteNavigation from '../../config/router';
import store from '../../redux/store';

const AppCore = (props) => {
  return (
    <Provider store={store}>
      <RouteNavigation {...props} />
    </Provider>
  )
};

export default AppCore;