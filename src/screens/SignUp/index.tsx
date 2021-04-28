import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/core'

import Input from '../../components/base/TextInput'
import Button from '../../components/base/Button'

import { saveUser } from '../../libs/storage'

import { setUser } from '../../store/ducks/user/actions'

import * as Styles from './styles'

const baseFormik = {
  email: '',
  password: ''
}

function SignUp () {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const validationSchema = () => {
    const passwordMinLength = 8

    return Yup.object({
      email: Yup.string().email().required('Campo obrigatório'),
      password: Yup.string().min(passwordMinLength, `Deve conter ao menos ${passwordMinLength} caracteres`)
    })
  }

  const handleSubmit = async (values: any) => {
    const newUser = await saveUser({
      ...values,
      id: Math.floor(Math.random() * 8888).toString(),
    }) 

    dispatch(setUser(newUser))
    navigation.navigate('UserIdentification')
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
        <Styles.Title>Cadastre uma conta</Styles.Title>
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
            fill>Cadastrar</Button>
        </Styles.SubmitContainer>
      </Styles.Form>
    </Styles.Container>
  )
}

export default SignUp
