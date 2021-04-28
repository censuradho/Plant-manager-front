import React from 'react'
import { SafeAreaView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

import { saveUser } from '../../libs/storage'

import TextInput from '../../components/base/TextInput'
import Button from '../../components/base/Button'

import { setUser } from '../../store/ducks/user/actions'

import * as Styles from './styles'
import { useNavigation } from '@react-navigation/core'

function UserIdentification () {
  const dispatch = useDispatch()
  const user = useSelector(value => value.user)

  const navigation = useNavigation()
  
  const validationSchema = Yup.object({
    name: Yup
      .string()
      .required('Campo obrigatório')
  })
  
  const handleSubmit = async () => {

    try {
      const newUser = {
        ...user,
        username: formik.values.name
       }
  
      const userSaved = await saveUser(newUser)
  
       dispatch(setUser(userSaved))
    } catch (err) {
      console.log(err)
    }

    navigation.navigate('Confirmation', {
      buttonTitleTop: 'Adicionar',
      buttonTitleBottom: 'Pular por enquanto',
      icon: 'self',
      nextScreenTop: 'UserPhoto',
      nextScreenBottom: 'PlantSelect',
      title: 'Deseja adicionar uma foto de perfil?',
    })
  }

  const formik = useFormik({
    initialValues: {
      name: ''
    },
    onSubmit: handleSubmit,
    validationSchema
  })


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView 
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Styles.Container>
          <Styles.Form>
            <Styles.Emoji>{formik.values.name.length > 0 ? '😄' : '😃'}</Styles.Emoji>
            <Styles.Answer>Como podemos {'\n'} chamar você?</Styles.Answer>
            <TextInput 
              placeholder="Digite um nome"
              value={formik.values.name}
              onChangeText={formik.handleChange('name')}
              onBlur={formik.handleBlur('name')}
              errorText={formik.errors.name}
              isError={!!formik.errors.name && formik.touched.name}
            />
            <Styles.FormFooter>
              <Button 
                onPress={formik.handleSubmit as (values: any) => void}
                fill
                disabled={formik.values.name.length === 0}
              >Confirmar</Button>
            </Styles.FormFooter>
          </Styles.Form>
          </Styles.Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default UserIdentification
