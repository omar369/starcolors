import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

// que chingados quiere decir que se tipifique correctamente el plugin??? que mierda?
const addVariablesForColors = plugin(function ({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
});

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      // fontFamily: {
			// themed
			// otro pedo 
    },
  },
  plugins: [addVariablesForColors],
};

export default config;

