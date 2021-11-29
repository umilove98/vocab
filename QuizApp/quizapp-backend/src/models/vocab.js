import mongoose from 'mongoose';

const { Schema } = mongoose;

const VocabSchema = new Schema({
  title: String,
  explanation: String,
  words: [
    {
      word: String,
      definition: String,
    },
  ],
  tags: [String],
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

const Vocab = mongoose.model('Vocab', VocabSchema);
export default Vocab;
