import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/../config.env` });

import app from './app';

const PORT = process.env.PORT || 8000;

const DB_NAME = process.env.DATABASE_NAME as string;
const DB_USER = process.env.DATABASE_USER as string;
const DB_PASSWORD = process.env.DATABASE_PASSWORD as string;
const DB_URI = process.env.DATABASE_URI as string;

const DB_CONFIG = DB_URI?.replace('<NAME>', DB_NAME)
  .replace('<USER>', DB_USER)
  .replace('<PASSWORD>', DB_PASSWORD);

(async function () {
  try {
    await mongoose.connect(DB_CONFIG);
    console.log('✅ Database Connection Enabled');

    app.listen(PORT, () => {
      console.log('✅ Server Connection Enabled');
      console.log('🎧 Listening Requests on PORT: ' + PORT + '\n💚 Have fun');
    });
  } catch (err) {
    console.log(err);
  }
})();
