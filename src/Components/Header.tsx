import { Image, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from '@/Hooks'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '@/Navigators/utils'
import { ROUTES } from '@/Constant'

const Header = (props: BottomTabHeaderProps) => {
  const { Layout, Colors, Images, Common, Gutters } = useTheme()
  const { top } = useSafeAreaInsets()
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const onPress = () => {
    navigation.navigate(ROUTES.APP_ROUTE.SCAN_QR)
  }

  return (
    <View
      style={[
        Layout.rowHCenter,
        Gutters.RHPadding,
        Gutters.XSBPadding,
        Layout.justifyContentBetween,
        {
          height: 44 + top,
          backgroundColor: Colors.primary,
          alignItems: 'flex-end',
        },
      ]}
    >
      <Image source={Images.logo} style={Common.logoEther} />
      <Icon name="qr-code" color={'white'} size={32} onPress={onPress} />
    </View>
  )
}

export default Header
