import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [{name:"Space Grotesk" , styles: [
    '400',
    '400i',
    '700',
    '700i',
  ],}, {name:"Alegreya Sans" , styles: [
    '400',
    '400i',
    '700',
    '700i',
  ],}],
  headerFontFamily: [
    "Space Grotesk",
    "sans-serif",
  ],
  bodyFontFamily: ["Alegreya Sans", "serif"],
})

export default typography
