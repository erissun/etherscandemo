import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { ScanQRContainer, TokenDetailContainer } from '@/Containers'
import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import { navigationRef } from './utils'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ROUTES } from '@/Constant'

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator>
          <Stack.Screen
            name={ROUTES.MAIN}
            component={MainNavigator}
            options={{
              animationEnabled: false,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={ROUTES.APP_ROUTE.TOKEN_DETAIL}
            component={TokenDetailContainer}
          />
          <Stack.Screen
            name={ROUTES.APP_ROUTE.SCAN_QR}
            component={ScanQRContainer}
            options={{
              presentation: 'modal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default ApplicationNavigator
