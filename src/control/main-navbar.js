import Layout from '../page/layout'
import * as Page from '../page'

export default [{
        name: '關於竹子',
        link: '/about',
        page: Layout(Page.About),
    },{
    //     name: '作品集',
    //     link: '/portfolio',
    //     page: Layout(Page.portfolio),
    // },{
    //     name: '工商合作',
    //     link: '/cooperation',
    //     page: Layout(Page.cooperation),
    // },{
        name: '履歷表',
        link: '/resume',
        page: Layout(Page.resume),
    // },{
    //     name: '部落格',
    //     link: '/blog',
    //     page: Layout(Page.Home),
    }]
