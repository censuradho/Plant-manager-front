import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StatusBar } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

import Initials from '../../components/Initials'
import usePhoto from '../../hooks/usePhoto'
import useCurrentUser from '../../hooks/useCurrentUser'

import { saveUser } from '../../libs/storage'
import { setUser } from '../../store/ducks/user/actions'

import * as Styles from './styles'
import BottomModal from '../../components/BottomModal'

function Perfil () {
  const dispatch = useDispatch()
  const user = useSelector(value => value.user)

  const { image, pickLibrayImage, pickCameraImage } = usePhoto()
  const { handleChangeCurrentUser, currentUser } = useCurrentUser()

  const [isImageEdit, setIsImageEdit] = useState(false)

  useEffect(() => {
    if (image?.cancelled) return;
    if (!image?.uri) return;

    dispatch(setUser({ user_image: image?.uri }))
  }, [image])

  useEffect(() => {

    saveUser(user)
  }, [user])

  return (
    <Styles.Container>
      <Styles.PerfilImage>
        {!!user.user_image 
          ? <Styles.Image source={{ uri: user.user_image }} /> 
          : <Initials name={user.username} width={120} />
        }
        <Styles.Button onPress={() => setIsImageEdit(true)}>
          <Styles.ButtonText>Alterar foto de perfil</Styles.ButtonText>
        </Styles.Button>
      </Styles.PerfilImage>
      <BottomModal
        visible={isImageEdit}
        onOutsideClick={() => setIsImageEdit(false)}
        data={[
          { 
            title: 'Nova foto', 
            onPress: () => {
            setIsImageEdit(false)
            pickCameraImage()
            }
          },
          { 
            title: 'Importar foto', 
            onPress: () => {
              setIsImageEdit(false)
              pickLibrayImage()
            }
          },
        ]}
      />
    </Styles.Container>
  )
}

export default Perfil
