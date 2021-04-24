import { format } from 'date-fns'
import React from 'react'
import { Animated, View } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { Feather } from '@expo/vector-icons'

import * as Styles from './styles'
import useTheme from '../../hooks/useTheme'

interface Props extends RectButtonProps {
  data: {
    name: string,
    photo: string,
    dateTimeNotification: Date
  },
  handleRemove: () => void
}

function PlantCardSecundary ({ data, handleRemove, ...props}: Props) {
  const { colors } = useTheme()

  return (
    <Swipeable 
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <Styles.RemoveButton onPress={handleRemove}>
              <Feather name="trash" size={32} color={colors.white} />
            </Styles.RemoveButton>
          </View>
        </Animated.View>
      )}
    >
      <Styles.Container {...props}>
        <Styles.Image uri={data.photo} width={70} height={70} />
        <Styles.Title>{data.name}</Styles.Title>
        <Styles.Details>
          <Styles.Timelabel>Regar às</Styles.Timelabel>
          <Styles.Time>{data?.dateTimeNotification && format(new Date(data?.dateTimeNotification), 'HH:mm')}</Styles.Time>
        </Styles.Details>
      </Styles.Container>
    </Swipeable>
  )
}

export default PlantCardSecundary
