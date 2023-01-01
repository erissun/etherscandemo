/* eslint-disable react-hooks/exhaustive-deps */
import { FlatList, View, Text, ActivityIndicator } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Searchbar } from 'react-native-paper'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/token'
import { Token } from '@/Services/modules/token/fetchBySearching'
import TokenCard from '@/Components/TokenCard'
import _ from 'lodash'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '@/Constant'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '@/Navigators/utils'

type Props = {}

const HomeContainer = (props: Props) => {
  const { Layout, Colors, Gutters, Fonts } = useTheme()
  const [searchQuery, setSearchQuery] = useState('')
  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyFetchOneQuery()
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const processChange = useCallback(
    _.debounce((query: string) => onChangeSearch(query)),
    [],
  )

  const onChangeSearch = (query: string) => {
    setSearchQuery(query)
    fetchOne(query)
  }

  const renderItem = ({ item }: { item: Token }) => {
    return <TokenCard item={item} onPressCard={onPressTokenDetail} />
  }

  const onPressTokenDetail = (item: Token) => {
    navigation.navigate(ROUTES.APP_ROUTE.TOKEN_DETAIL, { ...item })
  }

  const renderEmptyList = () => {
    return (
      <View style={[Layout.fill, Layout.colVCenter, Gutters.XXXLTMargin]}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            <Text style={Fonts.h2}>Welcome to Etherscan</Text>
            <Text style={[Gutters.RTMargin, Fonts.textCenter]}>
              {'Explore the price, balance and more \n on the Ethereum Network'}
            </Text>
          </>
        )}
      </View>
    )
  }

  return (
    <View style={[Layout.fill]}>
      <Searchbar
        placeholder="Search by Address / Token / TxHash / Tag"
        onChangeText={processChange}
        value={searchQuery}
        style={{ backgroundColor: Colors.white }}
        inputStyle={Fonts.m}
      />
      <FlatList
        style={Layout.fill}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item?.label}
        ListEmptyComponent={renderEmptyList}
      />
    </View>
  )
}

export default HomeContainer
