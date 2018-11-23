import { connect } from 'react-redux';
import { GET_ITEMS } from '../constants/actionTypes';
import App from '../components/App';
import SAMPLE_DATA from '../sampleData';

export const actions = {
  getItems(items) {
    return {
      type: GET_ITEMS,
      items
    };
  }
};

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItems() {
      setTimeout(() => {
        dispatch(actions.getItems(SAMPLE_DATA.items));
      }, 0);
    }
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer
