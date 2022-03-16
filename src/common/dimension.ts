import { Dimensions, PixelRatio } from "react-native";

let { width, height } = Dimensions.get("window");

const widthToDp = (val: string) => {
  const roundVal = parseFloat(val);
  const layoutSize = (width * roundVal) / 100;
  return PixelRatio.roundToNearestPixel(layoutSize);
};
const heightToDp = (val: string) => {
  const roundVal = parseFloat(val);
  const layoutSize = (height * roundVal) / 100;
  return PixelRatio.roundToNearestPixel(layoutSize);
};

export { heightToDp, widthToDp };
