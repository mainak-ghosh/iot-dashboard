module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        screen4xl: "2048px",
      },
      minWidth: {
        bigBox: "300px",
      },
      minHeight: {
        bigBox: "400px",
      },
      maxHeight: {
        400: "400px",
        bigBox: "550px",
      },
      colors: {
        white: {
          DEFAULT: "var(--color-lighttheme-white)",
          shadow: "var(--color-lighttheme-white-shadow)",
          textLt: "var(--color-lighttheme-text-light)",
          textDt: "var(--color-darktheme-text-light)",
        },
        accent: {
          light: "var(--color-lighttheme-accent-light)",
          lightShadow: "var(--color-lighttheme-accent-light-shadow)",
          lighter: "var(--color-lighttheme-accent-lighter)",
          lighterShadow: "var(--color-lighttheme-accent-lighter-shadow)",
          DEFAULT: "var(--color-lighttheme-accent)",
          shadow: "--color-lighttheme-accent-shadow",
        },
        black: {
          light: "var(--color-darktheme-black-light)",
          lightShadow: "var(--color-darktheme-black-light-shadow)",
          lighter: "var(--color-darktheme-black-lighter)",
          lighterShadow: "var(--color-darktheme-black-lighter-shadow)",
          DEFALUT: "var(--color-darktheme-black)",
          shadow: "var(--color-darktheme-black-shadow)",
          textLt: "var(--color-lighttheme-text-dark)",
          textDt: "var(--color-darktheme-text-dark)",
        },
        red: {
          DEFAULT: "var(--color-macstyle-btn-red)",
        },
        green: {
          DEFAULT: "var(--color-macstyle-btn-green)",
        },
        yellow: {
          DEFAULT: "var(--color-macstyle-btn-yellow)",
          chartbg: "#FFEFE2",
        },
        grey: {
          DEFAULT: "#F8F8F8",
        },
        blue: {
          DEFAULT: "#86B2F4",
          antarticBlue: "#2B3F5C",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
