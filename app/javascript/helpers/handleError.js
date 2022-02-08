import { sendFeedbackAction } from '../actions/feedback';

const handleError = (dispatch, action, error) => {
  const marvelsProblems = action === 'marvel';
  const credlyProblems = action === 'credly';

  if (marvelsProblems && error.response.status === 422) {
    dispatch(sendFeedbackAction({ type: 'error', feedback: error.response.data.error }));
  }

  if (credlyProblems && error.response.status === 422) {
    dispatch(sendFeedbackAction({ type: 'error', feedback: error.response.data.error }));
  }

};

export default handleError;
