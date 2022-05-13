import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [{name:"Space Grotesk" , styles: [
    '400',
    '400i',
    '500',
    '600',
    '700',
    '700i',
  ],}, {name:"Rubik" , styles: [
    '400',
    '400i',
    '500',
    '600',
    '700',
    '700i',
  ],}],
  headerFontFamily: [
    "Space Grotesk",
    "sans-serif",
  ],
  bodyFontFamily: ["Rubik", "sans-serif"],
})

export default typography
