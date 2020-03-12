import m from 'mithril'
import classNames from 'classnames'

export default class Home {
    constructor(vnode){

    }
    view(){
        return m('div',{
            class: 'main home'
        },[
            m('section.sec1',[
                m('h2',[
                    m('span','追尋極限的技術'),
                    m('br'),
                    m('span','創造屬於我自己')
                ])
            ]),
            m('section.sec2',[
                m('.sec2-heading',[
                    m('h2',[
                        m('span.h2-en','About'),
                        m('span.h2-ch','關於竹子')
                    ])
                ]),
                m('.sec2-row',[
                    m('div',{
                        class: classNames('sec2-row-col','img-block')
                    },[
                        m('img',{
                            src: './images/about/Self-portrait-01.jpg',
                            alt: '竹子照片',
                            style: {
                                width: '100%',
                                borderRadius: '0.5rem'
                            }
                        })
                    ]),
                    m('div',{
                        class: classNames('sec2-row-col','text-block')
                    },[
                        m('h3','個人資訊'),
                        m('p',[
                            m('ul',[
                                m('li','專長： 電機維修、監控系統、影音剪輯、前端工程'),
                                m('li','興趣： 旅遊拍照、寫作、閱讀、寫程式、交流趣聞')
                            ])
                        ]),
                        m('.sec2-row-col-btn',[
                            m('button[type=button]','MORE')
                        ])
                    ])
                ])
            ]),
            m('section.sec3',['']),
            m('section.sec4',['']),
            m('section.sec5',['']),
        ])
    }

}