import Router from 'koa-router';
import auth from './auth';
import vocabs from './vocabs';

const api = new Router();

api.use('/auth', auth.routes());
api.use('/vocabs', vocabs.routes());

export default api;
