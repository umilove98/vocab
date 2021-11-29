import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const VocabListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WriteVocabButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const VocabItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const VocabItem = ({ vocab }) => {
  const { publishedDate, user, tags, title, _id, explanation } = vocab;
  return (
    <VocabItemBlock>
      <h2>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate)}
      />
      <Tags tags={tags} />
      <p>{explanation}</p>
    </VocabItemBlock>
  );
};

const VocabList = ({ vocabs, loading, error, showWriteButton }) => {
  if (error) {
    return <VocabListBlock>에러가 발생했습니다.</VocabListBlock>;
  }
  return (
    <VocabListBlock>
      <WriteVocabButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/write">
            단어 학습세트 생성
          </Button>
        )}
      </WriteVocabButtonWrapper>
      {/*로딩 중이 아니고, 포스트 배열이 존재할 때만 보여 줌 */}
      {!loading && vocabs && (
        <div>
          {vocabs.map((vocab) => (
            <VocabItem vocab={vocab} key={vocab._id} />
          ))}
        </div>
      )}
    </VocabListBlock>
  );
};

export default VocabList;
