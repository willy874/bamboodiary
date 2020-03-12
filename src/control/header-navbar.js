import Layout from '../page/layout'
import * as Page from '../page'

export default {
    node: [{
        name: '使用者資訊',
        link: '/user',
        page: Layout(Page.Home),
    },{
        name: '設定',
        link: '/setting',
        page: Layout(Page.Home),
    }]
}