import { View, Text, ActivityIndicator, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme } from '@/Hooks'
import { useLazyGetTokenDetailQuery } from '@/Services/modules/token'
import { useRoute } from '@react-navigation/native'
import { Token } from '@/Services/modules/token/fetchBySearching'

const TokenDetailContainer = () => {
  const route = useRoute()
  const { params } = route
  const { value, typeval } = params as Token

  const { Layout, Gutters, Common, Colors } = useTheme()
  const [getTokenDetail, { data, isLoading }] = useLazyGetTokenDetailQuery()

  useEffect(() => {
    getTokenDetail(JSON.stringify({ value, typeval }))
  }, [])

  return (
    <View style={[Layout.fill, Layout.center, Layout.alignItemsStretch]}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View
          style={[
            Layout.alignItemsStretch,
            Gutters.RHMargin,
            Gutters.SVPadding,
            Common.backgroundPrimary,
            Gutters.MHPadding,
          ]}
        >
          <View
            style={[
              Layout.colVCenter,
              Gutters.RBPadding,
              { borderBottomWidth: 1, borderColor: Colors.divider },
            ]}
          >
            <Image
              source={{ uri: data?.image }}
              style={[Common.logoDetail, { top: -25 }]}
            />
            <Text>{data?.name}</Text>
          </View>
          <View style={Layout.rowHCenter}>
            <View style={[Layout.fill, Layout.colVCenter, Gutters.RTMargin]}>
              <Text>PRICE</Text>
              <Text>{data?.price}</Text>
            </View>
            <View style={[Layout.fill, Layout.colVCenter]}>
              <Text>Marketcap</Text>
              <Text>{data?.price}</Text>
            </View>
          </View>
          <View style={Gutters.RTMargin}>
            <Text>TOTAL SUPPLY</Text>
            <Text>{data?.totalsupply}</Text>
          </View>
          <View style={Gutters.RTMargin}>
            <Text>CONTRACT</Text>
            <Text>{data?.address}</Text>
          </View>
        </View>
      )}
    </View>
  )
}

export default TokenDetailContainer
