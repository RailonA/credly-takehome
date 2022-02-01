import { sendFeedbackAction } from '../actions/feedback';

const handleError = (dispatch, action, error) => {
  const marvelsPoblems = action === 'marvel';

  if (marvelsPoblems && error.response.status === 422) {
    dispatch(sendFeedbackAction({ type: 'error', feedback: error.response.data.error }));
  }

};

export default handleError;
