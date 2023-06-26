import { H1, Text } from 'app/design/typography'
import { SolitoImage } from 'solito/image'
import { styled } from 'nativewind'

import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

import { MyP, FormattedBlock } from 'app/components/sections'
import { MyBoxL, MyBoxS } from 'app/components/my-boxes'
import { paragraphs } from 'app/assets/paragraphs'
import { Buttons } from 'app/components/my-buttons'
import { namedColors, hexColors } from 'app/assets/box-colors'

import christmas from '../../assets/images/christmas.png'
import kitten from '../../assets/images/kitten.jpg'

export function HomeScreen() {
  return (
    <View className="m-8 flex-1 items-center justify-center gap-8 p-4 sm:m-16 sm:gap-16">
      <Title />
      <Paragraphs />
      <SeparateBoxes />
      <Drawings />
      <BoxList />
      <Buttons />
    </View>
  )
}

function Title() {
  return (
    <H1>
      Solito example app with{' '}
      <MotiLink
        href="https://www.nativewind.dev/"
        animate={({ hovered, pressed }) => {
          'worklet'
          return {
            scale: pressed ? 0.9 : hovered ? 1.1 : 1,
          }
        }}
      >
        <Text className="text-primary">NativeWind</Text>
      </MotiLink>
    </H1>
  )
}

function Paragraphs() {
  return (
    <View className="max-w-5xl">
      {paragraphs.map((p, i) => (
        <MyP fontFamily={p[0]} key={i}>
          {[p[1], p[2]]}
        </MyP>
      ))}
    </View>
  )
}

function SeparateBoxes() {
  return (
    <FormattedBlock gap="gap-4" flexWrap="flex-wrap">
      {[
        'Individual boxes with named colors:',
        namedColors.map((color, i) => (
          <MyBoxL
            bgColor={color}
            colorName={color.slice(4, -1)}
            key={color + i}
          />
        )),
      ]}
    </FormattedBlock>
  )
}

function Drawings() {
  const StyledImage = styled(SolitoImage)
  return (
    <FormattedBlock
      gap="gap-2"
      justifyContent="justify-center"
      flexWrap="flex-wrap"
    >
      {[
        'Cute drawings:',
        <>
          <StyledImage
            src={christmas}
            resizeMode="contain"
            className="h-[300px] w-[450px] sm:h-[400px] sm:w-[600px]"
            alt="A cute drawing for SasuSaku family on a Christmas day."
          />
          <StyledImage
            src={kitten}
            resizeMode="contain"
            className="h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]"
            alt="A cute Sasuke kitten with cherry blossom."
          />
        </>,
      ]}
    </FormattedBlock>
  )
}

function BoxList() {
  return (
    <FormattedBlock flexWrap="flex-wrap" maxWidth="max-w-5xl">
      {[
        'A list of boxes with more colors:',
        hexColors.map((color, i) => (
          <MyBoxS
            bgColor={color}
            colorName={color.slice(4, -1)}
            key={color + i}
          />
        )),
      ]}
    </FormattedBlock>
  )
}
