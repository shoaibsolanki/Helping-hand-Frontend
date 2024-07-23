/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fefefe",
          "200": "#030303",
          "300": "rgba(0, 0, 0, 0)",
        },
        slategray: "#446e8a",
        lightgray: "#d4d4d4",
        darkgray: "#999",
        gainsboro: "#dbdbd7",
        dimgray: {
          "100": "#787373",
          "200": "#4e504f",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "10xs": "3px",
      },
    },
    fontSize: {
      "smi-5": "12.5px",
      "7xs": "6px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      mq525: {
        raw: "screen and (max-width: 525px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
