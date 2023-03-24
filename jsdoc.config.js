module.exports = {
  source: {
    include: ["src"],
    exclude: ["src/main.jsx"],
  },
  opts: {
    destination: "docs",
    recurse: true,
  },
  plugins: ["plugins/markdown"],
  markdown: {
    idInHeadings: true,
  },
  templates: {
    cleverLinks: false,
    monospaceLinks: false,
    default: {
      outputSourceFiles: true,
    },
  },
};
