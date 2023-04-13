import { useTheme, useAuth, useStatus } from "./hooks";
import { expect } from "vitest";

test("useTheme returns initial theme as light", () => {
  const { result } = expect(() => useTheme());
  expect(result.current.theme).toBe("light");
});

test("useTheme setTheme changes the theme", () => {
  const { result } = expect(() => useTheme());
  result.current.setTheme("dark");
  expect(result.current.theme).toBe("dark");
});
