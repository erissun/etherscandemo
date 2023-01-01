/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native'
import { ThemeVariables } from './theme'

export default function ({ FontSize, Colors }: ThemeVariables) {
  const defaultValue = {
    color: Colors.text,
  }

  return StyleSheet.create({
    h1: {
      ...defaultValue,
      fontSize: FontSize.h1,
    },
    h2: {
      ...defaultValue,
      fontSize: FontSize.h2,
    },
    h3: {
      ...defaultValue,
      fontSize: FontSize.h3,
    },
    h4: {
      ...defaultValue,
      fontSize: FontSize.h4,
    },
    t: {
      ...defaultValue,
      fontSize: FontSize.title,
    },
    l: {
      ...defaultValue,
      fontSize: FontSize.large,
    },
    m: {
      ...defaultValue,
      fontSize: FontSize.medium,
    },
    s: {
      ...defaultValue,
      fontSize: FontSize.small,
    },
    cap: {
      ...defaultValue,
      fontSize: FontSize.caption,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
  })
}
