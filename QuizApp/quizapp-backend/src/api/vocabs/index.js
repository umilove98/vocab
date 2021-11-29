import Router from 'koa-router';
import * as vocabsCtrl from './vocabs.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const vocabs = new Router();

vocabs.post('/', checkLoggedIn, vocabsCtrl.write);
vocabs.get('/', vocabsCtrl.list);
vocabs.get('/:id', vocabsCtrl.getVocabById, vocabsCtrl.read);
vocabs.delete(
  '/:id',
  checkLoggedIn,
  vocabsCtrl.getVocabById,
  vocabsCtrl.checkOwnVocab,
  vocabsCtrl.remove,
);
vocabs.patch(
  '/:id',
  checkLoggedIn,
  vocabsCtrl.getVocabById,
  vocabsCtrl.checkOwnVocab,
  vocabsCtrl.update,
);

export default vocabs;
