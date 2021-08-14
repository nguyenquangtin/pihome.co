import React from "react"
import { default as Layout } from "./src/components/Layout"
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
