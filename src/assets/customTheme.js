import { defaultTheme } from "@adobe/react-spectrum";

const customTheme = {
  ...defaultTheme,
  fontFamilies: {
    ...defaultTheme.fontFamilies,
    OpenDyslexic: "'OpenDyslexic', sans-serif !important",
    OpenDyslexic3: "'OpenDyslexic3', sans-serif !important",
    OpenDyslexicAlta: "'OpenDyslexicAlta', sans-serif !important",
    OpenDyslexicMono: "'OpenDyslexicMono', sans-serif !important",
  },
  body: {
    ...defaultTheme.body,
    fontFamily: "'OpenDyslexic', sans-serif !important",
  },
};

export { customTheme };
