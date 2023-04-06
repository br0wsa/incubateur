// customTheme.js
import { defaultTheme } from "@adobe/react-spectrum";

const customTheme = {
  ...defaultTheme,
  fonts: {
    ...defaultTheme.fonts,
    sans: "OpenDyslexic-Regular",
  },
  fontFamilies: {
    ...defaultTheme.fontFamilies,
    sans: "OpenDyslexic-Regular",
    OpenDyslexic:
      "url('./fonts/open-dyslexic/OpenDyslexic-Regular.otf') format('opentype')",
  },
};

export { customTheme };
