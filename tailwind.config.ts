import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        serif: ["DM Serif Display", "Georgia", "serif"],
      },
      fontSize: {
        // Typography scale for medical content
        'display': ['3rem', { lineHeight: '1.1', fontWeight: '600' }],     // 48px
        'h1': ['2.625rem', { lineHeight: '1.15', fontWeight: '600' }],     // 42px
        'h2': ['2rem', { lineHeight: '1.2', fontWeight: '600' }],          // 32px
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '500' }],        // 24px
        'body': ['1.0625rem', { lineHeight: '1.6', fontWeight: '400' }],   // 17px
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px
        'cta': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],     // 18px
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        ekg: {
          blue: "hsl(var(--ekg-blue))",
          "blue-light": "hsl(var(--ekg-blue-light))",
          red: "hsl(var(--ekg-red))",
          green: "hsl(var(--ekg-green))",
          amber: "hsl(var(--ekg-amber))",
          navy: "hsl(var(--ekg-navy))",
        },
      },
      spacing: {
        // Section spacing
        'section': '7.5rem',      // 120px
        'section-lg': '9.375rem', // 150px
        '18': '4.5rem',           // 72px
        '22': '5.5rem',           // 88px
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        'card': '10px',
        'button': '8px',
      },
      boxShadow: {
        'card': '0 2px 8px -2px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 24px -4px rgba(0, 0, 0, 0.12)',
        'button': '0 2px 4px -1px rgba(31, 111, 235, 0.2)',
        'button-hover': '0 4px 8px -2px rgba(31, 111, 235, 0.3)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;