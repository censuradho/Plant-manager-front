import React from 'react'
import { MaterialIcons as Icon } from '@expo/vector-icons'

import * as Styles from './styles'
import { Text } from 'react-native'
import useInitials from '../../hooks/useInitials'
import usePhoto from '../../hooks/usePhoto'
import Button from '../../components/base/Button'

function UserPhoto () {
  const { initials, getInitials } = useInitials('Gustavo')
  const { image, pickLibrayImage } = usePhoto()

  return (
    <Styles.Container>
      <Styles.User>

        {image && !image?.cancelled ? (
          <Styles.UserImage source={{ uri: image.uri }} />
        ) : (
          <Styles.UserInitials>{ initials }</Styles.UserInitials>
        )}

        <Styles.EditButton onPress={() => pickLibrayImage()}>
            <Icon name="edit" size={30} color="#fff" />
        </Styles.EditButton>
      </Styles.User>
      <Styles.Title>
        {!image  ? 'Tire uma self ou escolha uma foto sua!' : 'Ótimo! Podemos prosseguir.'}
      </Styles.Title>
      <Styles.Footer>
        <Button fill disabled={image?.cancelled || !image}>Continuar</Button>
      </Styles.Footer>
    </Styles.Container>
  )
}

export default UserPhoto
