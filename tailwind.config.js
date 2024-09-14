/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero' : "[url('./src/assets/pexels-saad-alawi-123396395-9986256 (1).jpg')]"
      }
      
    },
  },
  plugins: [],
}

