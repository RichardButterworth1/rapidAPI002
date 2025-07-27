import dotenv from 'dotenv';
dotenv.config();

export const config = {
  rapidapi: {
    key: process.env.RAPIDAPI_KEY,
    host: process.env.RAPIDAPI_HOST,
    baseUrl: `https://${process.env.RAPIDAPI_HOST}`
  },
  server: {
    port: process.env.PORT || 3000
  }
};
