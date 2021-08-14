import React from "react"

import {Link} from "gatsby"

const LinkComponent = ({children,...rest}) => {
  return <>
    <Link {...rest}>
        {children}
    </Link>
  </>
}

export default LinkComponent
