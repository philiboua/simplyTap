import React from "react"
import { Global, css } from "@emotion/react"

const GlobalCSS = ({ children }) => {
  return (
    <div>
      <Global
        styles={css`
          @import url("https://diatom-assets.s3.ca-central-1.amazonaws.com/GT.css?display=swap");
          body {
            font-family: GT Walsheim Pro;
          }
        `}
      />
      {children}
    </div>
  )
}

export default GlobalCSS
