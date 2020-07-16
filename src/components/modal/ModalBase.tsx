import { Modal as MobileModal, Platform } from 'react-native'
/*@ts-ignore*/
import { Modal as WebModal } from 'modal-react-native-web'

const Modal = Platform.OS === 'web' ? WebModal : MobileModal;
export default Modal;
