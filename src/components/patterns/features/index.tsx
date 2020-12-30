import React from "react"
import { Feature } from "@src/components"
import { IFeature } from "@src/@interfaces"

interface IProps {
  data: IFeature[]
}
const isEven = (num: number): boolean => {
  return num % 2 === 0
}

const Features: React.FC<IProps> = ({ data }) => {
  const displayFeatures =
    data !== undefined
      ? data.map((feature: IFeature, index: number) => {
          return (
            <Feature
              caption={feature.caption}
              featureImage={feature.featureImage}
              headline={feature.headline}
              content={feature.content}
              reverseGridItemsOrder={!isEven(index)}
            />
          )
        })
      : ""

  return <>{displayFeatures}</>
}

export default Features
