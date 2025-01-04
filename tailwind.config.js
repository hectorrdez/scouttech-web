/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"];
export const safelist = [
  { pattern: /grid-rows|grid-cols|col-span|row-span-.*/ },
  { pattern: /animate-floating-.*/ },
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    keyframes: {
      "gradient-animation": {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" },
      },
      "slide-fade": {
        "0%": { transform: "translateY(20px)", opacity: "0" },
        "100%": { transform: "translateY(0px)", opacity: "1" },
      },
      "card-show-up": {
        "0%": { transform: "translateY(-100px)", opacity: "0" },
        "100%": { transform: "translateY(0px)", opacity: "1" },
      },
      floating: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-100px)" },
      },
      "floating-reverse": {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(100px)" },
      },
    },
    animation: {
      "card-show-up": "card-show-up 1s ease-in-out",
      floating: "floating 6s ease-in-out infinite",
      "floating-reverse": "floating-reverse 6s ease-in-out infinite",
      "floating-delay": "floating 6s ease-in-out infinite 2s",
      "slide-fade": "slide-fade 1s ease-in-out",
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    backgroundImage: {
      "grid-pattern":
        "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    },
    backgroundSize: {
      "grid-pattern": "40px 40px",
    },
    colors: {
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      primary: {
        DEFAULT: "#006400",
        foreground: "#f2f2f2",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      chart: {
        1: "hsl(var(--chart-1))",
        2: "hsl(var(--chart-2))",
        3: "hsl(var(--chart-3))",
        4: "hsl(var(--chart-4))",
        5: "hsl(var(--chart-5))",
      },
    },
  },
};
export const plugins = [require("tailwindcss-animate")];
