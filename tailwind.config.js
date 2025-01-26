/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#e0e0e0", // Light grey for borders
        input: "#f5f5f5", // Light grey for inputs
        ring: "#4CAF50", // Green for focus rings
        background: "#f0f0f0", // Light background
        foreground: "#333", // Dark text color
        primary: {
          DEFAULT: "#3498db", // Primary blue color
          foreground: "#fff", // White text on primary
        },
        secondary: {
          DEFAULT: "#2ecc71", // Secondary green color
          foreground: "#fff", // White text on secondary
        },
        destructive: {
          DEFAULT: "#e74c3c", // Red for destructive actions
          foreground: "#fff", // White text on destructive
        },
        muted: {
          DEFAULT: "#bdc3c7", // Muted grey
          foreground: "#7f8c8d", // Darker grey for muted text
        },
        accent: {
          DEFAULT: "#9b59b6", // Purple accent
          foreground: "#fff", // White text on accent
        },
        popover: {
          DEFAULT: "#ecf0f1", // Light popover background
          foreground: "#2c3e50", // Dark text in popover
        },
        card: {
          DEFAULT: "#fff", // White card background
          foreground: "#2c3e50", // Dark text in cards
        },
      },
      borderRadius: {
        lg: "0.5rem", // Rounded corners with 0.5rem
        md: "0.375rem", // Medium rounded corners
        sm: "0.25rem", // Small rounded corners
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
