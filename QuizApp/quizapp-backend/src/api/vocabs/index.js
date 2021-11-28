import Router from 'koa-router';
import * as vocabsCtrl from './vocabs.ctrl';

const vocabs = new Router();

vocabs.post('/', vocabsCtrl.write);
vocabs.get('/', vocabsCtrl.list);
vocabs.get('/:id', vocabsCtrl.read);
vocabs.delete('/:id', vocabsCtrl.remove);
vocabs.patch('/:id', vocabsCtrl.update);

export default vocabs;
