import { connect } from 'react-redux';
import { GET_ITEMS } from '../constants/actionTypes';
import axios from 'axios';
import cors from 'cors';
import App from '../components/App';
import SAMPLE_DATA from '../sampleData';

const actions = {
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
      axios.get('https://api.ddocdoc.com/v2/eventBanner?populate=true')
        .then(({ data }) => {
          console.log(data, data.items);
          dispatch(actions.getItems(data.items));
        })
        .catch(err => {
          console.error('is has problem');
          dispatch(actions.getItems(SAMPLE_DATA.items));
          // throw new Error(err);
        });
    }
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer
