import client from './client';

//로그인
export const login = ({ username, password }) =>
  client.post('/api/auth/login', { username, password });

//회원 가입
export const register = ({ username, password }) =>
  client.post('/api/auth/register', { username, password });

//로그인 상태 확인
export const check = () => client.get('/api/auth/check');

//로그아웃
export const logout = () => client.post('/api/auth/logout');

//회원탈퇴
export const signout = (id) => client.delete(`/api/auth/${id}`);

//회원정보 수정
export const update = ({ id, password }) =>
  client.patch(`/api/auth/${id}`, { password });
