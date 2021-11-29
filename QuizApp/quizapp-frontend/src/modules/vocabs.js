import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as vocabsAPI from '../lib/api/vocabs';
import { takeLatest } from 'redux-saga/effects';

const [LIST_VOCABS, LIST_VOCABS_SUCCESS, LIST_VOCABS_FAILURE] =
  createRequestActionTypes('posts/LIST_VOCABS');

export const listVocabs = createAction(
  LIST_VOCABS,
  ({ tag, username, page }) => ({ tag, username, page }),
);

const listVocabsSaga = createRequestSaga(LIST_VOCABS, vocabsAPI.listVocabs);
export function* vocabsSaga() {
  yield takeLatest(LIST_VOCABS, listVocabsSaga);
}

const initialState = {
  posts: null,
  error: null,
  lastPage: 1,
};

const vocabs = handleActions(
  {
    [LIST_VOCABS_SUCCESS]: (state, { payload: vocabs, meta: response }) => ({
      ...state,
      vocabs,
      lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
    }),
    [LIST_VOCABS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default vocabs;
