import Layout from '../page/layout'
import * as Page from '../page'

export default {
    node: [{
        name: '關於竹子',
        link: '/about',
        page: Layout(Page.Home),
    },{
        name: '作品集',
        link: '/portfolio',
        page: Layout(Page.Home),
    },{
        name: '工商合作',
        link: '/components',
        page: Layout(Page.Home),
    },{
        name: '部落格',
        link: '/blog',
        page: Layout(Page.Home),
    }]
}