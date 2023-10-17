function getCache(cahceKey) {
  return JSON.parse(localStorage.getItem(cahceKey)) || {};
}

function saveCache(cahceKey, cacheValue) {
  localStorage.setItem(cahceKey, JSON.stringify(cacheValue));
}

function removeCache(cacheKey) {
  localStorage.removeItem(cacheKey);
}

function isCacheValid(cacheEntry) {
  return cacheEntry.expirationDate > new Date().getTime();
}

export { getCache, saveCache, removeCache, isCacheValid };
