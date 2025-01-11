import type { Cache } from 'cache-manager';
import { caching } from 'cache-manager';

let cacheManager: Cache | null = null;

export async function getCache(): Promise<Cache> {
  if (!cacheManager) {
    cacheManager = await caching('memory', {
      max: 100, // Maximum number of items in cache
      ttl: 3600000, // Time to live in milliseconds (1 hour)
    });
  }
  return cacheManager;
}
