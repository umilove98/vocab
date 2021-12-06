import React, { useEffect, useCallback } from 'react';
import Editor from '../../components/write/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';
import InputWord from '../../components/common/InputWord';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, explanation, words } = useSelector(({ write }) => ({
    title: write.title,
    explanation: write.explanation,
    words: write.words,
  }));

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return (
    <>
      <Editor
        onChangeField={onChangeField}
        title={title}
        explanation={explanation}
      />
      <InputWord words={words} />
    </>
  );
};

export default EditorContainer;
