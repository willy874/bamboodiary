import { reactive } from 'vue'
import Dialog from './dialog'
import VueDialog from './dialog-component'
import Popup from './popup'
import VuePopup from './popup-component'
import DialogInstall from './install'

const DialogNative = reactive(new Dialog())

export const useDialog = () => {
  return DialogNative
}
export { VueDialog, Dialog, VuePopup, Popup, DialogInstall }
