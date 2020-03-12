import m from 'mithril'
import classNames from 'classnames'

export default class Header {
    constructor(){
        this.navbar = false
    }
    view(vnode){
        const {
            control,
            model,
            status
        } = vnode.attrs
        return m('header',[
            m('h1',{
                class: classNames('header_brand')
            },[
                m('a',{
                    href: '#!/',
                    title: '回到首頁'
                },[
                    m('img',{
                        src: './images/logo/logo-dark.png',
                        style:{
                            width: '15rem'
                        }
                    })
                ])
            ]),
            m('div',{
                class: classNames('header_container',{
                    active: this.navbar
                })
            },[
                m('div',{
                    class: classNames('header_container-btn')
                },[
                    m('div',{
                        class: classNames('header_container-btn-top')
                    }),
                    m('div',{
                        class: classNames('header_container-btn-center')
                    }),
                    m('div',{
                        class: classNames('header_container-btn-bottom')
                    }),
                    m('a',{
                        href: 'javascript:void;',
                        class: classNames('header_container-btn-a'),
                        title: (this.navbar)?'收合選單':'展開選單',
                        onclick: (e)=>{
                            this.navbar = (this.navbar)?false:true;
                        }
                    }),
                ])
            ]),

            m('div',{
                class: classNames('header_navbar')
            },[
                m('nav',{
                    class: classNames('header_navbar')
                },[
                    m('ul',
                        control.headerNavbar.map(item=>{
                            return m('li',{
                                class: classNames('header-navbar_panel-item')
                            },[
                                m('a',{
                                    class: classNames('header-navbar_panel-item-link'),
                                    href: `#!${item.link}`
                                },item.name)
                            ])
                        })
                    )
                ])
            ]),

            m('div',{
                class: classNames('header_navbar')
            },[
                m('div',{
                    class: classNames('header_navbar')
                },[
                    m('div',{
                        class: classNames('header-aside_brand-photo')
                    })
                ]),
                m('nav',{
                    class: classNames('header-aside_main-navbar')
                },[
                    m('ul',{
                        class: classNames('header-aside_main-navbar_panel')
                    },
                        control.mainNavbar.map(item=>{
                            return m('li',{
                                class: classNames('main-navbar_panel-item')
                            },[
                                m('a',{
                                    class: classNames('main-navbar_panel-item-link'),
                                    href: `#!${item.link}`
                                },item.name)
                            ])
                        }),
                        m('li',{
                            class: classNames('main-navbar_panel-item--grow'),
                        })
                    )
                ])
            ]),
           
        ])
    }

}