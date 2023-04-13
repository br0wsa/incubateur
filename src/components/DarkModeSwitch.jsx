import React, { useContext } from "react";
import { useProvider, ActionButton } from "@adobe/react-spectrum";
import Light from "@spectrum-icons/workflow/Light";
import Moon from "@spectrum-icons/workflow/Moon";
import { THEMES } from "../domain/store/provider/states";

// React Context
import { ThemeContext } from "../domain/store/provider/contexts";

function DarkModeSwitch() {
  const { colorScheme } = useProvider();
  const { theme, setTheme } = useContext(ThemeContext);

  const LIGHT_THEME = THEMES.light;
  const DARK_THEME = THEMES.dark;

  const toggleTheme = () => {
    setTheme(colorScheme && theme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
  };

  const ariaLabel = `Changer vers le thème ${
    colorScheme === DARK_THEME ? "clair" : "sombre"
  }`;

  const icon =
    colorScheme === DARK_THEME ? (
      <Moon aria-label="En thème sombre" />
    ) : (
      <Light aria-label="En thème clair" />
    );

  return (
    <>
      <ActionButton
        position="fixed"
        bottom="size-1000"
        right="size-500"
        zIndex="7"
        onPress={toggleTheme}
        aria-label={ariaLabel}
      >
        {icon}
      </ActionButton>
    </>
  );
}

export default DarkModeSwitch;
