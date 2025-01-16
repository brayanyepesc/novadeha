/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        novaviolet: "#845ec2",
        novapurple: "#d65db1",
        novapink: "#ff6f91",
        novaorange: "#ff9671",
        novamber: "#ffc75f",
        novayellow: "#f9f871"
      }
    },
  },
  plugins: [],
}
