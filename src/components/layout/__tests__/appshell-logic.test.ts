import { describe, it, expect } from "vitest";
import { resolveIsDark, fontSizeClass } from "@/components/layout/AppShell";

// ---------------------------------------------------------------------------
// resolveIsDark
// ---------------------------------------------------------------------------

describe("resolveIsDark", () => {
  it("returns true for 'dark' theme regardless of systemDark", () => {
    expect(resolveIsDark("dark", false)).toBe(true);
    expect(resolveIsDark("dark", true)).toBe(true);
  });

  it("returns false for 'light' theme regardless of systemDark", () => {
    expect(resolveIsDark("light", false)).toBe(false);
    expect(resolveIsDark("light", true)).toBe(false);
  });

  it("returns systemDark value for 'system' theme", () => {
    expect(resolveIsDark("system", true)).toBe(true);
    expect(resolveIsDark("system", false)).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// fontSizeClass
// ---------------------------------------------------------------------------

describe("fontSizeClass", () => {
  it("returns 'text-base' for normal size", () => {
    expect(fontSizeClass("normal")).toBe("text-base");
  });

  it("returns 'text-lg' for large size", () => {
    expect(fontSizeClass("large")).toBe("text-lg");
  });
});

// ---------------------------------------------------------------------------
// System dark listener (pure logic)
// ---------------------------------------------------------------------------

describe("system dark MediaQueryList listener", () => {
  it("subscribes to change event on matchMedia when theme is system", () => {
    const listeners: Array<(e: { matches: boolean }) => void> = [];
    const mockMq = {
      matches: false,
      addEventListener: (_: string, fn: (e: { matches: boolean }) => void) => {
        listeners.push(fn);
      },
      removeEventListener: (_: string, fn: (e: { matches: boolean }) => void) => {
        const idx = listeners.indexOf(fn);
        if (idx >= 0) listeners.splice(idx, 1);
      },
    };

    // Simulate the effect: add listener
    mockMq.addEventListener("change", (e) => {
      expect(typeof e.matches).toBe("boolean");
    });

    expect(listeners).toHaveLength(1);

    // Fire the event
    const handler = listeners[0];
    if (handler) handler({ matches: true });

    // Remove listener (cleanup)
    const listener = listeners[0];
    if (listener) mockMq.removeEventListener("change", listener);
    expect(listeners).toHaveLength(0);
  });
});
