import { describe, expect, test, vi } from "vitest";
import {
  THEMES,
  AUTH_DEFAULT,
  STATUS_DEFAULT,
  AUTH_ACTION,
  STATUS_ACTIONS,
  AUTH,
  STATUS,
} from "./states";

describe("Valeurs par défaut", () => {
  // Test pour vérifier les valeurs par défaut des thèmes
  test("L'objet THEMES devrait avoir les valeurs par défaut correctes", () => {
    expect(THEMES).toMatchObject({
      light: "light",
      dark: "dark",
    });
  });

  // Test pour vérifier les valeurs par défaut de l'objet AUTH_DEFAULT
  test("L'objet AUTH_DEFAULT devrait avoir les propriétés et valeurs par défaut correctes", () => {
    expect(AUTH_DEFAULT).toMatchObject({
      isAuthenticated: false,
    });
  });

  // Test pour vérifier les valeurs par défaut de l'objet STATUS_DEFAULT
  test("L'objet STATUS_DEFAULT devrait avoir les propriétés et valeurs par défaut correctes", () => {
    expect(STATUS_DEFAULT).toMatchObject({
      admin: false,
      softBanned: false,
      user: true,
    });
  });
});

// DEFAULT ACTIONS
describe("AUTH_ACTION", () => {
  const setIsAuthenticated = vi.fn();

  test("function login returned function login", () => {
    expect(AUTH_ACTION.login).toBeTypeOf("function");
  });
  test("function logout returned function logout", () => {
    expect(AUTH_ACTION.logout).toBeTypeOf("function");
  });

  test("spy function", () => {
    vi.spyOn(AUTH_ACTION, "login").mockImplementation(() => {
      AUTH_ACTION.login();
      expect(setIsAuthenticated).toHaveBeenCalledWith(true);
    });
  });
  test("spy function", () => {
    vi.spyOn(AUTH_ACTION, "logout").mockImplementation(() => {
      AUTH_ACTION.logout();
      expect(setIsAuthenticated).toHaveBeenCalledWith(false);
    });
  });
});

describe("STATUS_ACTIONS", () => {
  describe("toggleAdmin", () => {
    test("should toggle a user into an admin and update user property accordingly", () => {
      const oldStatus = { admin: false, softBanned: false, user: true };
      const newStatus = STATUS_ACTIONS.toggleAdmin(oldStatus);

      expect(newStatus.admin).toBe(true);
      expect(newStatus.softBanned).toBe(false);
      expect(newStatus.user).toBe(false);
    });
  });

  describe("toggleSoftBanned", () => {
    test("should toggle the softBanned status of a user and update user and admin properties accordingly", () => {
      const oldStatus = { admin: false, softBanned: false, user: true };
      const newStatus = STATUS_ACTIONS.toggleSoftBanned(oldStatus);

      expect(newStatus.admin).toBe(false);
      expect(newStatus.softBanned).toBe(true);
      expect(newStatus.user).toBe(false);
    });
  });

  describe("toggleUser", () => {
    test("should toggle a user into a normal user and update admin and softBanned properties accordingly", () => {
      const oldStatus = { admin: true, softBanned: false, user: false };
      const newStatus = STATUS_ACTIONS.toggleUser(oldStatus);

      expect(newStatus.admin).toBe(false);
      expect(newStatus.softBanned).toBe(false);
      expect(newStatus.user).toBe(true);
    });
  });
});

// CHECK AUTH && STATUS PROPERTIES
describe("Les propriétés de AUTH et STATUS", () => {
  test("AUTH a les propriétés login, logout et isAuthenticated", () => {
    expect(AUTH).toHaveProperty("login");
    expect(AUTH).toHaveProperty("logout");
    expect(AUTH).toHaveProperty("isAuthenticated");
  });

  test("STATUS a les propriétés toggleAdmin, toggleSoftBanned, toggleUser, admin, softBanned et user", () => {
    expect(STATUS).toHaveProperty("toggleAdmin");
    expect(STATUS).toHaveProperty("toggleSoftBanned");
    expect(STATUS).toHaveProperty("toggleUser");
    expect(STATUS).toHaveProperty("admin");
    expect(STATUS).toHaveProperty("softBanned");
    expect(STATUS).toHaveProperty("user");
  });
});
