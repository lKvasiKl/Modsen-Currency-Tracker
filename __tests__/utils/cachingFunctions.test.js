import {
  getCache,
  saveCache,
  removeCache,
  isCacheValid,
} from "@utils/cachingFunctions";

beforeAll(() => {
  localStorage.clear();
});

describe("getCache", () => {
  it("should return an empty object for a non-existent key", () => {
    const cacheKey = "nonexistentKey";
    const cacheValue = getCache(cacheKey);
    expect(cacheValue).toEqual({});
  });

  it("should return the saved value from the cache", () => {
    const cacheKey = "existingKey";
    const cachedData = { data: "cachedData" };
    localStorage.setItem(cacheKey, JSON.stringify(cachedData));
    const cacheValue = getCache(cacheKey);
    expect(cacheValue).toEqual(cachedData);
  });
});

describe("saveCache", () => {
  it("should save a value in the cache", () => {
    const cacheKey = "newKey";
    const cacheValue = { data: "cachedData" };
    saveCache(cacheKey, cacheValue);
    const cachedData = localStorage.getItem(cacheKey);
    expect(JSON.parse(cachedData)).toEqual(cacheValue);
  });
});

describe("removeCache", () => {
  it("should remove a value from the cache", () => {
    const cacheKey = "keyToDelete";
    const cacheValue = { data: "cachedData" };
    localStorage.setItem(cacheKey, JSON.stringify(cacheValue));
    removeCache(cacheKey);
    const cachedData = localStorage.getItem(cacheKey);
    expect(cachedData).toBeNull();
  });
});

describe("isCacheValid", () => {
  const CACHE_LIFETIME = 86400000;

  it("should return true for a valid cache", () => {
    const cacheEntry = {
      expirationDate: new Date().getTime() + CACHE_LIFETIME,
    };
    const isValid = isCacheValid(cacheEntry);
    expect(isValid).toBe(true);
  });

  it("should return false for an expired cache", () => {
    const cacheEntry = {
      expirationDate: new Date().getTime() - CACHE_LIFETIME,
    };
    const isValid = isCacheValid(cacheEntry);
    expect(isValid).toBe(false);
  });
});

afterAll(() => {
  localStorage.clear();
});
