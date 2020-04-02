import m from 'mithril'
import classNames from 'classnames'

export default class Header {
    constructor(vnode) {
        this.navbar = false
    }
    oncreate(vnode){
        const dom = vnode.dom.querySelectorAll('.page-switch')[0]
        vnode.attrs.control.pageSwitchAnimate = dom
    }
    view(vnode) {
        const {
            control,
            model,
            status
        } = vnode.attrs
        return m('header', [
            m('.page-switch.animateEnd'),
            m('h1', {
                class: classNames('header_brand', {
                    'active': this.navbar
                }),
            }, [
                m('a', {
                    title: '回到首頁',
                    onclick: () => {
                        control.routeSet('#!/home')
                    }
                }, [
                    m('img', {
                        class: 'before',
                        src: './images/logo/logo-dark.png',
                        style: {
                            width: '15rem'
                        }
                    }),
                    m('img', {
                        class: 'after',
                        src: './images/logo/logo-light.png',
                        style: {
                            width: '15rem'
                        }
                    })
                ])
            ]),
            m('div', {
                class: classNames('header_container', {
                    active: this.navbar
                })
            }, [
                m('div', {
                    class: classNames('header_container-btn')
                }, [
                    m('.header_container-btn-top'),
                    m('.header_container-btn-center'),
                    m('.header_container-btn-bottom'),
                    m('a', {
                        href: '#',
                        class: classNames('header_container-btn-a'),
                        title: (this.navbar) ? '收合選單' : '展開選單',
                        onclick: (e) => {
                            e.preventDefault()
                            this.navbar = (this.navbar) ? false : true;
                        }
                    }),
                ]),
                /******************************************************/
                m('div', {
                    class: classNames('header_container-navbar')
                }, [
                    /******************************************************/
                    m('div', {
                        class: classNames('header_navbar')
                    }, [
                        m('div', {
                            class: classNames('header-aside_brand-photo')
                        })
                    ]),
                    /******************************************************/
                    m('nav', {
                        class: classNames('header-main_navbar')
                    }, [
                        m('ul', {
                            class: classNames('navbar_panel')
                        }, [
                            control.node.MainNavbar.map(item => {
                                return m('li', {
                                    class: classNames('navbar_panel-item')
                                }, [
                                    m('a', {
                                        class: classNames('navbar_panel-item-link', 'create'),
                                        title: `連結至${item.name}頁`,
                                        onclick: () => {
                                            this.navbar = false
                                            setTimeout(() => {
                                                control.routeSet(item.link)
                                            }, 300)
                                        }
                                    }, item.name)
                                ])
                            }),
                            m('li', {
                                class: classNames('navbar_panel-item--grow'),
                            })
                        ])
                    ]),
                    /******************************************************/
                    m('nav', {
                        class: classNames('header-top_navbar')
                    }, [
                        m('ul',
                            control.node.HeaderNavbar.map(item => {
                                return m('li', {
                                    class: classNames('navbar_panel-item')
                                }, [
                                    m('a', {
                                        class: classNames('navbar_panel-item-link'),
                                        href: `#!${item.link}`
                                    }, item.name)
                                ])
                            })
                        )
                    ])
                    /******************************************************/
                ]),

            ]),



        ])
    }

}