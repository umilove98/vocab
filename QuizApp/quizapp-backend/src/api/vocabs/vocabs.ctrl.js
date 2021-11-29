import Vocab from '../../models/vocab';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const { ObjectId } = mongoose.Types;

export const getVocabById = async (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  try {
    const vocab = await Vocab.findById(id);
    if (!vocab) {
      ctx.status = 404;
      return;
    }
    ctx.state.vocab = vocab;
    return next();
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
    POST /api/vocabs
*/

export const write = async (ctx) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    explanation: Joi.string(),
    tags: Joi.array().items(Joi.string()).required(),
    words: Joi.array().items(Joi.object()),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  const { title, explanation, words, tags } = ctx.request.body;
  const vocab = new Vocab({
    title,
    explanation,
    words,
    tags,
    user: ctx.state.user,
  });
  try {
    await vocab.save();
    ctx.body = vocab;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
    GET /api/vocabs?username=&tag=&page=
*/

export const list = async (ctx) => {
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  const { tag, username } = ctx.query;
  // tag, username 값이 유효하면 객체 안에 넣고, 그렇지 않으면 넣지 않음
  const query = {
    ...(username ? { 'user.username': username } : {}),
    ...(tag ? { tags: tag } : {}),
  };

  try {
    const vocabs = await Vocab.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .exec();
    const vocabCount = await Vocab.countDocuments(query).exec();
    ctx.set('Last-Page', Math.ceil(vocabCount / 10));
    ctx.body = vocabs;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
    GET /api/vocabs/:id
*/
export const read = async (ctx) => {
  ctx.body = ctx.state.vocab;
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
  const schema = Joi.object().keys({
    title: Joi.string(),
    creater: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
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

export const checkOwnVocab = (ctx, next) => {
  const { user, vocab } = ctx.state;
  if (vocab.user._id.toString() !== user._id) {
    ctx.status = 403;
    return;
  }
  return next();
};
