import React, { useEffect } from 'react'
import { MaterialIcons as Icon } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'


import useInitials from '../../hooks/useInitials'
import usePhoto from '../../hooks/usePhoto'
import Button from '../../components/base/Button'

import { saveUser, loadUsers } from '../../libs/storage'

import * as Styles from './styles'
import { setUser } from '../../store/ducks/user/actions'
import { useNavigation } from '@react-navigation/core'

function UserPhoto () {
  const dispatch = useDispatch()
  const user = useSelector(value => value.user)
  const navigation = useNavigation()

  const { initials, getInitials } = useInitials('Seu nome')
  const { image, pickLibrayImage } = usePhoto()

  const handleNext = () => {
    if (!image?.cancelled && image) {
    saveUser({ ...user, user_image: image?.uri  })
    dispatch(setUser({ user_image: image?.uri }))
    }
    navigation.navigate('PlantSelect')
  }

  useEffect(() => {
    getInitials(user.username)
  }, [user.username])


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
        <Button 
          fill 
          disabled={image?.cancelled || !image}
          onPress={handleNext}
        >Continuar</Button>
      </Styles.Footer>
    </Styles.Container>
  )
}

export default UserPhoto
