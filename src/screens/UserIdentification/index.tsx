import React, { useEffect, useState } from 'react'
import { SafeAreaView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useFormik, Formik } from 'formik'
import * as Yup from 'yup'
import AsyncStorage  from '@react-native-async-storage/async-storage'

import TextInput from '../../components/base/TextInput'
import Button from '../../components/base/Button'

import * as Styles from './styles'
import { useNavigation } from '@react-navigation/core'

function UserIdentification () {
  const navigation = useNavigation()
  
  const validationSchema = Yup.object({
    name: Yup
      .string()
      .required('Campo obrigatório')
  })
  const handleSubmit = async () => {

    await AsyncStorage.setItem('@platmanager:user', JSON.stringify({ username: formik.values.name }))

    navigation.navigate('Confirmation', {
      buttonTitle: 'Começar',
      icon: 'smile',
      nextScreen: 'PlantSelect',
      title: 'Prontinho',
      subtitle: ' Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
