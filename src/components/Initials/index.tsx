import React from 'react'

import * as Styles from './styles'

import useInitials from '../../hooks/useInitials'

interface Props {
  name?: string,
  width?: number
}

function Initials (props: Props) {
  const { initials } = useInitials(props.name)

  return (
    <Styles.Container width={props.width}>
      <Styles.Initials>{initials}</Styles.Initials>
    </Styles.Container>
  )
}

export default Initials
