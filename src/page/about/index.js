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
                            m('p',m.trust(`
                            我是個多次跨領域的工作者，最後停留在軟體程式開發這條路深根，我喜愛這條路。目前在網頁前端領域擔任工程師，對於精雕細琢作品充滿熱誠，也樂於分享技術提攜後輩，希望能構建一個正向循環的生態系。<br/><br/>
                            我來背景曾任海軍士官，主負責各項電機設備的維修保養，最終任職至副領班，期許自己有更大的舞台，我走向社會。接過案、創過業，歷經一些人生起伏，感受過背叛與欺騙，賠過錢吃過債，最後找到自己生命的平衡點。<br/><br/>
                            我喜歡軟體工程界這種樂於技術分享與互助的生態，團隊合作、分工開發，不再英雄主義，功歸一人。軟體只是個媒介，透過這個媒介誕生的平台，它承載著創業家的夢想去引來一波又一波的互聯網革命。我對自己期許不斷翻新自己的技術，增進自己技術的核心實力，能夠開發劃世代的工藝品。<br/><br/>
                            平時樂於助人，教導一些業外想踏入這領域的人一些技術，作為他們的指明燈，提供學習的方向。我希望技術不只是給少數人掌握的，更是能普及讓更多人熟悉，建立良好的生態圈，希望我所到之處也能提供這樣的氛圍。<br/><br/>
                            `)),
                        ])
                    ])
                ])
            ]),
        ])
    }
}