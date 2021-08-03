module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: {
      primary: "#252433",
      secondary: "#4F4E60",
      tertiary: "#FD670E",
      danger: "#e54e43",
    },
  },
  variants: {
    extend: {
      margin: ["last"],
      borderWidth: ["last"],
      translate: ["group-hover", "group-focus", "focus"],
      animation: ["hover, focus"],
      visibility: ["group-hover"],
    },
    display: ["children"],
    width: ["children"],
    height: ["children"],
    backgroundColor: ["children"],
    borderRadius: ["children"],
    margin: ["children"],
    padding: ["children"],
    borderWidth: ["children"],
    borderColor: ["children"],
    fontSize: ["children"],
    inset: ["children"],
    cursor: ["children"],
    textColor: ["children"],
    fontWeight: ["children"],
    objectFit: ["children"],
    justifyContent: ["children"],
    alignItems: ["children"],
    textDecoration: ["children"],
  },
  plugins: [require("tailwindcss-children")],
  important: true,
};
