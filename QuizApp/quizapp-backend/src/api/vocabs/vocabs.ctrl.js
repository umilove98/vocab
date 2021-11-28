import Vocab from '../../models/vocab';

/*
    POST /api/vocabs
*/

export const write = async (ctx) => {
  const { title, explanation, creater, words, tags } = ctx.request.body;
  const vocab = new Vocab({
    title,
    explanation,
    creater,
    words,
    tags,
  });
  try {
    await vocab.save();
    ctx.body = vocab;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
    GET /api/vocabs
*/

export const list = async (ctx) => {
  try {
    const vocabs = await Vocab.find().exec();
    ctx.body = vocabs;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
    GET /api/vocabs/:id
*/
export const read = async (ctx) => {
  const { id } = ctx.params;
  try {
    const vocab = await Vocab.findById(id).exec();
    if (!vocab) {
      ctx.status = 404; // Not Found
      return;
    }
    ctx.body = vocab;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
    DELETE /api/vocabs/:id
*/
export const remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Vocab.findByIdAndRemove(id).exec();
    ctx.status = 204; // No Content
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
    PATCH /api/vocabs/:id
*/
export const update = async (ctx) => {
  const { id } = ctx.params;
  try {
    const vocab = await Vocab.findByIdAndUpdate(id, ctx.request.body, {
      new: true,
    }).exec();
    if (!vocab) {
      ctx.status = 404;
      return;
    }
    ctx.body = vocab;
  } catch (e) {
    ctx.throw(500, e);
  }
};
