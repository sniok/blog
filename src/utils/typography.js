import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
import "./code.css"

const headerStyle = {
  fontWeight: 600,
}

Wordpress2016.overrideThemeStyles = () => {
  return {
    h5: headerStyle,
    h4: headerStyle,
    h3: headerStyle,
    h2: headerStyle,
    h1: headerStyle,
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

Wordpress2016.headerFontFamily = ["Montserrat", "Georgia", "serif"]
Wordpress2016.bodyFontFamily = ["Open Sans", "Georgia", "serif"]

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
