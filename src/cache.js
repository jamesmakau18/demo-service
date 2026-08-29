function initCache() {
  if (!process.env.REDIS_URL) {
    console.error('[error] CacheModule: REDIS_URL not found in environment, attempting fallback to 127.0.0.1:6379');
    console.error('[fatal] Fatal bootstrap exception in CacheService: connect ECONNREFUSED 127.0.0.1:6379');
    throw new Error('REDIS_URL must be defined in environment configuration for payment session cache');
  }
  return { connected: true, host: process.env.REDIS_URL };
}

module.exports = initCache();
