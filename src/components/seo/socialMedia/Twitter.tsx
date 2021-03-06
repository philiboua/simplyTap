import React from "react"
import { Helmet } from "react-helmet"
import { ITwitter } from "@src/@interfaces"

const Twitter: React.FC<ITwitter> = ({
  type,
  username,
  title,
  desc,
  image,
}) => (
  <Helmet>
    {username && <meta name="twitter:creator" content={username} />}
    {type && <meta name="twitter:card" content={type} />}
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={desc} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:image:alt" content={desc} />
  </Helmet>
)

export default Twitter
