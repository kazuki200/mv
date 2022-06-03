import { colors } from "../src/lib/style";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "white",
    values: [
      {
        name: "white",
        value: `${colors.white}`,
      },
      {
        name: "headerColor",
        value: `${colors.dark_blue}`,
      },
    ],
  },
};
