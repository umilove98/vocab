import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const WordsBlock = styled.div`
  p {
    width: 100%;
    padding: 10px;
    border: 1px solid ${palette.gray[5]};
    font-size: 2rem;
    margin-top: 5px;
  }
`;

const Words = ({ words }) => {
  return (
    <WordsBlock>
      {words &&
        words.map((word) => (
          <p>
            {word.word} - {word.definition}
          </p>
        ))}
    </WordsBlock>
  );
};

export default Words;
