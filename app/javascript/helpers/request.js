import axios from 'axios';
import {
    getMarvelsRequest,
    getMarvelsSuccess,
    getMarvelsFailure,
} from '../actions/marvels';

const requests = {
    users: 'http://localhost:3000/api/v1/marvels',
  };
  
  const requestMarvelsInfo = async (dispatch) => {
    try {
      dispatch(getMarvelsRequest());
      const response = await axios.get('');
      dispatch(getMarvelsSuccess(response.data));
    } catch (error) {
      dispatch(getMarvelsFailure);
      handleError(dispatch, 'marvels', error);
    }
  };

  export default requestMarvelsInfo;
