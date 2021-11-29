import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readVocab, unloadVocab } from '../../modules/vocab';
import VocabViewer from '../../components/vocabs/VocabViewer';

const VocabViewerContainer = ({ match }) => {
  // 처음 마운트될 때 포스트 읽기 API 요청
  const { vocabId } = match.params;
  const dispatch = useDispatch();
  const { vocab, error, loading } = useSelector(({ vocab, loading }) => ({
    vocab: vocab.vocab,
    error: vocab.error,
    loading: loading['vocab/READ_VOCAB'],
  }));

  useEffect(() => {
    dispatch(readVocab(vocabId));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadVocab());
    };
  }, [dispatch, vocabId]);

  return <VocabViewer vocab={vocab} loading={loading} error={error} />;
};

export default withRouter(VocabViewerContainer);
