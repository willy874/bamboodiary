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
        this.animation = vnode.attrs.animation ||　'fade'
    }
    handleView(helper) {
        if (!helper) {
            return
        }
        if (typeof helper === 'string') {
            return helper
        }
        if (typeof helper === 'function') {
            return m(helper)
        }
        if (typeof helper === 'object' && helper.hasOwnProperty('dom')) {
            return helper
        }
    }
    view(vnode){
        const {
            options
        } = vnode.attrs
        options.active = this.active
        
        return m('.tab-navbar', {
            class: classNames(this.animation)
        },[
            m('nav.tab-nav',[
                options.map((item,index)=>{
                    return m('.tab-item',[
                        m('.tab-link',{
                            class: classNames({
                                'active': index === this.active
                            })
                        },[
                            m('a',{
                                href: '#',               
                                title: `切換至${item.title}`,
                                onclick:(e)=>{
                                    e.preventDefault()
                                    this.active = index
                                }
                            },item.title)
                        ])
                    ])
                })
            ]),
            m('.tab-content',[
                options.map((item,index)=>{
                    return (index === this.active)? m('.tab-panel',{
                        onbeforeremove(vnode){
                            const target = vnode.dom
                            target.classList.add("remove-animation")
                            return new Promise((resolve)=> {
                                target.addEventListener("animationend", resolve)
                            })
                        }
                    },[
                        this.handleView(item.panel)
                    ]): null
                })
            ])
        ])
    }
}