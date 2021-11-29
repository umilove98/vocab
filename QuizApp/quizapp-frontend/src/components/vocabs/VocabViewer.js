import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const VocabViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;
const VocabHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const VocabContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const VocabViewer = ({ vocab, error, loading, actionButtons }) => {
  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <VocabViewerBlock>존재하지 않는 포스트입니다.</VocabViewerBlock>;
    }
    return <VocabViewerBlock>오류 발생!</VocabViewerBlock>;
  }

  // 로딩중이거나, 아직 포스트 데이터가 없을 시
  if (loading || !vocab) {
    return null;
  }

  const { title, user, publishedDate, tags } = vocab;
  return (
    <VocabViewerBlock>
      <VocabHead>
        <h1>{title}</h1>
        <SubInfo
          username={user.username}
          publishedDate={publishedDate}
          hasMarginTop
        />
        <Tags tags={tags} />
      </VocabHead>
      {actionButtons}
    </VocabViewerBlock>
  );
};

export default VocabViewer;
