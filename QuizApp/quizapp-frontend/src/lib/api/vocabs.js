import qs from 'qs';
import client from './client';

export const listVocabs = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`/api/vocabs?${queryString}`);
};
