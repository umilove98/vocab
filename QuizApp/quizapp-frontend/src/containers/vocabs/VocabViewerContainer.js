import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readVocab, unloadVocab } from '../../modules/vocab';
import VocabViewer from '../../components/vocabs/VocabViewer';
import VocabActionButtons from '../../components/vocabs/VocabActionButtons';
import { removeVocab } from '../../lib/api/vocabs';

const VocabViewerContainer = ({ match, history }) => {
  // 처음 마운트될 때 포스트 읽기 API 요청
  const { vocabId } = match.params;
  const dispatch = useDispatch();
  const { vocab, error, loading, user } = useSelector(
    ({ vocab, loading, user }) => ({
      vocab: vocab.vocab,
      error: vocab.error,
      loading: loading['vocab/READ_VOCAB'],
      user: user.user,
    }),
  );

  useEffect(() => {
    dispatch(readVocab(vocabId));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadVocab());
    };
  }, [dispatch, vocabId]);

  const onRemove = async () => {
    try {
      await removeVocab(vocabId);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  const ownVocab = (user && user._id) === (vocab && vocab.user._id);

  return (
    <VocabViewer
      vocab={vocab}
      loading={loading}
      error={error}
      actionButtons={ownVocab && <VocabActionButtons onRemove={onRemove} />}
    />
  );
};

export default withRouter(VocabViewerContainer);
