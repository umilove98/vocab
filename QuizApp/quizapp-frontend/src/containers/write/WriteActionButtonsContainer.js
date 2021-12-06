import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writeVocab } from '../../modules/write';

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, explanation, words, tags, vocab, vocabError } = useSelector(
    ({ write }) => ({
      title: write.title,
      explanation: write.explanation,
      words: write.words,
      tags: write.tags,
      vocab: write.vocab,
      vocabError: write.vocabError,
    }),
  );

  // 학습세트 등록
  const onPublish = () => {
    dispatch(
      writeVocab({
        title,
        explanation,
        words,
        tags,
      }),
    );
  };

  // 취소
  const onCancel = () => {
    history.goBack();
  };

  // 성공 혹은 실패 시 할 작업
  useEffect(() => {
    if (vocab) {
      const { _id, user } = vocab;
      history.push(`/@${user.username}/${_id}`);
    }
    if (vocabError) {
      console.log(vocabError);
    }
  }, [history, vocab, vocabError]);
  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(WriteActionButtonsContainer);
