import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
import { Alert } from 'react-native'

import Input from '../../components/base/TextInput'
import Button from '../../components/base/Button'

import { loadUsers } from '../../libs/storage'

import { setUser } from '../../store/ducks/user/actions'

import * as Styles from './styles'
import useCurrentUser from '../../hooks/useCurrentUser'

const baseFormik = {
  email: '',
  password: ''
}

function SignIn () {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { handleChangeCurrentUser } = useCurrentUser()

  const validationSchema = () => {
    const passwordMinLength = 8

    return Yup.object({
      email: Yup
        .string()
        .email('E-mail inválido.')
        .required('Campo obrigatório'),
      password: Yup
        .string()
        .min(passwordMinLength, `Deve conter ao menos ${passwordMinLength} caracteres`)
        .required('Campo obrigatório')
    })
  }

  const handleSubmit = async (values: any) => {
    try {
      const users = await loadUsers()
    
      const user = users.filter(value => value.password === formik.values.password && value.email === formik.values.email)
      
      if (user.length === 0 || !user) {
        Alert.alert('Precisa de ajuda?', `Parece que ${formik.values.email} não está associado a uma conta.`, [
          { text: 'Tentar novamente', style: 'cancel' },
          { 
            text: 'Criar uma conta', 
            style: 'destructive', 
            onPress: () => navigation.navigate('SignUp')},
        ])
      }
  
      await handleChangeCurrentUser({ 
        email: user[0].email,
        username: user[0].username,
        user_image: user[0].user_image
      })

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

  return (
    <Styles.Container>
      <Styles.Logo source={require('../../assets/favicon.png')} />
      <Styles.Form>
        <Styles.Title>Entrar com sua conta </Styles.Title>
        <Input 
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          placeholder="E-mail"
          errorText={formik.errors.email}
          isError={!!formik.errors.email && formik.touched.email}
        />
        <Input 
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          placeholder="Senha" 
          errorText={formik.errors.password}
          isError={!!formik.errors.password && formik.touched.password}
          secureTextEntry
        />
        <Styles.SubmitContainer>
          <Button
            onPress={formik.handleSubmit as (value: any) => void} 
            fill>Entrar</Button>
        </Styles.SubmitContainer>
      </Styles.Form>
      <Styles.Link onPress={() => navigation.navigate('SignUp')}>
        <Styles.LinkText>Ou cadastre-se</Styles.LinkText>
      </Styles.Link>
    </Styles.Container>
  )
}

export default SignIn
