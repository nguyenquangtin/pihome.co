import React from "react"
import Layout from "./src/components/Layout"
// import "./src/assets/scss/bootstrap.scss"
// import "./node_modules/slick-carousel/slick/slick.css";
// import "./src/assets/scss/main.scss"
// import "./src/assets/scss/react-scss.scss"
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
