import { Platform, PixelRatio } from 'react-native'

export function getPixelSize(px) {
  return Platform.select({
    ios: px,
    android: PixelRatio.getPixelSizeForLayoutSize(px)
  })
} 