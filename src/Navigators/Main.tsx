import React from 'react'
import {
  BottomTabBarProps,
  BottomTabHeaderProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import {
  FavoriteContainer,
  HomeContainer,
  WatchListContainer,
} from '@/Containers'
import { BottomBar, Header } from '@/Components'
import { ROUTES } from '@/Constant'

const Tab = createBottomTabNavigator()

const renderTabBar = (props: BottomTabBarProps) => <BottomBar {...props} />

const renderHeader = (props: BottomTabHeaderProps) => <Header {...props} />

// @refresh reset
const MainNavigator = () => {
  const ArrayTabs = [
    {
      name: ROUTES.TAB_ROUTE.EXPLORER,
      title: 'Explorer',
      component: HomeContainer,
      icon: 'explore',
    },
    {
      name: ROUTES.TAB_ROUTE.WATCH_LIST,
      title: 'Watchlist',
      component: WatchListContainer,
      icon: 'list-alt',
    },
    {
      name: ROUTES.TAB_ROUTE.FAVORITE,
      title: 'Favorite',
      component: FavoriteContainer,
      icon: 'bookmark',
    },
  ]

  return (
    <Tab.Navigator
      screenOptions={{ header: props => renderHeader(props) }}
      tabBar={renderTabBar}
    >
      {ArrayTabs.map((item, index) => (
        <Tab.Screen key={`${index}`} options={{ ...item }} {...item} />
      ))}
    </Tab.Navigator>
  )
}

export default MainNavigator
