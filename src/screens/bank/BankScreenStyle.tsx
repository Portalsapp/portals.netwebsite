import { StyleSheet, Platform } from 'react-native'
import mobileStyle from './BankScreenMobileStyle'

const webStyle = StyleSheet.create({

});

const style = Platform.OS === 'web' ? webStyle : mobileStyle;
export default style;
