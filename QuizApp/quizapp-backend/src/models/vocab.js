import mongoose from 'mongoose';

const { Schema } = mongoose;

const VocabSchema = new Schema({
  title: String,
  explanation: String,
  creater: String,
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
});

const Vocab = mongoose.model('Vocab', VocabSchema);
export default Vocab;
