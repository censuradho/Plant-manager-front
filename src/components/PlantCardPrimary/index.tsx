import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import * as Styles from './styles'

interface Props extends RectButtonProps {
  data: {
    name: string,
    photo: string
  }
}

function PlantCardPrimary ({ data, ...props}: Props) {
  return (
    <Styles.Container {...props}>
      <Styles.Text>{data.name}</Styles.Text>
      <Styles.Image uri={data.photo} width={70} height={70} />
    </Styles.Container>
  )
}

export default PlantCardPrimary
