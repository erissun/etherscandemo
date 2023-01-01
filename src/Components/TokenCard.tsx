import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { Token } from '@/Services/modules/token/fetchBySearching'

type TokenCardType = {
  item: Token
  onPressCard?: any
}

const TokenCard = (props: TokenCardType) => {
  const { item, onPressCard } = props
  const { Layout, Common, Gutters, Colors } = useTheme()
  return (
    <TouchableOpacity
      onPress={() => onPressCard(item)}
      style={[
        Layout.rowHCenter,
        Gutters.RHMargin,
        Gutters.RTMargin,
        Gutters.RHPadding,
        Gutters.SVPadding,
        { backgroundColor: Colors.white, borderRadius: 8 },
      ]}
    >
      <Image source={{ uri: item?.logo }} style={Common.image} />
      <View
        style={[
          Layout.fill,
          Gutters.SLMargin,
          Gutters.XSBPadding,
          { borderBottomWidth: 1, borderColor: Colors.divider },
        ]}
      >
        <Text>{item.label}</Text>
        <Text style={Gutters.STMargin}>{item?.desc}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default TokenCard
