import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
  sessionStorage.clear();
});

// Mock sessionStorage

interface iStore {
  [key: string]: string;
}

const sessionStorageMock = (function () {
  let store: iStore = {};

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key: string) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, 'sessionStorage', { value: sessionStorageMock });
