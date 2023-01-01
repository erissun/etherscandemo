import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { TokenDetail } from '@/Services/modules/token/fetchDetail'

type Props = {
  item: TokenDetail
}

const WatchListCard = (props: Props) => {
  const { item } = props
  const { Layout } = useTheme()
  return (
    <View>
      <Text>{item?.address}</Text>
    </View>
  )
}

export default WatchListCard
