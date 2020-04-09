import m from 'mithril'
import classNames from 'classnames'

export default class Resume {
    constructor(vnode) {

    }
    view(vnode) {
        const {
            control,
            model,
            status
        } = vnode.attrs
        return m('div', {
            class: classNames('main', 'resume')
        }, [
            m('section.sec1', {

            }, [
                m('.sec1-container', [
                    m('.sec1-container-heading', [
                        m('h2', [
                            m('span', '履歷表')
                        ])
                    ]),
                    m('.sec1-container-row', [
                        m('.sec1-container-row-content', [
                            m('.sec1-container-row-content-heading', [
                                m('h3', '求學經歷：')
                            ]),
                            m('p', m.trust(`
                                高雄高級工業職業學校冷凍空調科畢業<br/>
                                海軍軍官學校士官二專班輪機科畢業<br/>
                            `)),
                            m('.sec1-container-row-content-heading', [
                                m('h3', '工作經歷：')
                            ]),
                            m('p', m.trust(`
                                中華民國海軍<br/>
                                艦艇電機下士<br/>
                                工作內容：<br/>
                                維護保養艦上電機設備、相關電機表報業務<br/>
                                艦艇電機中士<br/>
                                維護維護保養艦上電機設備、相關電機表報業務，並任職副領班，領導及教育底下士兵執行部位業務。<br/>
                                工作內容： <br/>
                                2011年7月~2017年7月<br/>
                                <br/>
                                誼光公寓大廈管理有限公司<br/>
                                台北瓦斯商業大樓實習機電維護員<br/>
                                工作內容：<br/>
                                維護大樓機電保養工作，輪班值勤抄表業務。<br/>
                                建國北路新光大樓機電維護員<br/>
                                維護大樓機電保養工作，輪班值勤抄表業務。<br/>
                                工作內容：<br/>
                                千禾田社區社區管理副總幹事<br/>
                                維護管理社區設備，協調外部廠商執行社區維保工程，並領導社區團隊運作。<br/>
                                工作內容：<br/>
                                2018年3月~2019年1月<br/>
                                <br/>
                                橙色國際有限公司<br/>
                                產品經理<br/>
                                工作內容：<br/>
                                維護各據點設備、網頁架設、社群管理、貨物管理、外部工程協調與執行、帳務清點與表報紀錄。<br/>
                                2019年2月~2019年6月<br/>
                                <br/>
                                創鈞堂資訊有限公司<br/>
                                前端工程師<br/>
                                工作內容：<br/>
                                責任維護案相關客戶協調修改網頁前端，開發專案切版與相關前端工程。<br/>
                                2019年7月~現今<br/>
                            `)),
                            m('.sec1-container-row-content-heading', [
                                m('h3', '前端經歷：')
                            ]),
                            m('p', m.trust(`
                            2017年11月<br/>
                            接觸網頁架設相關技術，從Wordpress架站學習開始。<br/>
                            <br/>
                            2018年4月~7月<br/>
                            巨匠網頁基礎班課程學習<br/>
                            <br/>
                            2018年7月<br/>
                            開始個人接案，替客戶架站及維護<br/>
                            <br/>
                            2019年3月~6月<br/>
                            巨匠網頁整合套課課程學習<br/>
                            <br/>
                            2019年7月<br/>
                            正式任職前端工程師<br/>
                            `)),
                            m('.sec1-container-row-content-heading', [
                                m('h3', '辦公室技能：')
                            ]),
                            m('p', m.trust(`
                            Photoshop、Illstrator、Premiere、Word、Excel、PowerPoint<br/>
                            `)),
                            m('.sec1-container-row-content-heading', [
                                m('h3', '前端技能：')
                            ]),
                            m('p', m.trust(`
                            CSS排版： Flex<br/>
                            CSS框架： Bootstrap<br/>
                            CSS預處理器： SCSS<br/>
                            JS框架： Mithril<br/>
                            打包工具： webpack<br/>
                            `)),
                        ])
                    ])
                ])
            ]),
        ])
    }
}