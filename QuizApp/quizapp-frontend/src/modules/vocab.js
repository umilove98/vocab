import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as vocabsAPI from '../lib/api/vocabs';
import { takeLatest } from 'redux-saga/effects';

const [READ_VOCAB, READ_VOCAB_SUCCESS, READ_VOCAB_FAILURE] =
  createRequestActionTypes('vocab/READ_VOCAB');
const UNLOAD_VOCAB = 'vocab/UNLOAD_VOCAB'; // 포스트 페이지에서 벗어날 때 데이터 비우기

export const readVocab = createAction(READ_VOCAB, (id) => id);
export const unloadVocab = createAction(UNLOAD_VOCAB);

const readVocabSaga = createRequestSaga(READ_VOCAB, vocabsAPI.readVocab);
export function* vocabSaga() {
  yield takeLatest(READ_VOCAB, readVocabSaga);
}

const initialState = {
  vocab: null,
  error: null,
};

const vocab = handleActions(
  {
    [READ_VOCAB_SUCCESS]: (state, { payload: vocab }) => ({
      ...state,
      vocab,
    }),
    [READ_VOCAB_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_VOCAB]: () => initialState,
  },
  initialState,
);

export default vocab;
