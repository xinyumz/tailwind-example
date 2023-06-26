import { Text } from 'app/design/typography'
import { View } from 'app/design/view'

export function MyBoxL({
  bgColor,
  colorName,
}: {
  bgColor: string
  colorName: string
}) {
  return (
    <View
      className={`aspect-square w-32 sm:w-40 md:w-52 ${bgColor} justify-center rounded-xl border border-solid border-black`}
    >
      <Text className="text-center text-sm font-bold text-white sm:text-base md:text-lg">
        {colorName}
      </Text>
    </View>
  )
}

export function MyBoxS({
  bgColor,
  colorName,
}: {
  bgColor: string
  colorName: string
}) {
  return (
    <View
      className={`aspect-square w-20 sm:w-32 md:w-40 ${bgColor} justify-center`}
    >
      <Text className="text-center text-xs font-bold text-white sm:text-sm md:text-base">
        {colorName}
      </Text>
    </View>
  )
}
