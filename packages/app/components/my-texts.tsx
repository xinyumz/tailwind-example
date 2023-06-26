import { Text } from 'app/design/typography'

export function Subtitle({ children }: { children: React.ReactNode }) {
  return <Text className="mb-2 text-lg font-bold sm:text-2xl">{children}</Text>
}
