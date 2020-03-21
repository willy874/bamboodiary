import m from 'mithril'
import {
    control,
    model,
    status
} from './createApp'


const root = document.body
const Routes = control.route() 
m.route(root , '/home' , Routes)

// root.addEventListener('scroll',(e)=>{
//     console.log(e)
// })
// root.addEventListener('click',(e)=>{
//     console.log(e)
//     console.log({window})
//     console.log({body:document.querySelectorAll('body')[0]})
//     window.scrollTo(0, 2000)
// })