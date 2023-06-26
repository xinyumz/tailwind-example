import { P, Text } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'
import { Subtitle } from './my-texts'

export function MyP({
  children,
  fontFamily,
}: {
  children: React.ReactNode[]
  fontFamily?: string
}) {
  return (
    <P className={`text-justify ${fontFamily}`}>
      <Text className="font-bold">{children[0]}</Text>
      {children[1]}
    </P>
  )
}

export function FormattedBlock({
  children,
  maxWidth,
  gap,
  justifyContent,
  flexWrap,
}: {
  children: React.ReactNode[]
  maxWidth?: string | number
  gap?: string | number
  justifyContent?: string
  flexWrap?: any
}) {
  return (
    <View className={`gap-2 ${maxWidth}`}>
      <Subtitle>{children[0]}</Subtitle>
      <Row className={`${gap} ${flexWrap} ${justifyContent}`}>
        {children[1]}
      </Row>
    </View>
  )
}
