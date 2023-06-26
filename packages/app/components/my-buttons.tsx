import { useState } from 'react'
import { Text } from 'app/design/typography'
import { View } from 'app/design/view'
import { styled } from 'nativewind'
import { Pressable, Modal, Alert } from 'react-native'
import { Subtitle } from './my-texts'

export function Buttons() {
  return (
    <View className="items-center gap-4">
      <Subtitle>Interactive buttons: </Subtitle>
      <CountButton />
      <ModalButton />
    </View>
  )
}

function CountButton() {
  const [count, setCount] = useState(0)
  return (
    <View className="items-center gap-1">
      <MyButton
        defaultColor="bg-[darkorchid]"
        pressedColor="active:bg-[orchid]"
        onPress={() => setCount(count + 1)}
      >
        CLICK ME
      </MyButton>
      <Text className="text-lg">
        You've clicked <Text className="text-primary font-bold">{count}</Text>{' '}
        times!
      </Text>
    </View>
  )
}

function ModalButton() {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View className="items-center gap-1">
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View className="flex-1 items-center justify-center">
          <View className="m-4 items-center gap-4 rounded-2xl bg-white p-8 shadow shadow-black/25">
            <Text className="text-center text-base">
              Surprise!! I'm a pop-up modal!
            </Text>
            <MyButton
              defaultColor="bg-primary"
              pressedColor="active:bg-secondary"
              px="px-8"
              fontSize="text-base"
              onPress={() => setModalVisible(!modalVisible)}
            >
              Click here to hide me
            </MyButton>
          </View>
        </View>
      </Modal>

      <MyButton
        defaultColor="bg-[hotpink]"
        pressedColor="active:bg-[pink]"
        onPress={() => setModalVisible(true)}
      >
        PRESS ME
      </MyButton>
      <Text className="text-lg">Press and see what happens!</Text>
    </View>
  )
}

function MyButton({
  children,
  defaultColor,
  pressedColor,
  px,
  fontSize,
  onPress,
}: {
  children: React.ReactNode
  defaultColor: string
  pressedColor: string
  px?: number | string
  fontSize?: number | string
  onPress?: () => void
}) {
  const StyledPressable = styled(Pressable)
  const paddingx = px ? px : 'px-12'
  const fsize = fontSize ? fontSize : 'text-lg'

  return (
    <StyledPressable
      className={`justify-center rounded-2xl py-2.5 ${paddingx} ${defaultColor} ${pressedColor}`}
      onPress={onPress}
    >
      <Text className={`text-center font-bold text-white ${fsize}`}>
        {children}
      </Text>
    </StyledPressable>
  )
}
