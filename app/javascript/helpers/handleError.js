import { sendFeedbackAction } from '../actions/feedback';

const handleError = (dispatch, action, error) => {
  const marvelsPoblems = action === 'marvel';
  const credlyPoblems = action === 'credly';

  if (marvelsProblems && error.response.status === 422) {
    dispatch(sendFeedbackAction({ type: 'error', feedback: error.response.data.error }));
  }

  if (credlyProblems && error.response.status === 422) {
    dispatch(sendFeedbackAction({ type: 'error', feedback: error.response.data.error }));
  }

};

export default handleError;
