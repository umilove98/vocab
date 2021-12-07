import qs from 'qs';
import client from './client';

export const writeVocab = ({ title, explanation, words, tags }) =>
  client.post('/api/vocabs', { title, explanation, words, tags });

export const readVocab = (id) => client.get(`/api/vocabs/${id}`);

export const listVocabs = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`/api/vocabs?${queryString}`);
};

export const updateVocab = ({ id, title, explanation, words, tags }) =>
  client.patch(`/api/posts/${id}`, {
    title,
    explanation,
    words,
    tags,
  });

export const removeVocab = (id) => client.delete(`/api/vocabs/${id}`);
