import Pagination from '../../components/vocabs/Pagination';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

const PaginationContainer = ({ location, match }) => {
  const { lastPage, vocabs, loading } = useSelector(({ vocabs, loading }) => ({
    lastPage: vocabs.lastPage,
    vocabs: vocabs.vocabs,
    loading: loading['vocabs/LIST_VOCABS'],
  }));

  if (!vocabs || loading) return null;
  const { username } = match.params;

  //page 가 없으면 1을 기본값으로 사용
  const { tag, page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
      tag={tag}
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  );
};

export default withRouter(PaginationContainer);
