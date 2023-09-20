function getCache(cahceKey) {
  return JSON.parse(localStorage.getItem(cahceKey)) || {};
}

function saveCache(cahceKey, cacheValue) {
  localStorage.setItem(cahceKey, JSON.stringify(cacheValue));
}

function isCacheValid(cacheEntry) {
  return cacheEntry.expirationDate > new Date().getTime();
}

export { getCache, saveCache, isCacheValid };
