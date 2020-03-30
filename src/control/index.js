import m from 'mithril'
import Layout from '../page/layout'
import * as Page from '../page'
import MainNavbar from './main-navbar'
import HeaderNavbar from './header-navbar'

//集中設定所有的 Route
export default class Control {
    constructor() {
        this.rootRoute = [{
            name: '首頁',
            link: '/home',
            page: Layout(Page.Home),
        }]
        this.node = {
            RootRoute: this.rootRoute,
            MainNavbar,
            HeaderNavbar
        }
        this.mainNavbar = MainNavbar
        this.headerNavbar = HeaderNavbar
    }

    route() {
        const route = {}
        const excludes = ['/resume']
        // Object.keys(this.node).map(key => {
        //     console.log('key',key)
        //     if(excludes.every(exclude => exclude === key))return
        //     const nodes = this.node[key]
        //     console.log('node',nodes)
        //     console.log('this.node',this.node)
        //     nodes.forEach(node=>{
        //         route[node.link] = node.page
        //     })
        //     console.log('route',route)
        // })
        // console.log('route',route)
        this.rootRoute.map(item => {
            if(excludes.every(exclude => exclude === item))return
            route[item.link] = item.page
        })
        this.mainNavbar.map(item => {
            if(excludes.every(exclude => exclude === item))return
            route[item.link] = item.page
        })
        this.headerNavbar.map(item => {
            if(excludes.every(exclude => exclude === item))return
            route[item.link] = item.page
        })
        return route
    }
    routeSet(route) {
        const dom = this.pageSwitchAnimate
        dom.classList.remove('animateEnd')
        dom.classList.add('animateStart')
        dom.addEventListener('transitionend', () => {
            m.route.set(route)
            dom.classList.remove('animateStart')
            dom.classList.add('animateEnd')
        })
    }

}