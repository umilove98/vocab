import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import VocabList from '../../components/vocabs/VocabList';
import { listVocabs } from '../../modules/vocabs';

const VocabListContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { vocabs, error, loading, user } = useSelector(
    ({ vocabs, loading, user }) => ({
      vocabs: vocabs.vocabs,
      error: vocabs.error,
      loading: loading['vocabs/LIST_VOCABS'],
      user: user.user,
    }),
  );
  useEffect(() => {
    const { username } = match.params;
    const { tag, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listVocabs({ tag, username, page }));
  }, [dispatch, location.search]);

  return (
    <VocabList
      loading={loading}
      error={error}
      vocabs={vocabs}
      showWriteButton={user}
    />
  );
};

export default withRouter(VocabListContainer);
