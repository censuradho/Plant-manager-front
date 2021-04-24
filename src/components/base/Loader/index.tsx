import React from 'react'

import * as Styles from './styles'

import animation from '../../../assets/load.json'

function Loader () {
  return (
    <Styles.Container>
      <Styles.Lotti source={animation} autoPlay loop />
    </Styles.Container>
  )
}

export default Loader
