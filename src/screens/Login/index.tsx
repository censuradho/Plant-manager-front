import React, { useEffect } from 'react'
import { ImageBackground } from 'react-native'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import { loadUsers } from '../../libs/storage'

import useInitials from '../../hooks/useInitials'

import Input from '../../components/base/TextInput'
import Button from '../../components/base/Button'

import backgroundImg from '../../assets/backogrund.png'

import { setUser } from '../../store/ducks/user/actions'

import * as Styles from './styles'
import useCurrentUser from '../../hooks/useCurrentUser'

const baseFormik = {
  password: ''
}

function Login () {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { currentUser: account } = useCurrentUser()

  const  { initials, getInitials } = useInitials('Usuário')

  const validationSchema = () => {
    const passwordMinLength = 8

    return Yup.object({
      password: Yup
        .string()
        .min(passwordMinLength, `Deve conter ao menos ${passwordMinLength} caracteres`)
        .required('Campo obrigatório')
    })
  }

  const handleSubmit = async (values: any) => {
    try {
      const users = await loadUsers()
    
      const user = users.filter(value => value.password === formik.values.password && value.email === account?.email)

      console.log(users, account)
      if (user.length === 0 || !user) {
        Alert.alert('Precisa de ajuda?', `Parece que ${account?.email} não está associado a uma conta.`, [
          { text: 'Tentar novamente', style: 'cancel' },
          { 
            text: 'Criar uma conta', 
            style: 'destructive', 
            onPress: () => navigation.navigate('SignUp')},
        ])
      }

      if (!user[0].username || user[0].username.length < 2) {
        navigation.navigate('UserIdentification')
      }
  
      dispatch(setUser(user[0]))
      navigation.navigate('PlantSelect')
    } catch (err) {
      console.log(err)
    }
  }

  const formik = useFormik({
    initialValues: baseFormik,
    onSubmit: handleSubmit,
    validationSchema: validationSchema()
  })

  useEffect(() => {
    getInitials(account?.username)
  }, [account])

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground 
        source={backgroundImg} 
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <Styles.Container>
          <Styles.User>
            {!account?.user_image ? (
              <Styles.Initials>
                <Styles.InitialText>{initials}</Styles.InitialText>
              </Styles.Initials>
            ): <Styles.Image source={{ uri: account?.user_image }} /> }
            <Styles.Username>{account?.username || 'Usuário'}</Styles.Username>
          </Styles.User>
          <Styles.Form>
            <Input 
              value={formik.values.password}
              onChangeText={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
              placeholder="Senha" 
              errorText={formik.errors.password}
              isError={!!formik.errors.password && formik.touched.password}
              secureTextEntry
            />
            <Button 
              fill
              onPress={formik.handleSubmit as (value: any) => void}
            >Entrar</Button>
          </Styles.Form>
        </Styles.Container>
      </ImageBackground>
    </TouchableWithoutFeedback>
  )
}

export default Login
