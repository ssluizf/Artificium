/** @type {import('tailwindcss').Config} */
let plugin = require("tailwindcss/plugin")

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      "plus-jakarta-sans": ["var(--font-plus-jakarta-sans)"],
    },
    backgroundImage: {
      "glass-fill":
        "linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)",
      "green-blue-day-blue-600":
        "linear-gradient(225deg, #3045C9 0%, #65BEDA 45.31%, #9AD37F 100%)",
      "day-blue-blue-green-600":
        "linear-gradient(45deg, #3045C9 0%, #65BEDA 45.31%, #9AD37F 100%)",
      "green-blue-day-blue-500":
        "linear-gradient(225deg, #4D62E5 0%, #87DDEE 45.31%, #B6F09C 100%)",
      "day-blue-blue-green-500":
        "linear-gradient(45deg, #4D62E5 0%, #87DDEE 45.31%, #B6F09C 100%)",
      "green-blue-500": "linear-gradient(225deg, #82DBF7 0%, #B6F09C 100%)",
      "blue-green-500": "linear-gradient(45deg, #82DBF7 0%, #B6F09C 100%)",
    },
    boxShadow: {
      "glass-effects":
        "0px 24px 24px -16px rgba(0, 0, 0, 0.12), inset 16px 24px 64px -24px rgba(255, 255, 255, 0.08), inset 0px 8px 12px rgba(255, 255, 255, 0.08)",
      "outline-noble-black": "0px 0px 0px 4px rgba(54, 58, 61, 0.24)",
      "outline-heisenberg-blue": "0px 0px 0px 4px rgba(132, 220, 245, 0.24)",
      "outline-red-power": "0px 0px 0px 4px rgba(208, 48, 47, 0.24)",
      "outline-happy-orange": "0px 0px 0px 4px rgba(226, 111, 32, 0.24)",
      "outline-eletric-green": "0px 0px 0px 4px rgba(74, 201, 126, 0.24)",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "noble-black": {
        100: "#E8E9E9",
        200: "#CDCECF",
        300: "#9B9C9E",
        400: "#686B6E",
        500: "#363A3D",
        600: "#1A1D21",
        700: "#131619",
        800: "#0D0F10",
        900: "#060708",
        0: "#FFFFFF",
      },
      "day-blue": {
        100: "#EBEDFC",
        200: "#D2D8F9",
        300: "#A6B0F2",
        400: "#7989EC",
        500: "#4D62E5",
        600: "#3045C9",
        700: "#243497",
        800: "#182364",
        900: "#0C1132",
      },
      "stem-green": {
        100: "#F7FDF4",
        200: "#EDFBE6",
        300: "#DBF7CD",
        400: "#C8F4B4",
        500: "#B6F09C",
        600: "#9AD37F",
        700: "#739F5F",
        800: "#4D6A3F",
        900: "#263520",
      },
      "heisenberg-blue": {
        100: "#F1FBFE",
        200: "#E0F6FD",
        300: "#C0EDFB",
        400: "#A1E4F9",
        500: "#82DBF7",
        600: "#65BEDA",
        700: "#4C8FA4",
        800: "#335F6D",
        900: "#193037",
      },
      "purple-blue": {
        100: "#F0E8FD",
        200: "#DECCFB",
        300: "#BD9AF8",
        400: "#9C67F4",
        500: "#7C35F1",
        600: "#5F18D4",
        700: "#47129F",
        800: "#300C6A",
        900: "#180635",
      },
      sunglow: {
        100: "#FFFAEA",
        200: "#FFF3D1",
        300: "#FFE8A3",
        400: "#FFDC75",
        500: "#FFD147",
        600: "#E2B42B",
        700: "#AA8720",
        800: "#715A15",
        900: "#392D0B",
      },
      "happy-orange": {
        900: "#391C08",
        600: "#E26F20",
        100: "#FFF2E9",
      },
      "electric-green": {
        900: "#122B1D",
        600: "#4AC97E",
        100: "#F3FBF7",
      },
      "red-power": {
        900: "#2F0F0E",
        600: "#D0302F",
        100: "#FBECEC",
      },
      "glass-stroke": "rgba(255, 255, 255, 0.08)",
      "glass-modal": "rgba(26, 29, 33, 0.96)",
    },
    fontSize: {
      inherit: "inherit",
      "heading-xxl-bold": [
        "48px",
        {
          lineHeight: "68px",
          letterSpacing: "0px",
          fontWeight: 700,
        },
      ],
      "heading-xxl-semibold": [
        "48px",
        {
          lineHeight: "68px",
          letterSpacing: "0px",
          fontWeight: 600,
        },
      ],
      "heading-xxl-medium": [
        "48px",
        {
          lineHeight: "68px",
          letterSpacing: "0px",
          fontWeight: 500,
        },
      ],
      "heading-xxl-regular": [
        "48px",
        {
          lineHeight: "68px",
          letterSpacing: "0px",
          fontWeight: 400,
        },
      ],
      "heading-xl-regular": [
        "36px",
        {
          lineHeight: "44px",
          letterSpacing: "0px",
          fontWeight: 400,
        },
      ],
      "heading-xl-medium": [
        "36px",
        {
          lineHeight: "44px",
          letterSpacing: "0px",
          fontWeight: 500,
        },
      ],
      "heading-xl-semibold": [
        "36px",
        {
          lineHeight: "44px",
          letterSpacing: "0px",
          fontWeight: 600,
        },
      ],
      "heading-xl-bold": [
        "36px",
        {
          lineHeight: "44px",
          letterSpacing: "0px",
          fontWeight: 700,
        },
      ],
      "heading-l-regular": [
        "32px",
        {
          lineHeight: "40px",
          letterSpacing: "0px",
          fontWeight: 400,
        },
      ],
      "heading-l-medium": [
        "32px",
        {
          lineHeight: "40px",
          letterSpacing: "0px",
          fontWeight: 500,
        },
      ],
      "heading-l-semibold": [
        "32px",
        {
          lineHeight: "40px",
          letterSpacing: "0px",
          fontWeight: 600,
        },
      ],
      "heading-l-bold": [
        "32px",
        {
          lineHeight: "40px",
          letterSpacing: "0px",
          fontWeight: 700,
        },
      ],
      "heading-m-regular": [
        "28px",
        {
          lineHeight: "36px",
          letterSpacing: "0px",
          fontWeight: 400,
        },
      ],
      "heading-m-medium": [
        "28px",
        {
          lineHeight: "36px",
          letterSpacing: "0px",
          fontWeight: 500,
        },
      ],
      "heading-m-semibold": [
        "28px",
        {
          lineHeight: "36px",
          letterSpacing: "0px",
          fontWeight: 600,
        },
      ],
      "heading-m-bold": [
        "28px",
        {
          lineHeight: "36px",
          letterSpacing: "0px",
          fontWeight: 700,
        },
      ],
      "heading-s-regular": [
        "24px",
        {
          lineHeight: "32px",
          letterSpacing: "0px",
          fontWeight: 400,
        },
      ],
      "heading-s-medium": [
        "24px",
        {
          lineHeight: "32px",
          letterSpacing: "0px",
          fontWeight: 500,
        },
      ],
      "heading-s-semibold": [
        "24px",
        {
          lineHeight: "32px",
          letterSpacing: "0px",
          fontWeight: 600,
        },
      ],
      "heading-s-bold": [
        "24px",
        {
          lineHeight: "32px",
          letterSpacing: "0px",
          fontWeight: 700,
        },
      ],
      "heading-xs-regular": [
        "20px",
        {
          lineHeight: "32px",
          letterSpacing: "0px",
          fontWeight: 400,
        },
      ],
      "heading-xs-medium": [
        "20px",
        {
          lineHeight: "32px",
          letterSpacing: "0px",
          fontWeight: 500,
        },
      ],
      "heading-xs-semibold": [
        "20px",
        {
          lineHeight: "32px",
          letterSpacing: "0px",
          fontWeight: 600,
        },
      ],
      "heading-xs-bold": [
        "20px",
        {
          lineHeight: "32px",
          letterSpacing: "0px",
          fontWeight: 700,
        },
      ],
      "body-xl-regular": [
        "18px",
        {
          lineHeight: "28px",
          letterSpacing: "0.15000000596046448px",
          fontWeight: 400,
        },
      ],
      "body-xl-medium": [
        "18px",
        {
          lineHeight: "28px",
          letterSpacing: "0.15000000596046448px",
          fontWeight: 500,
        },
      ],
      "body-xl-semibold": [
        "18px",
        {
          lineHeight: "28px",
          letterSpacing: "0.15000000596046448px",
          fontWeight: 600,
        },
      ],
      "body-l-regular": [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "0.15000000596046448px",
          fontWeight: 400,
        },
      ],
      "body-l-medium": [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "0.15000000596046448px",
          fontWeight: 500,
        },
      ],
      "body-l-semibold": [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "0.15000000596046448px",
          fontWeight: 600,
        },
      ],
      "body-m-regular": [
        "14px",
        {
          lineHeight: "20px",
          letterSpacing: "0.15000000596046448px",
          fontWeight: 400,
        },
      ],
      "body-m-medium": [
        "14px",
        {
          lineHeight: "20px",
          letterSpacing: "0.15000000596046448px",
          fontWeight: 500,
        },
      ],
      "body-m-semibold": [
        "14px",
        {
          lineHeight: "20px",
          letterSpacing: "0.15000000596046448px",
          fontWeight: 600,
        },
      ],
      "body-s-regular": [
        "12px",
        {
          lineHeight: "18px",
          letterSpacing: "0.15000000596046448px",
          fontWeight: 400,
        },
      ],
      "body-s-medium": [
        "12px",
        {
          lineHeight: "18px",
          letterSpacing: "0.15000000596046448px",
          fontWeight: 500,
        },
      ],
      "body-s-semibold": [
        "12px",
        {
          lineHeight: "18px",
          letterSpacing: "0.15000000596046448px",
          fontWeight: 600,
        },
      ],
    },
    container: {
      center: true,
      screens: {
        "2xl": "1536px",
      },
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ matchVariant, theme }) {
      matchVariant(
        "nth",
        (value) => {
          return `&:nth-child(${value})`
        },
        {
          values: {
            DEFAULT: "n",
            "2n": "2n",
            "3n": "3n",
            "4n": "4n",
          },
        }
      )
    }),
  ],
}
