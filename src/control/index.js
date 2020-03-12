import Layout from '../page/layout'
import * as Page from '../page'
import MainNavbar from './main-navbar'
import HeaderNavbar from './header-navbar'

//集中設定所有的 Route
export default class Control{
    constructor(){
        this.rootRoute = [{
            name: '首頁',
            link: '/',
            page: Layout(Page.Home),
        }]
        this.mainNavbar = MainNavbar.node
        this.headerNavbar = HeaderNavbar.node
    }

    route(){
        const route = {}
        this.rootRoute.map(item=>{
            route[item.link] = item.page
        })
        this.mainNavbar.map(item=>{
            route[item.link] = item.page
        })
        this.headerNavbar.map(item=>{
            route[item.link] = item.page
        })
        return route
    }

}