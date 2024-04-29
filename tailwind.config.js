/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./disc/**/*.html"], // Include index.html and all HTML files in the disc folder and its subfolders
  theme: {
    extend: {
      backgroundImage: {
        'main-image': "url('/img/main-image.jpg')",
        'main-image-small': "url('/img/main-image-small.jpg')",
      }
    },
  },
  plugins: [],
}
