import React from 'react'
import { Platform, Text, TouchableWithoutFeedback, View } from 'react-native'
import { useTheme } from '@/Hooks'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { hasNotch } from 'react-native-device-info'
import Icon from 'react-native-vector-icons/MaterialIcons'

const BottomTab = ({ state, descriptors, navigation }: any) => {
  const { Layout, Gutters, Colors, Common } = useTheme()
  const { bottom } = useSafeAreaInsets()

  return (
    <View
      style={[
        Layout.row,
        Layout.justifyContentAround,
        Gutters.SVPadding,
        Common.backgroundPrimary,
        Platform.OS === 'ios' &&
          hasNotch() && {
            paddingBottom: bottom,
          },
      ]}
    >
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key]
        const isFocused = state.index === index
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TouchableWithoutFeedback
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.key}
          >
            <View style={Layout.colVCenter}>
              <Icon
                name={options?.icon}
                size={30}
                color={isFocused ? Colors.primary : Colors.divider}
              />
              <Text
                style={[
                  Gutters.XSTMargin,
                  { color: isFocused ? Colors.primary : Colors.divider },
                ]}
              >
                {options?.title}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )
      })}
    </View>
  )
}
export default BottomTab
