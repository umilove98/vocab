import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as vocabsAPI from '../lib/api/vocabs';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'write/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'write/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [WRITE_VOCAB, WRITE_VOCAB_SUCCESS, WRITE_VOCAB_FAILURE] =
  createRequestActionTypes('write/WRITE_VOCAB'); // 포스트 작성

const SET_ORIGINAL_VOCAB = 'write/SET_ORIGINAL_VOCAB';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const writeVocab = createAction(
  WRITE_VOCAB,
  ({ title, explanation, words, tags }) => ({
    title,
    explanation,
    words,
    tags,
  }),
);

export const setOriginalVocab = createAction(
  SET_ORIGINAL_VOCAB,
  (vocab) => vocab,
);

// 사가 생성
const writeVocabSaga = createRequestSaga(WRITE_VOCAB, vocabsAPI.writeVocab);
export function* writeSaga() {
  yield takeLatest(WRITE_VOCAB, writeVocabSaga);
}

const initialState = {
  title: '',
  explanation: '',
  words: [],
  tags: [],
  vocab: null,
  vocabError: null,
  originalVocabId: null,
};

const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_VOCAB]: (state) => ({
      ...state,
      // vocab와 vocabError를 초기화
      vocab: null,
      vocabError: null,
    }),
    // 학습세트 작성 성공
    [WRITE_VOCAB_SUCCESS]: (state, { payload: vocab }) => ({
      ...state,
      vocab,
    }),
    [WRITE_VOCAB_FAILURE]: (state, { payload: vocabError }) => ({
      ...state,
      vocabError,
    }),
    [SET_ORIGINAL_VOCAB]: (state, { payload: vocab }) => ({
      ...state,
      title: vocab.title,
      explanation: vocab.explanation,
      words: vocab.words,
      tags: vocab.tags,
      originalVocabId: vocab._id,
    }),
  },
  initialState,
);

export default write;
