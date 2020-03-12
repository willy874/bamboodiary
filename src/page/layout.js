import m from 'mithril'
import Header from './header'
import Footer from './footer'
import {Dialog} from '@base/components'
import * as createApp from '../createApp'

class LayoutPage {
    view(vnode){
        const {
            control,
            model,
            status
        } = vnode.attrs
        return m('div',{
            class: 'body'
        },[
            m(Header,{
                control,
                model,
                status
            }),
            vnode.children,
            m(Footer,{
                control,
                model,
                status
            }),
            m(Dialog,{
                control,
                model,
                status
            },'dialog'),
        ])
    }
}

//Layout設定
export default function Layout(Page){
    return class {
        constructor() {
            this.control = createApp.control
            this.model = createApp.model
            this.status = createApp.status
        }
        view(vnode){
            return m(LayoutPage,{
                control: this.control,
                model: this.model,
                status: this.status
            },[
                m(Page,{
                    control: this.control,
                    model: this.model,
                    status: this.status
                })
            ])
        }
    }
}