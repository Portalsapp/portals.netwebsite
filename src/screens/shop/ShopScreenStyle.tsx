import { StyleSheet, Platform } from 'react-native'
import mobileStyle from './ShopScreenMobileStyle'

const webStyle = StyleSheet.create({

});

const style = Platform.OS === 'web' ? webStyle : mobileStyle;
export default style;
