import { cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";

// after each run it clears the dom
afterEach(() => {
  cleanup();
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});