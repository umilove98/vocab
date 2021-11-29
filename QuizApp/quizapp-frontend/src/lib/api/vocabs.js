import qs from 'qs';
import client from './client';

export const readVocab = (id) => client.get(`/api/vocabs/${id}`);

export const listVocabs = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`/api/vocabs?${queryString}`);
};
