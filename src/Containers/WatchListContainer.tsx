import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useTheme } from '@/Hooks'
import { TokenDetail } from '@/Services/modules/token/fetchDetail'

type Props = {}

const WatchListContainer = (props: Props) => {
  const watchList = useSelector(state => state.token.watchList)
  const { Layout, Common, Gutters, Colors } = useTheme()

  console.log('watchList', watchList)

  const renderItem = ({ item }: { item: TokenDetail }) => {
    return (
      <View
        style={[Gutters.RHPadding, Gutters.RVPadding, Common.backgroundPrimary]}
      >
        <Text>{item.address}</Text>
        <View style={[Layout.rowHCenter]}>
          <View style={Layout.fill}>
            <Text>Value in eth</Text>
            <Text>{item?.balance}</Text>
          </View>
          <View style={Layout.fill}>
            <Text>Value in usd</Text>
            <Text>{item?.balanceInUSD}</Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={[Layout.fill, Layout.alignItemsCenter]}>
      <FlatList renderItem={renderItem} data={watchList} />
    </View>
  )
}

export default WatchListContainer
