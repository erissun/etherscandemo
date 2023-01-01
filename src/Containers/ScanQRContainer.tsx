import { View, Text, Platform, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CameraScreen, CameraType } from 'react-native-camera-kit'
import { PERMISSIONS, request } from 'react-native-permissions'
import { useTheme } from '@/Hooks'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '@/Navigators/utils'
import { useDispatch } from 'react-redux'
import { setWatchList } from '@/Store/Token'
import { ROUTES } from '@/Constant'
import { useLazyGetTokenDetailQuery } from '@/Services/modules/token'

type Props = {}

const ScanQRContainer = (props: Props) => {
  const [isCameraPermissionGranted, setCameraPermission] = useState(false)
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const [getTokenDetail, { data, isLoading }] = useLazyGetTokenDetailQuery()
  const { Layout } = useTheme()
  const dispatch = useDispatch()

  useEffect(() => {
    const checkPermission = async () => {
      try {
        if (Platform.OS === 'android') {
          request(PERMISSIONS.ANDROID.CAMERA).then(result => {
            if (result === 'granted') {
              setCameraPermission(true)
            }
          })
        } else if (Platform.OS === 'ios') {
          request(PERMISSIONS.IOS.CAMERA).then(result => {
            if (result === 'granted') {
              setCameraPermission(true)
            }
          })
        }
      } catch (err) {
        console.warn(err)
      }
    }
    checkPermission()
  }, [])

  useEffect(() => {
    if (data) {
      dispatch(setWatchList(data))
      navigation.goBack()
      navigation.navigate(ROUTES.TAB_ROUTE.WATCH_LIST)
    }
  }, [data])

  const RequestPermissionView = () => {
    return (
      <View style={Layout.colVCenter}>
        <Text>Please allow the app to use camera</Text>
      </View>
    )
  }

  const validateQRCode = (event: any) => {
    getTokenDetail(
      JSON.stringify({
        value: event.nativeEvent.codeStringValue,
        typeval: '3',
      }),
    )
  }

  if (!isCameraPermissionGranted) {
    return <RequestPermissionView />
  }

  return isLoading ? (
    <View style={[Layout.fill, Layout.center]}>
      <ActivityIndicator />
    </View>
  ) : (
    <CameraScreen
      cameraType={CameraType.Back}
      scanBarcode={true}
      onReadCode={validateQRCode} // optional
      showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
      laserColor="red" // (default red) optional, color of laser in scanner frame
      frameColor="white" // (default white) optional, color of border of scanner frame
    />
  )
}

export default ScanQRContainer
