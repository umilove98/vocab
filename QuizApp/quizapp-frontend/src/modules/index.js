import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import vocabs, { vocabsSaga } from './vocabs';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  vocabs,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), vocabsSaga()]);
}

export default rootReducer;
