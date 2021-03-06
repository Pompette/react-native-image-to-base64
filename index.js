import { NativeModules, Platform } from 'react-native';

const RNImageToBase64 = NativeModules.RNImageToBase64;

const ImageToBase64 = {};

ImageToBase64.getBase64String = (uri, inSampleSize = 5) => {
  if (Platform.OS === "android") {
    return RNImageToBase64.getBase64String(uri, inSampleSize);
  }
  return RNImageToBase64.getBase64String(uri);
}

ImageToBase64.bitmapToBase64 = (bitmap) => {
  return RNImageToBase64.bitmapToBase64(bitmap);
}

module.exports = ImageToBase64;