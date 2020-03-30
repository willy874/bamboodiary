import m from 'mithril'
import classNames from 'classnames'

export default class About {
    constructor(vnode){

    }
    view(vnode){
        const {
            control,
            model,
            status
        } = vnode.attrs
        return m('div',{
            class: classNames('main','about')
        },[
            m('section.sec1',{

            },[
                m('.sec1-container',[
                    m('.sec1-container-heading',[
                        m('h2',[
                            m('span','關於竹子')
                        ])
                    ]),
                    m('.sec1-container-row',[
                        m('figure',[
                            m('img',{
                                src:'./images/about/Self-portrait-02.jpg',
                                style: {
                                    width: '100%'
                                }
                            })
                        ]),
                        m('.sec1-container-row-content',[
                            m('.sec1-container-row-content-heading',[
                                m('h3','隨筆雜記')
                            ]),
                            m('p',`
                            一開始基於興趣開始學習架站，本身是機電工程的我跨領域學習前端開發。
                            然而，對於一個跨領域學習者，不外乎最痛苦的就是資源匱乏。 前端最大的優點就是"看的到"，馬上就能知道結果。
                            一路沒有任何幫助到真正進職場就業能讓前輩引導也是熬了許久。 0到1是最為困難的，只能仰賴大量的嘗試與練習，直到熟手並掌握。
                            因而，找尋"解決問題"的方法尤為重要，或許也是因為這樣，獨創不少個人手法和道路。
                            `),
                        ])
                    ])
                ])
            ]),
        ])
    }
}