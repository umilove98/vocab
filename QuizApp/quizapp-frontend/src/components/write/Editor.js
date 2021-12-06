import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import InputWord from '../common/InputWord';
import Responsive from '../common/Responsive';

const EditorBlock = styled(Responsive)`
  /* 페이지 위아래 여백 지정 */
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  width: 100%;
`;

const ExplanationInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  width: 100%;
`;

const Editor = ({ title, explanation, words, onChangeField }) => {
  const onChagneTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };
  const onChagneExplanation = (e) => {
    onChangeField({ key: 'explanation', value: e.target.value });
  };
  return (
    <EditorBlock>
      <TitleInput
        placeholder="제목을 입력하세요"
        onChange={onChagneTitle}
        value={title}
      />
      <ExplanationInput
        placeholder="설명을 입력하세요"
        onChange={onChagneExplanation}
        value={explanation}
      />
    </EditorBlock>
  );
};

export default Editor;
