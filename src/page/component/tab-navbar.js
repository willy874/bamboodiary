import m from 'mithril'
import classNames from 'classnames'

const config = {
    active: 0,
    animation: 'fade',
    options: [{
        panel: 'component',
        title: 'tab'

    }]
}

export default class TabNavbar {
    constructor(vnode){
        this.active = vnode.attrs.active || 0
    }
    view(vnode){
        const {
            options,
            animation
        } = vnode.attrs
        return m('.tab-navbar', {
            class: classNames(animation)
        },[
            m('.tab-nav',[
                options.map((item,index)=>{
                    return m('a.tab-link',{
                        class: classNames({
                            'active': index === item.active
                        }),
                        onclick:(e)=>{
                            this.active = index
                        }
                    },item.title)
                })
            ]),
            m('.tab-content',[
                options.map((item,index)=>{
                    return (index === item.active)? m('.tab-panel',item.panel):null
                })
            ])
        ])
    }
}