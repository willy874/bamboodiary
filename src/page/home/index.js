import m from 'mithril'
import classNames from 'classnames'
import TabNavbar from '../component/tab-navbar'

export default class Home {
    constructor(vnode){

    }
    oncreate(vnode){
        document.main = vnode.dom
        fetch('./dist/data/portfolio.json').then((response) => {
            response.json().then((data)=> {
                vnode.attrs.model.portfolio = data
                m.redraw()
            })
        })
    }
    view(vnode){
        const {
            control,
            model,
            status
        } = vnode.attrs
        const portfolio = model.portfolio
        const article = model.article
        return m('div',{
            class: 'main home'
        },[
            m('section.sec1',[
                m('h2',[
                    m('span','追尋自我的技術'),
                    m('br'),
                    m('span','創造唯獨的生命')
                ])
            ]),
            m('section.sec2',{
                id: 'about'
            },[
                m('section.sec3-container',[
                    m('.sec2-heading',{
                        class: classNames('')
                    },[
                        m('h2',[
                            m('span.h2-en','About'),
                            m('span.h2-ch','關於竹子')
                        ])
                    ]),
                    m('.sec2-row',{
                        class: classNames('')
                    },[
                        m('div',{
                            class: classNames('sec2-row-col','img-block')
                        },[
                            m('img',{
                                src: './images/about/Self-portrait-01.jpg',
                                alt: '竹子照片',
                                style: {
                                    width: '100%'
                                }
                            })
                        ]),
                        m('div',{
                            class: classNames('sec2-row-col','text-block')
                        },[
                            m(TabNavbar,{
                                options: [
                                // {
                                //     title: '個人資訊',
                                //     panel: m('div',[
                                //         m('p',m.trust(`
                                //         <ul>
                                //             <li>專長： 電機維修、監控系統、影音剪輯、前端工程</li>
                                //             <li>興趣： 旅遊拍照、寫作、閱讀、寫程式、交流趣聞</li>
                                //         </ul>
                                //         `))
                                //     ])
                                // },
                                {
                                    title: '工作經歷',
                                    panel: m('div',[
                                        m('p',m.trust(`
                                        <ul>
                                            <li>海軍電機士官：寧陽軍艦艦艇電機中士</li>
                                            <li>誼光公寓大廈管理有限公司：社區副幹事</li>
                                            <li>橙色國際資訊有限公司：產品專案經理</li>
                                            <li>創鈞堂資訊有限公司：前端工程師</li>
                                        </ul>
                                        `))
                                    ])
                                },{
                                    title: '隨筆雜談',
                                    panel: m('div',[
                                        m('p',m.trust(`
                                        一開始基於興趣開始學習架站，本身是機電工程的我跨領域學習前端開發。然而，對於一個跨領域學習者，不外乎最痛苦的就是資源匱乏。 前端最大的優點就是"看的到"，馬上就能知道結果。一路沒有任何幫助到真正進職場就業能讓前輩引導也是熬了許久。 0到1是最為困難的，只能仰賴大量的嘗試與練習，直到熟手並掌握。因而，找尋"解決問題"的方法尤為重要，或許也是因為這樣，獨創不少個人手法和道路。
                                        `)),
                                        
                                    ])
                                },{
                                    title: '前端技能',
                                    panel: m('div',[
                                        m('p',m.trust(`
                                        <ul>
                                            <li>主修CSS排版： Flex</li>
                                            <li>主修CSS框架： Bootstrap</li>
                                            <li>CSS預處理器： SCSS</li>
                                            <li>主修JS框架： Mithril</li>
                                            <li>合作後端： C#、PHP</li>
                                            <li>慣用打包工具： webpack</li>
                                        </ul>
                                        `)),
                                    ])
                                }]
                            }),
                            m('.sec2-row-col-btn',[
                                m('button[type=button]',{
                                    onclick: ()=>{
                                        m.route.set('/about')
                                    }
                                },'MORE')
                            ])
                            
                        ])
                    ])
                ])
            ]),
            m('section.sec3',{
                id: 'portfolio'
            },[
                m('.sec3-container',[
                    m('.sec3-heading',{
                        class: classNames('')
                    },[
                        m('h2',[
                            m('span.h2-en','Portfolio'),
                            m('span.h2-ch','作品集')
                        ])
                    ]),
                    m('.sec3-heading',[
                        m('h3','Web Site')
                    ]),
                    m('.sec3_website-row',portfolio.filter(item=>{
                        return item.type === 'website'
                    }).map(item=>{
                        return m('div',{
                            class: classNames('sec3_website-row-col')
                        },[
                            m('div',{
                                class: classNames('sec3_website-row-col-figure')
                            },[
                                m('figure',[
                                    m('img',{
                                        src: item.src,
                                        alt: item.header
                                    }),
                                    m('mask',{
                                        class: classNames('sec3_website-row-col-figure-mask')
                                    },[
                                        m('a[target=_blank]',{
                                            href: item.href,
                                            title: `連結至${item.header}(另開新視窗)`
                                        },[
                                            m('span',item.text)
                                        ])
                                    ])
                                ]),
                                m('figcaption',[
                                    m('h4',item.header)
                                ]),
                            ])
                        ])
                    })),
                    m('.sec3-heading',[
                        m('h3','Single Page')
                    ]),
                    m('.sec3_singlepage-row',portfolio.filter(item=>{
                        return item.type === 'singlepage'
                    }).map(item=>{
                        return m('div',{
                            class: classNames('sec3_singlepage-row-col')
                        },[])
                    })),
                    m('h3',{
                        style:{
                            color: '#333',
                            textAlign: 'center',
                            fontWeight: 'bold'
                        }
                    },['建置中......'])
                ])
            ]),
            m('section.sec4',{
                id: 'blog'
            },[
                m('section.sec4-container',[
                    m('.sec4-heading',{
                        class: classNames('')
                    },[
                        m('h2',[
                            m('span.h2-en','Blog'),
                            m('span.h2-ch','部落格')
                        ])
                    ]),
                    m('.sec4_blog-row',article.blog.filter(item=>{
                        return item.type === 'blog'
                    }).map(item=>{
                        return m('div',{
                            class: classNames('sec4_blog-row-col')
                        },[
                            m('div',{
                                class: classNames('sec4_blog-row-col-figure')
                            },[
                                m('figure',[
                                    m('img',{
                                        src: item.src,
                                        alt: item.header
                                    })
                                ]),
                                m('div',{
                                    class: classNames('sec4_blog-row-col-figure-text')
                                },[
                                    m('h3',[
                                        m('a',{
                                            href: item.href,
                                            title: `連結至${item.header}`
                                        },item.header)
                                    ]),
                                    m('p',item.text)
                                ]),
                            ])
                        ])
                    }))
                ])
            ]),
        ])
    }

}