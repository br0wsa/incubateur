import { test, expect } from "vitest";

import { ThemeContext, AuthContext, StatusContext } from "./contexts";

test("Les contextes sont créés", () => {
  expect(ThemeContext).toBeDefined();
  expect(AuthContext).toBeDefined();
  expect(StatusContext).toBeDefined();
});
