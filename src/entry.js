import m from 'mithril'
import './style/main.scss'
import {
    control,
    model,
    status
} from './createApp'


const root = document.body
const Routes = control.route() 
m.route(root , '/home' , Routes)