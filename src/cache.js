const Redis = require('ioredis');

if (!process.env.REDIS_URL) {
  console.error('[fatal] CacheModule: REDIS_URL environment variable is not defined in environment!');
  console.error('[fatal] Fatal bootstrap exception: unable to connect to Redis cache cluster.');
  throw new Error('REDIS_URL must be configured in environment');
}

const redis = new Redis(process.env.REDIS_URL);
module.exports = redis;
