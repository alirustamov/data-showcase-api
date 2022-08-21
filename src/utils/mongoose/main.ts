import mongoose from 'mongoose';

export const mongooseConnect = () => {
  mongoose
    .connect('mongodb://localhost:27017/virus_stats')
    .then(() => console.log('connected'))
    .catch((e) => console.log(e));
};
