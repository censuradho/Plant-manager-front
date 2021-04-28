import React, { ReactElement, ReactNodeArray } from 'react'
import { Modal } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'

import * as Styles from './styles'

interface Data {
  title: string,
  left?: ReactElement,
  onPress?: (value?: any) => void
}

interface Props {
  data: Data[],
  onOutsideClick?: () => void,
  visible?: boolean
}

function BottomModal (props: Props) {
  const renderOptions = props.data.map((value, index) => (
    <Styles.Button 
      key={index}
      onPress={value.onPress}
      activeOpacity={.7}
    >
      {value.left}
      <Styles.ButtonText margin={!!value.left}>{value.title}</Styles.ButtonText>
    </Styles.Button>
  ))

  return (
    <Modal 
      visible={props.visible}
      transparent
      animationType="fade"
    >
      <TouchableWithoutFeedback onPress={props.onOutsideClick} style={{ flex: 1}}>
        <Styles.Overlay></Styles.Overlay>
      </TouchableWithoutFeedback>
      <Styles.Container>
        {renderOptions}
      </Styles.Container>
    </Modal>
  )
}

export default BottomModal
