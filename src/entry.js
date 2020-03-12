import m from 'mithril'
import {
    control,
    model,
    status
} from './createApp'

const root = document.body
const Routes = control.route() 
m.route(root , '/' , Routes)
