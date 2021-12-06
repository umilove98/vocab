import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import vocab, { vocabSaga } from './vocab';
import vocabs, { vocabsSaga } from './vocabs';
import write, { writeSaga } from './write';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  vocab,
  vocabs,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), vocabSaga(), vocabsSaga()]);
}

export default rootReducer;
