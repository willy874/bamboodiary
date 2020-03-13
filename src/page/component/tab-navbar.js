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
                    return (index === this.active)? m('.tab-panel',{
                        onbeforeremove(vnode){
                            console.log('vnode',vnode)
                            const target = vnode.dom
                            target.classList.add("remove-animation")
                            return new Promise((resolve)=> {
                                console.log('resolve',resolve)
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