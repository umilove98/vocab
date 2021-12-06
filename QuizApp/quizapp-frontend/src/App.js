import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ListPage from './pages/ListPage';
import ProfileEditPage from './pages/ProfileEditPage';
import VocabPage from './pages/VocabPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <>
      <Route path="/" component={ListPage} exact />
      <Route path="/@:username" component={ListPage} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/profileEdit" component={ProfileEditPage} />
      <Route path="/@:username/:vocabId" component={VocabPage} />
      <Route path="/write" component={WritePage} />
    </>
  );
}

export default App;
